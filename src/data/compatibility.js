import { getLifePathProfile } from './lifePathProfiles';
import { getRotatedItems } from '../utils/contentRotation';

export const COMPATIBILITY_MATRIX = {
    1: { 1: 50, 2: 70, 3: 85, 4: 60, 5: 90, 6: 75, 7: 65, 8: 55, 9: 80, 11: 75, 22: 70, 33: 85 },
    2: { 1: 70, 2: 60, 3: 75, 4: 85, 5: 65, 6: 90, 7: 70, 8: 80, 9: 85, 11: 85, 22: 80, 33: 90 },
    3: { 1: 85, 2: 75, 3: 70, 4: 60, 5: 95, 6: 80, 7: 85, 8: 65, 9: 90, 11: 80, 22: 75, 33: 85 },
    4: { 1: 60, 2: 85, 3: 60, 4: 70, 5: 50, 6: 75, 7: 80, 8: 90, 9: 70, 11: 70, 22: 95, 33: 75 },
    5: { 1: 90, 2: 65, 3: 95, 4: 50, 5: 75, 6: 70, 7: 90, 8: 60, 9: 85, 11: 85, 22: 70, 33: 80 },
    6: { 1: 75, 2: 90, 3: 80, 4: 75, 5: 70, 6: 85, 7: 75, 8: 80, 9: 95, 11: 85, 22: 80, 33: 95 },
    7: { 1: 65, 2: 70, 3: 85, 4: 80, 5: 90, 6: 75, 7: 60, 8: 70, 9: 90, 11: 90, 22: 85, 33: 85 },
    8: { 1: 55, 2: 80, 3: 65, 4: 90, 5: 60, 6: 80, 7: 70, 8: 65, 9: 75, 11: 75, 22: 95, 33: 80 },
    9: { 1: 80, 2: 85, 3: 90, 4: 70, 5: 85, 6: 95, 7: 90, 8: 75, 9: 70, 11: 85, 22: 80, 33: 95 },
    11: { 1: 75, 2: 85, 3: 80, 4: 70, 5: 85, 6: 85, 7: 90, 8: 75, 9: 85, 11: 95, 22: 90, 33: 95 },
    22: { 1: 70, 2: 80, 3: 75, 4: 95, 5: 70, 6: 80, 7: 85, 8: 95, 9: 80, 11: 90, 22: 85, 33: 90 },
    33: { 1: 85, 2: 90, 3: 85, 4: 75, 5: 80, 6: 95, 7: 85, 8: 80, 9: 95, 11: 95, 22: 90, 33: 90 },
};

// Static insights for specific pairings (fallback)
export const COMPATIBILITY_INSIGHTS = {
    '1-1': {
        strengths: ['Mutual independence', 'Shared leadership goals', 'Strong drive'],
        challenges: ['Power struggles', 'Competing egos', 'Lack of compromise'],
        tips: ['Take turns leading', 'Celebrate each other\'s victories', 'Find separate domains'],
    },
    '1-2': {
        strengths: ['Complementary energies', 'Leader-supporter dynamic', 'Balance'],
        challenges: ['2 may feel overshadowed', '1 may find 2 too passive'],
        tips: ['1 should appreciate 2\'s support', '2 should voice needs clearly'],
    },
    '1-3': {
        strengths: ['High energy', 'Creative leadership', 'Mutual inspiration'],
        challenges: ['Competition for attention', 'Scattered focus'],
        tips: ['Direct creativity toward shared goals', 'Give each other spotlight'],
    },
    '2-6': {
        strengths: ['Deep emotional connection', 'Shared values of harmony', 'Nurturing bond'],
        challenges: ['Codependency risk', 'Both avoid conflict', 'Over-giving'],
        tips: ['Maintain individual identities', 'Practice direct communication'],
    },
    '3-5': {
        strengths: ['Adventure and creativity', 'Mutual love of freedom', 'Fun together'],
        challenges: ['Lack of stability', 'Both avoid commitment', 'Scattered energy'],
        tips: ['Create shared rituals', 'Balance spontaneity with planning'],
    },
    '4-8': {
        strengths: ['Shared work ethic', 'Material success alignment', 'Building together'],
        challenges: ['Workaholism', 'Emotional distance', 'Power struggles'],
        tips: ['Schedule quality time', 'Express feelings verbally', 'Celebrate wins'],
    },
    '7-9': {
        strengths: ['Deep philosophical connection', 'Spiritual alignment', 'Wisdom sharing'],
        challenges: ['Both withdraw emotionally', 'Idealism clashes', 'Different paces'],
        tips: ['Ground in practical activities', 'Share insights openly'],
    },
    '11-11': {
        strengths: ['Intense spiritual connection', 'Mutual understanding of sensitivity'],
        challenges: ['Overwhelming intensity', 'Both highly reactive'],
        tips: ['Ground regularly', 'Create calm spaces', 'Support each other\'s missions'],
    },
    '22-22': {
        strengths: ['Massive potential together', 'Shared vision for big projects'],
        challenges: ['Enormous pressure', 'Competition'],
        tips: ['Divide responsibilities', 'Support each other\'s legacy'],
    },
};

/**
 * Get compatibility score between two Life Path numbers
 * @param {number} num1 - First Life Path number
 * @param {number} num2 - Second Life Path number
 * @returns {number} - Compatibility score (0-100)
 */
export function getCompatibilityScore(num1, num2) {
    return COMPATIBILITY_MATRIX[num1]?.[num2] || 50;
}

/**
 * Get enhanced compatibility insights by combining profile data
 * @param {number} num1
 * @param {number} num2
 * @returns {object} - Enhanced insights object
 */
export function getCompatibilityInsights(num1, num2) {
    const key1 = `${Math.min(num1, num2)}-${Math.max(num1, num2)}`;
    const key2 = `${num1}-${num2}`;
    const staticInsights = COMPATIBILITY_INSIGHTS[key1] || COMPATIBILITY_INSIGHTS[key2];

    const profile1 = getLifePathProfile(num1);
    const profile2 = getLifePathProfile(num2);

    // Find compatibility data from the profiles themselves
    const findCompatibility = (profile, targetNum) => {
        if (!profile?.compatibility) return null;
        const categories = ['mostCompatible', 'challenging', 'complex'];
        for (const cat of categories) {
            const match = profile.compatibility[cat]?.find(c => c.number === targetNum);
            if (match) return { ...match, category: cat };
        }
        return null;
    };

    const match1 = findCompatibility(profile1, num2);
    const match2 = findCompatibility(profile2, num1);

    // Build dynamic insights from profile data
    const dynamicInsights = {
        strengths: [],
        challenges: [],
        tips: [],
        romanticDynamics: [],
        compatibility1: match1,
        compatibility2: match2,
    };

    // Add romantic traits from both profiles
    if (profile1?.relationships?.romantic?.traits) {
        const traits = getRotatedItems(profile1.relationships.romantic.traits, 2, `romantic-${num1}`);
        dynamicInsights.romanticDynamics.push({
            number: num1,
            archetype: profile1.archetype,
            traits,
        });
    }
    if (profile2?.relationships?.romantic?.traits) {
        const traits = getRotatedItems(profile2.relationships.romantic.traits, 2, `romantic-${num2}`);
        dynamicInsights.romanticDynamics.push({
            number: num2,
            archetype: profile2.archetype,
            traits,
        });
    }

    // If we have compatibility data, use it for insights
    if (match1) {
        if (match1.category === 'mostCompatible') {
            dynamicInsights.strengths.push(match1.reason);
        } else if (match1.category === 'challenging') {
            dynamicInsights.challenges.push(match1.reason);
        } else {
            dynamicInsights.complexDynamic = match1.reason;
        }
    }

    if (match2) {
        if (match2.category === 'mostCompatible') {
            dynamicInsights.strengths.push(match2.reason);
        } else if (match2.category === 'challenging') {
            dynamicInsights.challenges.push(match2.reason);
        }
    }

    // Add static insights if available
    if (staticInsights) {
        dynamicInsights.strengths = [...dynamicInsights.strengths, ...staticInsights.strengths];
        dynamicInsights.challenges = [...dynamicInsights.challenges, ...staticInsights.challenges];
        dynamicInsights.tips = [...staticInsights.tips];
    } else {
        // Default tips based on score
        const score = getCompatibilityScore(num1, num2);
        if (score >= 80) {
            dynamicInsights.tips = [
                'You share a natural resonance - nurture it with intention',
                'Use your combined strengths for shared goals',
                'Create space for individual growth too',
            ];
        } else if (score >= 60) {
            dynamicInsights.tips = [
                'Focus on what you can learn from each other',
                'Embrace your differences as opportunities',
                'Practice active listening and patience',
            ];
        } else {
            dynamicInsights.tips = [
                'This pairing requires conscious effort and understanding',
                'Celebrate small wins and moments of connection',
                'Consider finding complementary activities you both enjoy',
            ];
        }
    }

    // Add generic insights if we have no profile-specific ones
    if (dynamicInsights.strengths.length === 0) {
        dynamicInsights.strengths = [
            'Opportunity for growth through differences',
            'Learning from each other\'s perspectives',
        ];
    }
    if (dynamicInsights.challenges.length === 0) {
        dynamicInsights.challenges = [
            'Requires conscious effort to understand each other',
            'Different approaches to life may create friction',
        ];
    }

    // Deduplicate
    dynamicInsights.strengths = [...new Set(dynamicInsights.strengths)];
    dynamicInsights.challenges = [...new Set(dynamicInsights.challenges)];

    return dynamicInsights;
}

/**
 * Get compatibility level label
 * @param {number} score
 * @returns {string}
 */
export function getCompatibilityLevel(score) {
    if (score >= 90) return 'Soulmate Energy';
    if (score >= 80) return 'Deep Resonance';
    if (score >= 70) return 'Harmonious';
    if (score >= 60) return 'Growth Potential';
    if (score >= 50) return 'Challenging';
    return 'Karmic Lesson';
}

/**
 * Get compatibility color
 * @param {number} score
 * @returns {string} - Hex color
 */
export function getCompatibilityColor(score) {
    if (score >= 85) return '#16A085'; // Teal - Excellent
    if (score >= 70) return '#2ECC71'; // Green - Good
    if (score >= 55) return '#F39C12'; // Orange - Moderate
    return '#E74C3C'; // Red - Challenging
}

/**
 * Get detailed relationship summary
 * @param {number} num1
 * @param {number} num2
 * @returns {object}
 */
export function getRelationshipSummary(num1, num2) {
    const profile1 = getLifePathProfile(num1);
    const profile2 = getLifePathProfile(num2);
    const score = getCompatibilityScore(num1, num2);
    const level = getCompatibilityLevel(score);

    return {
        score,
        level,
        archetype1: profile1?.archetype || `Life Path ${num1}`,
        archetype2: profile2?.archetype || `Life Path ${num2}`,
        coreEssence1: profile1?.coreEssence,
        coreEssence2: profile2?.coreEssence,
        bestWith1: profile1?.relationships?.romantic?.bestWith,
        bestWith2: profile2?.relationships?.romantic?.bestWith,
        isBestMatch: profile1?.relationships?.romantic?.bestWith?.includes(num2) ||
            profile2?.relationships?.romantic?.bestWith?.includes(num1),
    };
}
