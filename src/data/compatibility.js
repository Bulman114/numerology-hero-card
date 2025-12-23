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
 * Get compatibility insights for a pair
 * @param {number} num1
 * @param {number} num2
 * @returns {object} - { strengths, challenges, tips }
 */
export function getCompatibilityInsights(num1, num2) {
    const key1 = `${Math.min(num1, num2)}-${Math.max(num1, num2)}`;
    const key2 = `${num1}-${num2}`;

    return COMPATIBILITY_INSIGHTS[key1] || COMPATIBILITY_INSIGHTS[key2] || {
        strengths: ['Opportunity for growth through differences', 'Learning from each other'],
        challenges: ['Requires conscious effort to understand each other', 'Different approaches'],
        tips: ['Focus on shared goals', 'Practice patience and empathy', 'Celebrate differences'],
    };
}

/**
 * Get compatibility level label
 * @param {number} score
 * @returns {string}
 */
export function getCompatibilityLevel(score) {
    if (score >= 90) return 'Exceptional';
    if (score >= 80) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 60) return 'Moderate';
    if (score >= 50) return 'Challenging';
    return 'Difficult';
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
