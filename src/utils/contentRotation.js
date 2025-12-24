/**
 * Content Rotation Utilities
 * 
 * Provides helpers for dynamically selecting content from arrays
 * to keep the app experience fresh across visits while maintaining
 * stability within a session.
 */

/**
 * Simple hash function for deterministic seeding
 * @param {string} str - String to hash
 * @returns {number} - Hash value
 */
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}

/**
 * Seeded random number generator
 * @param {number} seed - Seed value
 * @returns {function} - Random function that returns 0-1
 */
function seededRandom(seed) {
    return function () {
        seed = (seed * 1103515245 + 12345) & 0x7fffffff;
        return seed / 0x7fffffff;
    };
}

/**
 * Shuffle array using Fisher-Yates with optional seed
 * @param {Array} array - Array to shuffle
 * @param {string|number} seed - Optional seed for deterministic shuffle
 * @returns {Array} - New shuffled array
 */
function shuffleArray(array, seed = null) {
    const result = [...array];
    const random = seed !== null ? seededRandom(typeof seed === 'string' ? hashString(seed) : seed) : Math.random;

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

/**
 * Get N random items from an array with optional seeding
 * @param {Array} items - Source array
 * @param {number} count - Number of items to select
 * @param {string|null} seed - Optional seed for deterministic selection
 * @returns {Array} - Selected items
 */
export function getRotatedItems(items, count, seed = null) {
    if (!items || items.length === 0) return [];
    if (count >= items.length) return [...items];

    const shuffled = shuffleArray(items, seed);
    return shuffled.slice(0, count);
}

/**
 * Get a single item that rotates based on time
 * @param {Array} items - Source array
 * @param {string} frequency - 'daily' | 'hourly' | 'session'
 * @returns {*} - Selected item
 */
export function getDailyRotation(items, frequency = 'daily') {
    if (!items || items.length === 0) return null;

    const now = new Date();
    let seed;

    switch (frequency) {
        case 'hourly':
            seed = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}`;
            break;
        case 'session':
            // Use session storage to maintain consistency within a browsing session
            if (typeof sessionStorage !== 'undefined') {
                let sessionSeed = sessionStorage.getItem('rotationSeed');
                if (!sessionSeed) {
                    sessionSeed = Date.now().toString();
                    sessionStorage.setItem('rotationSeed', sessionSeed);
                }
                seed = sessionSeed;
            } else {
                seed = Date.now().toString();
            }
            break;
        case 'daily':
        default:
            seed = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
            break;
    }

    const index = hashString(seed) % items.length;
    return items[index];
}

/**
 * Get items for a specific display context
 * Ensures different views show different content from the same pool
 * @param {Array} items - Source array
 * @param {string} context - Context identifier ('heroCard' | 'coreMatrix' | 'reference' | 'compatibility')
 * @param {number} count - Number of items to return
 * @returns {Array} - Selected items
 */
export function getContextualItems(items, context, count = 3) {
    if (!items || items.length === 0) return [];

    const now = new Date();
    const dateSeed = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
    const seed = `${context}-${dateSeed}`;

    return getRotatedItems(items, count, seed);
}

/**
 * Get a rotating quote/wisdom for a specific profile
 * @param {object} keynote - Keynote object with giftToWorld, lifeLesson, affirmation
 * @param {string} context - Display context for variation
 * @returns {object} - { text: string, type: string }
 */
export function getRotatingQuote(keynote, context = 'default') {
    if (!keynote) return { text: '', type: '' };

    const quotes = [
        { text: keynote.giftToWorld, type: 'Gift to World' },
        { text: keynote.lifeLesson, type: 'Life Lesson' },
        { text: keynote.affirmation, type: 'Affirmation' }
    ];

    const selected = getDailyRotation(quotes, 'daily');
    return selected || quotes[0];
}

/**
 * Get a subset of career paths with rotation
 * @param {Array} paths - Array of career path objects
 * @param {number} count - Items to return
 * @param {string|number} profileId - Profile identifier for stable rotation
 * @returns {Array} - Selected career paths
 */
export function getRotatedCareers(paths, count = 5, profileId = '') {
    const seed = `careers-${profileId}-${new Date().toDateString()}`;
    return getRotatedItems(paths, count, seed);
}

/**
 * Get a subset of challenges/strengths with rotation
 * @param {Array} items - Array of challenge/strength strings
 * @param {number} count - Items to return
 * @param {string} type - 'challenges' | 'strengths' | 'growth'
 * @param {string|number} profileId - Profile identifier
 * @returns {Array} - Selected items
 */
export function getRotatedTraits(items, count = 3, type = 'traits', profileId = '') {
    const seed = `${type}-${profileId}-${new Date().toDateString()}`;
    return getRotatedItems(items, count, seed);
}
