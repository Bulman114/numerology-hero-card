/**
 * Validate name input (alphabetic characters, spaces, hyphens only)
 * @param {string} name
 * @returns {object} - { isValid, error }
 */
export function validateName(name) {
    if (!name || name.trim().length === 0) {
        return { isValid: false, error: 'Name cannot be empty' };
    }

    if (!/^[a-zA-Z\s-]+$/.test(name)) {
        return { isValid: false, error: 'Name can only contain letters, spaces, and hyphens' };
    }

    if (name.length > 100) {
        return { isValid: false, error: 'Name is too long (max 100 characters)' };
    }

    return { isValid: true, error: null };
}

/**
 * Validate birthdate
 * @param {number} month
 * @param {number} day
 * @param {number} year
 * @returns {object} - { isValid, error }
 */
export function validateBirthdate(month, day, year) {
    const currentYear = new Date().getFullYear();

    if (!month || month < 1 || month > 12) {
        return { isValid: false, error: 'Invalid month (1-12)' };
    }

    if (!day || day < 1 || day > 31) {
        return { isValid: false, error: 'Invalid day (1-31)' };
    }

    if (!year || year < 1900 || year > currentYear) {
        return { isValid: false, error: `Invalid year (1900-${currentYear})` };
    }

    // Check valid day for month
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day > daysInMonth) {
        return { isValid: false, error: `Invalid day for this month (max ${daysInMonth})` };
    }

    return { isValid: true, error: null };
}

/**
 * Validate complete profile data before submission
 * @param {object} profileData
 * @returns {object} - { isValid, errors }
 */
export function validateProfile(profileData) {
    const errors = {};

    const firstNameValidation = validateName(profileData.firstName);
    if (!firstNameValidation.isValid) {
        errors.firstName = firstNameValidation.error;
    }

    const lastNameValidation = validateName(profileData.lastName);
    if (!lastNameValidation.isValid) {
        errors.lastName = lastNameValidation.error;
    }

    if (profileData.middleName && profileData.middleName.trim().length > 0) {
        const middleNameValidation = validateName(profileData.middleName);
        if (!middleNameValidation.isValid) {
            errors.middleName = middleNameValidation.error;
        }
    }

    const birthdateValidation = validateBirthdate(
        profileData.birthdate?.month,
        profileData.birthdate?.day,
        profileData.birthdate?.year
    );
    if (!birthdateValidation.isValid) {
        errors.birthdate = birthdateValidation.error;
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
}
