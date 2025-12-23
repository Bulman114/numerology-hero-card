export const NUMBER_MEANINGS = {
    1: {
        keywords: ['Independent', 'Pioneering', 'Initiator'],
        description: 'The number of new beginnings, leadership, and individuality. Ones are natural-born leaders with strong willpower and determination.',
        strengths: ['Courageous', 'Innovative', 'Self-reliant', 'Determined', 'Ambitious'],
        challenges: ['Egotistical', 'Domineering', 'Impatient', 'Stubborn', 'Self-centered'],
        careers: ['Entrepreneur', 'Manager', 'Inventor', 'Leader', 'Freelancer'],
        lifePurpose: 'To develop individuality and learn to stand alone while leading others.',
        shadowSide: 'Fear of being ordinary or dependent on others.',
    },
    2: {
        keywords: ['Diplomatic', 'Cooperative', 'Sensitive'],
        description: 'The number of partnership, balance, and harmony. Twos are natural mediators who thrive in collaborative environments.',
        strengths: ['Empathetic', 'Diplomatic', 'Intuitive', 'Supportive', 'Patient'],
        challenges: ['Indecisive', 'Oversensitive', 'Codependent', 'Passive', 'Fearful'],
        careers: ['Counselor', 'Diplomat', 'Therapist', 'Mediator', 'Assistant'],
        lifePurpose: 'To learn cooperation, patience, and the art of relationships.',
        shadowSide: 'Losing identity in relationships or avoiding conflict at all costs.',
    },
    3: {
        keywords: ['Creative', 'Expressive', 'Optimistic'],
        description: 'The number of self-expression, creativity, and communication. Threes are natural entertainers with vibrant personalities.',
        strengths: ['Charismatic', 'Artistic', 'Optimistic', 'Social', 'Inspiring'],
        challenges: ['Scattered', 'Superficial', 'Exaggerating', 'Unfocused', 'Gossipy'],
        careers: ['Artist', 'Writer', 'Performer', 'Designer', 'Speaker'],
        lifePurpose: 'To express creativity and bring joy to others through self-expression.',
        shadowSide: 'Using charm to manipulate or avoiding emotional depth.',
    },
    4: {
        keywords: ['Practical', 'Disciplined', 'Builder'],
        description: 'The number of stability, hard work, and order. Fours are reliable builders who create lasting foundations.',
        strengths: ['Organized', 'Loyal', 'Methodical', 'Pragmatic', 'Trustworthy'],
        challenges: ['Rigid', 'Workaholic', 'Resistant to change', 'Overly serious', 'Stubborn'],
        careers: ['Architect', 'Accountant', 'Engineer', 'Manager', 'Contractor'],
        lifePurpose: 'To build solid foundations and create lasting structures in life.',
        shadowSide: 'Becoming too rigid or sacrificing joy for security.',
    },
    5: {
        keywords: ['Adventurous', 'Freedom-seeking', 'Dynamic'],
        description: 'The number of freedom, adventure, and change. Fives are versatile explorers who embrace life\'s experiences.',
        strengths: ['Adaptable', 'Energetic', 'Progressive', 'Resourceful', 'Curious'],
        challenges: ['Restless', 'Irresponsible', 'Impulsive', 'Inconsistent', 'Overindulgent'],
        careers: ['Travel guide', 'Sales', 'Journalist', 'Entrepreneur', 'Consultant'],
        lifePurpose: 'To experience freedom and teach others about constructive change.',
        shadowSide: 'Running from commitment or using freedom to avoid responsibility.',
    },
    6: {
        keywords: ['Nurturing', 'Responsible', 'Harmonizer'],
        description: 'The number of responsibility, care, and service. Sixes are natural caregivers who create harmonious environments.',
        strengths: ['Compassionate', 'Protective', 'Idealistic', 'Balanced', 'Loving'],
        challenges: ['Self-righteous', 'Worrying', 'Interfering', 'Martyrdom', 'Perfectionist'],
        careers: ['Teacher', 'Nurse', 'Social worker', 'Interior designer', 'Counselor'],
        lifePurpose: 'To nurture and take responsibility for family and community.',
        shadowSide: 'Enabling others or using guilt to control relationships.',
    },
    7: {
        keywords: ['Analytical', 'Introspective', 'Truth-seeker'],
        description: 'The number of wisdom, analysis, and spirituality. Sevens are deep thinkers who seek understanding and truth.',
        strengths: ['Intellectual', 'Intuitive', 'Reflective', 'Spiritual', 'Perceptive'],
        challenges: ['Isolated', 'Cynical', 'Perfectionist', 'Secretive', 'Detached'],
        careers: ['Researcher', 'Analyst', 'Philosopher', 'Scientist', 'Psychologist'],
        lifePurpose: 'To seek truth and develop wisdom through inner exploration.',
        shadowSide: 'Hiding behind intellect to avoid emotional connection.',
    },
    8: {
        keywords: ['Ambitious', 'Authoritative', 'Manifestor'],
        description: 'The number of power, achievement, and material success. Eights are natural executives who manifest abundance.',
        strengths: ['Confident', 'Efficient', 'Realistic', 'Authoritative', 'Visionary'],
        challenges: ['Materialistic', 'Workaholic', 'Controlling', 'Intolerant', 'Domineering'],
        careers: ['Executive', 'Banker', 'Real estate', 'Politician', 'Business owner'],
        lifePurpose: 'To master the material world and use power ethically.',
        shadowSide: 'Measuring self-worth by financial success or abusing power.',
    },
    9: {
        keywords: ['Humanitarian', 'Compassionate', 'Universal'],
        description: 'The number of completion, compassion, and global consciousness. Nines are old souls dedicated to serving humanity.',
        strengths: ['Generous', 'Idealistic', 'Artistic', 'Romantic', 'Wise'],
        challenges: ['Moody', 'Impractical', 'Possessive', 'Disconnected', 'Resentful'],
        careers: ['Nonprofit work', 'Artist', 'Healer', 'Teacher', 'Philanthropist'],
        lifePurpose: 'To serve humanity and learn to let go with grace.',
        shadowSide: 'Martyrdom or inability to receive from others.',
    },
    11: {
        keywords: ['Intuitive', 'Inspirational', 'Visionary'],
        description: 'Master number of spiritual insight and illumination. Elevens are highly intuitive channels for higher wisdom.',
        strengths: ['Psychic', 'Inspirational', 'Idealistic', 'Charismatic', 'Inventive'],
        challenges: ['Nervous', 'Impractical', 'Fanatical', 'Oversensitive', 'Self-critical'],
        careers: ['Spiritual teacher', 'Counselor', 'Artist', 'Inventor', 'Healer'],
        lifePurpose: 'To inspire others and channel spiritual insights into practical form.',
        shadowSide: 'Overwhelmed by sensitivity or using gifts for ego.',
        isMaster: true,
        reducesTo: 2,
    },
    22: {
        keywords: ['Master-builder', 'Practical-idealist', 'Architect'],
        description: 'Master number of the practical idealist. Twenty-twos turn dreams into reality through disciplined vision.',
        strengths: ['Visionary', 'Practical', 'Powerful', 'Confident', 'Diplomatic'],
        challenges: ['Overwhelming', 'Anxious', 'Dictatorial', 'Self-destructive', 'Workaholic'],
        careers: ['Large-scale entrepreneur', 'Diplomat', 'Architect', 'Systems designer', 'Leader'],
        lifePurpose: 'To build lasting institutions that serve humanity.',
        shadowSide: 'Feeling crushed by the weight of their potential.',
        isMaster: true,
        reducesTo: 4,
    },
    33: {
        keywords: ['Master-teacher', 'Selfless', 'Illuminator'],
        description: 'Master number of compassionate service. Thirty-threes are devoted to uplifting humanity through teaching and healing.',
        strengths: ['Nurturing', 'Sacrificial', 'Knowledgeable', 'Inspirational', 'Healing'],
        challenges: ['Martyrdom', 'Codependent', 'Unrealistic', 'Self-neglecting', 'Overwhelmed'],
        careers: ['Spiritual leader', 'Healer', 'Artist', 'Humanitarian', 'Teacher'],
        lifePurpose: 'To be a master teacher and healer for humanity.',
        shadowSide: 'Sacrificing self completely or feeling unworthy of the calling.',
        isMaster: true,
        reducesTo: 6,
    },
};

/**
 * Get meaning for a specific number
 * @param {number} num - The number to look up
 * @returns {object} - The meaning object
 */
export function getNumberMeaning(num) {
    return NUMBER_MEANINGS[num] || NUMBER_MEANINGS[1];
}

/**
 * Get all numbers in order (1-9 + masters)
 */
export function getAllNumbers() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];
}
