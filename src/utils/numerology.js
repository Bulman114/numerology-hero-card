// ============================================
// LETTER-TO-NUMBER MAPPINGS
// ============================================

export const PYTHAGOREAN_MAP = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
    j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
    s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8,
};

export const CHALDEAN_MAP = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 8, g: 3, h: 5, i: 1,
    j: 1, k: 2, l: 3, m: 4, n: 5, o: 7, p: 8, q: 1, r: 2,
    s: 3, t: 4, u: 6, v: 6, w: 6, x: 5, y: 1, z: 7,
};

export const MASTER_NUMBERS = [11, 22, 33];

// ============================================
// CORE REDUCTION FUNCTION
// ============================================

/**
 * Reduce a number to single digit or master number
 * @param {number} num - Number to reduce
 * @param {boolean} checkMaster - Whether to preserve master numbers
 * @returns {object} - { value, isMaster, steps }
 */
export function reduceToSingle(num, checkMaster = true) {
    const steps = [num];
    let current = num;

    while (current > 9) {
        // Check for master numbers
        if (checkMaster && MASTER_NUMBERS.includes(current)) {
            return {
                value: current,
                isMaster: true,
                steps,
            };
        }

        // Sum digits
        current = current
            .toString()
            .split('')
            .reduce((sum, digit) => sum + parseInt(digit, 10), 0);

        steps.push(current);
    }

    return {
        value: current,
        isMaster: false,
        steps,
    };
}

// ============================================
// LIFE PATH CALCULATION
// ============================================

/**
 * Calculate Life Path number from birthdate
 * @param {number} month - Month (1-12)
 * @param {number} day - Day (1-31)
 * @param {number} year - Full year (e.g., 1990)
 * @returns {object} - Life Path data
 */
export function calculateLifePath(month, day, year) {
    // Individual component reductions
    const monthReduced = reduceToSingle(month);
    const dayReduced = reduceToSingle(day);

    // Year: sum all digits first
    const yearSum = year
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    const yearReduced = reduceToSingle(yearSum);

    // Total sum
    const totalSum = monthReduced.value + dayReduced.value + yearReduced.value;
    const lifePath = reduceToSingle(totalSum);

    return {
        ...lifePath,
        calculation: {
            month: monthReduced,
            day: dayReduced,
            year: yearReduced,
            total: totalSum,
        },
        raw: { month, day, year },
    };
}

// ============================================
// NAME-TO-NUMBER CONVERSION
// ============================================

/**
 * Convert name to number using specified system
 * @param {string} name - Name to convert
 * @param {string} system - 'pythagorean' or 'chaldean'
 * @returns {object} - Conversion data
 */
export function nameToNumber(name, system = 'pythagorean') {
    const map = system === 'pythagorean' ? PYTHAGOREAN_MAP : CHALDEAN_MAP;
    const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');

    const letterValues = cleanName.split('').map(char => ({
        letter: char,
        value: map[char] || 0,
    }));

    const sum = letterValues.reduce((total, { value }) => total + value, 0);
    const reduced = reduceToSingle(sum);

    return {
        ...reduced,
        letterValues,
        sum,
        original: name,
    };
}

// ============================================
// EXPRESSION NUMBER (FULL NAME)
// ============================================

/**
 * Calculate Expression number from full name
 * @param {string} firstName
 * @param {string} middleName
 * @param {string} lastName
 * @param {string} system
 * @returns {object}
 */
export function calculateExpression(firstName, middleName, lastName, system = 'pythagorean') {
    const first = nameToNumber(firstName, system);
    const middle = middleName ? nameToNumber(middleName, system) : { value: 0, sum: 0 };
    const last = nameToNumber(lastName, system);

    const totalSum = first.sum + middle.sum + last.sum;
    const reduced = reduceToSingle(totalSum);

    return {
        ...reduced,
        breakdown: {
            firstName: first,
            middleName: middle,
            lastName: last,
        },
        totalSum,
    };
}

// ============================================
// SOUL URGE (VOWELS ONLY)
// ============================================

/**
 * Calculate Soul Urge from vowels in full name
 * @param {string} fullName
 * @param {string} system
 * @returns {object}
 */
export function calculateSoulUrge(fullName, system = 'pythagorean') {
    // Y is always treated as a vowel (per spec simplification)
    const vowels = fullName.toLowerCase().replace(/[^aeiouy]/g, '');
    const result = nameToNumber(vowels, system);

    return {
        ...result,
        vowels,
    };
}

// ============================================
// PERSONALITY (CONSONANTS ONLY)
// ============================================

/**
 * Calculate Personality from consonants in full name
 * @param {string} fullName
 * @param {string} system
 * @returns {object}
 */
export function calculatePersonality(fullName, system = 'pythagorean') {
    const consonants = fullName.toLowerCase().replace(/[aeiouy\s]/g, '');
    const result = nameToNumber(consonants, system);

    return {
        ...result,
        consonants,
    };
}

// ============================================
// BIRTHDAY NUMBER (UNREDUCED)
// ============================================

/**
 * Get birthday number (day of birth, unreduced)
 * @param {number} day - Day of birth (1-31)
 * @returns {number}
 */
export function calculateBirthday(day) {
    return day;
}

// ============================================
// PERSONAL YEAR
// ============================================

/**
 * Calculate Personal Year for current/specified year
 * @param {number} birthMonth
 * @param {number} birthDay
 * @param {number} targetYear - Year to calculate for (default: current year)
 * @returns {object}
 */
export function calculatePersonalYear(birthMonth, birthDay, targetYear = new Date().getFullYear()) {
    const monthReduced = reduceToSingle(birthMonth);
    const dayReduced = reduceToSingle(birthDay);
    const yearReduced = reduceToSingle(
        targetYear.toString().split('').reduce((sum, d) => sum + parseInt(d, 10), 0)
    );

    const total = monthReduced.value + dayReduced.value + yearReduced.value;
    const personalYear = reduceToSingle(total);

    return {
        ...personalYear,
        targetYear,
        calculation: {
            month: monthReduced,
            day: dayReduced,
            year: yearReduced,
        },
    };
}

// ============================================
// CHALLENGE NUMBER
// ============================================

/**
 * Calculate Challenge Number (difference between largest and smallest digit in birthdate)
 * @param {number} month
 * @param {number} day
 * @param {number} year
 * @returns {number}
 */
export function calculateChallengeNumber(month, day, year) {
    const allDigits = `${month}${day}${year}`
        .split('')
        .map(d => parseInt(d, 10));

    const max = Math.max(...allDigits);
    const min = Math.min(...allDigits);

    return max - min;
}

// ============================================
// ALL NUMBERS (COMPREHENSIVE CALCULATION)
// ============================================

/**
 * Calculate all numerology numbers for a profile
 * @param {object} profileData - { fullName, firstName, middleName, lastName, birthdate, calculationMethod }
 * @returns {object} - All calculated numbers
 */
export function calculateAllNumbers(profileData) {
    const {
        firstName = '',
        middleName = '',
        lastName = '',
        birthdate,
        calculationMethod = 'pythagorean',
    } = profileData;

    const fullName = `${firstName} ${middleName} ${lastName}`.trim();

    const lifePath = calculateLifePath(
        birthdate.month,
        birthdate.day,
        birthdate.year
    );

    const expression = calculateExpression(
        firstName,
        middleName,
        lastName,
        calculationMethod
    );

    const soulUrge = calculateSoulUrge(fullName, calculationMethod);
    const personality = calculatePersonality(fullName, calculationMethod);
    const birthday = calculateBirthday(birthdate.day);
    const personalYear = calculatePersonalYear(birthdate.month, birthdate.day);
    const challengeNumber = calculateChallengeNumber(
        birthdate.month,
        birthdate.day,
        birthdate.year
    );

    return {
        lifePath,
        expression,
        soulUrge,
        personality,
        birthday,
        personalYear,
        challengeNumber,
    };
}
