// Pattern Dictionaries
const LEET_SPEAK = {
    '1337': 'LEET (Elite)',
    '8008': 'BOOB', // Classic calculator humor
    '420': 'Cannabis Culture',
    '69': 'Yin Yang / Balance (or slang)',
    '666': 'Number of the Beast',
    '777': 'Jackpot / Divine Perfection',
    '911': 'Emergency',
    '404': 'Not Found',
    '101': 'Basics / Introduction',
    '86': 'To remove / throw out',
    '007': 'James Bond',
    '314': 'Pi (approx)',
    '333': 'Divine Intervention',
    '444': 'Protection',
    '555': 'Change',
    '888': 'Abundance',
    '999': 'Completion',
    '1111': 'Awakening / Portal',
};

const NUMERONYMS = {
    'K9': 'Canine',
    'GR8': 'Great',
    'L8R': 'Later',
    'B4': 'Before',
    '4EVER': 'Forever',
    'K8S': 'Kubernetes',
    'I18N': 'Internationalization',
    'A11Y': 'Accessibility',
    'W3C': 'World Wide Web Consortium',
    'P2P': 'Peer to Peer',
    'B2B': 'Business to Business',
    '1UP': 'Extra Life',
};

const TEXT_SPEAK = {
    'BRB': 'Be Right Back',
    'LOL': 'Laughing Out Loud',
    'OMG': 'Oh My God',
    'U': 'You',
    'R': 'Are',
    '2': 'To/Too',
    '4': 'For',
    'IDK': "I Don't Know",
    'TBH': 'To Be Honest',
    'IMO': 'In My Opinion',
    'AFK': 'Away From Keyboard',
    'GG': 'Good Game',
};

// Math Helpers
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
};

const isPerfectSquare = (num) => Math.sqrt(num) % 1 === 0;

const isTriangular = (num) => {
    // 8n + 1 is a perfect square for triangular numbers
    return isPerfectSquare(8 * num + 1);
};

// Generate Fibonacci set up to a safe text limit
const FIBONACCI_SET = new Set();
let a = 0, b = 1;
FIBONACCI_SET.add(0);
FIBONACCI_SET.add(1);
while (b < 1000000) { // Limit for practical pattern matching
    let temp = a + b;
    a = b;
    b = temp;
    FIBONACCI_SET.add(b);
}

// Core Analyzer Function
export const analyzeInput = (input) => {
    if (!input) return null;

    const raw = input.trim();
    const clean = raw.replace(/[^a-zA-Z0-9]/g, '');
    const cleanUpper = clean.toUpperCase();

    // 1. Input Type Detection
    const analysis = {
        original: raw,
        clean: clean,
        type: 'Unknown',
        length: clean.length,
        isNumeric: /^[0-9]+$/.test(clean),
        isAlpha: /^[a-zA-Z]+$/.test(clean),
        isAlphanumeric: /^[a-zA-Z0-9]+$/.test(clean) && !/^[0-9]+$/.test(clean) && !/^[a-zA-Z]+$/.test(clean),
        patterns: [],
        math: null,
        representations: null,
        frequency: {},
        gematria: 0,
    };

    // Detect Type
    const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/; // Simple MM/DD/YYYY
    const licensePlateRegex = /^[A-Z0-9]{1,7}$/; // Generic US style

    if (emailRegex.test(raw)) analysis.type = 'Email Address';
    else if (phoneRegex.test(raw)) analysis.type = 'Phone Number';
    else if (dateRegex.test(raw)) analysis.type = 'Date';
    else if (analysis.isNumeric) analysis.type = 'Number';
    else if (analysis.isAlpha) {
        if (clean.length === 1) analysis.type = 'Letter';
        else analysis.type = 'Word/Name';
    } else if (licensePlateRegex.test(cleanUpper) && clean.length > 3 && clean.length < 9) {
        analysis.type = 'License Plate Code (Potential)';
    } else {
        analysis.type = 'Alphanumeric String';
    }

    // 2. Pattern Analysis

    // Leet & Slang
    for (const [key, meaning] of Object.entries(LEET_SPEAK)) {
        if (raw.includes(key)) analysis.patterns.push({ type: 'Leet/Slang', match: key, meaning });
    }

    // Numeronyms
    for (const [key, meaning] of Object.entries(NUMERONYMS)) {
        if (cleanUpper === key) analysis.patterns.push({ type: 'Numeronym', match: key, meaning });
        else if (cleanUpper.includes(key)) analysis.patterns.push({ type: 'Numeronym (Partial)', match: key, meaning });
    }

    // Text Speak
    if (analysis.isAlpha || analysis.isAlphanumeric) {
        for (const [key, meaning] of Object.entries(TEXT_SPEAK)) {
            if (cleanUpper === key) analysis.patterns.push({ type: 'Text Speak', match: key, meaning });
        }
    }

    // Numeric Patterns (even inside mixed strings)
    const numbers = raw.match(/\d+/g);
    if (numbers) {
        numbers.forEach(numStr => {
            // Repetition
            if (/^(\d)\1+$/.test(numStr)) {
                analysis.patterns.push({ type: 'Repeating Digits', match: numStr, meaning: `Sequence of ${numStr[0]}` });
            }
            // Palindrome
            const reversed = numStr.split('').reverse().join('');
            if (numStr.length > 1 && numStr === reversed) {
                analysis.patterns.push({ type: 'Palindrome', match: numStr, meaning: 'Reads same forwards/backwards' });
            }
            // Ascending
            if (numStr.length > 2 && '0123456789'.includes(numStr)) {
                analysis.patterns.push({ type: 'Ascending Sequence', match: numStr, meaning: 'Sequential order' });
            }
            // Descending
            if (numStr.length > 2 && '9876543210'.includes(numStr)) {
                analysis.patterns.push({ type: 'Descending Sequence', match: numStr, meaning: 'Reverse sequential order' });
            }
        });
    }

    // 3. Mathematical Properties (if numeric or convertible)
    let numberValue = null;
    if (analysis.isNumeric) {
        numberValue = parseInt(clean);
    }

    if (numberValue !== null && !isNaN(numberValue) && clean.length < 16) {
        analysis.math = {
            value: numberValue,
            isPrime: isPrime(numberValue),
            isPerfectSquare: isPerfectSquare(numberValue),
            isTriangular: isTriangular(numberValue),
            isFibonacci: FIBONACCI_SET.has(numberValue),
        };

        analysis.representations = {
            binary: numberValue.toString(2),
            hex: numberValue.toString(16).toUpperCase(),
            octal: numberValue.toString(8),
        };
    }

    // 4. Frequency Analysis
    const freq = {};
    for (const char of cleanUpper) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Find missing digits (if numeric context)
    if (analysis.isNumeric) {
        const missing = [];
        for (let i = 0; i <= 9; i++) {
            if (!freq[i.toString()]) missing.push(i);
        }
        analysis.frequency.missingDigits = missing;
    }

    analysis.frequency.counts = freq;

    // Most common
    let maxCount = 0;
    let mostCommon = [];
    for (const [char, count] of Object.entries(freq)) {
        if (count > maxCount) {
            maxCount = count;
            mostCommon = [char];
        } else if (count === maxCount) {
            mostCommon.push(char);
        }
    }
    analysis.frequency.mostCommon = { chars: mostCommon, count: maxCount };

    // 5. Basic Numerology Sum (Cross-sum)
    // Reduce entire alphanum string to single digit/master
    if (clean.length > 0) {
        let sum = 0;
        for (const char of cleanUpper) {
            if (/[0-9]/.test(char)) {
                sum += parseInt(char);
            } else if (/[A-Z]/.test(char)) {
                // Pythagorean: A=1, B=2 ... I=9, J=1 ...
                const val = (char.charCodeAt(0) - 64) % 9;
                sum += (val === 0 ? 9 : val);
            }
        }

        let reduction = sum;
        while (reduction > 9 && reduction !== 11 && reduction !== 22 && reduction !== 33) {
            reduction = Array.from(String(reduction), Number).reduce((a, b) => a + b, 0);
        }

        analysis.gematria = {
            sum: sum,
            reduction: reduction,
            isMaster: [11, 22, 33].includes(reduction)
        };
    }

    return analysis;
};
