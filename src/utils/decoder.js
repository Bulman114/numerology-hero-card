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

// Curated dictionary for Anagram/Word finding
const POWER_WORDS = [
    'LOVE', 'LIFE', 'CODE', 'DATA', 'TECH', 'HERO', 'SOUL', 'MIND', 'STAR', 'MOON',
    'SUN', 'FIRE', 'WIND', 'GOLD', 'BLUE', 'ROSE', 'TIME', 'FATE', 'PATH', 'WILL',
    'GOOD', 'EVIL', 'HOLY', 'TRUE', 'PURE', 'FREE', 'WILD', 'DEEP', 'HIGH', 'VAST',
    'RICH', 'WISE', 'MECH', 'CYBER', 'NEON', 'VOID', 'NULL', 'ROOT', 'TREE', 'LEAF',
    'SEED', 'CORE', 'FLOW', 'GIFT', 'HOPE', 'WISH', 'DREAM', 'PLAN', 'WORK', 'REST',
    'PLAY', 'GAME', 'MATH', 'LOGIC', 'ZERO', 'ONE', 'TWO', 'TEN', 'KEY', 'LOCK',
    'DOOR', 'GATE', 'WAY', 'EGO', 'SELF', 'I', 'AM', 'BE', 'DO', 'GO',
    'MAGIC', 'WITCH', 'WIZARD', 'SPELL', 'RUNE', 'TAROT', 'MYSTIC', 'AURA', 'SPIRIT',
    'GHOST', 'ANGEL', 'DEMON', 'LUCIFER', 'GOD', 'SATAN', 'HEAVEN', 'HELL', 'EARTH',
    'WATER', 'SPACE', 'ETHER', 'METAL', 'WOOD', 'CRYSTAL', 'STONE', 'GEM', 'RUBY',
    'OPAL', 'PEARL', 'JADE', 'ONYX', 'AMBER', 'TOPAZ', 'QUARTZ', 'AGATE',
    'VIOLET', 'PURPLE', 'INDIGO', 'GREEN', 'YELLOW', 'ORANGE', 'RED', 'WHITE', 'BLACK',
    'GREY', 'SILVER', 'BRONZE', 'COPPER', 'IRON', 'STEEL', 'GLASS', 'LIGHT', 'DARK',
    'SHADOW', 'NIGHT', 'DAY', 'DAWN', 'DUSK', 'ALPHA', 'OMEGA', 'BEGIN', 'END',
    'PEACE', 'WAR', 'JOY', 'PAIN', 'HATE', 'FEAR', 'BRAVE', 'CALM', 'LUCK', 'DOOM',
    'DEATH', 'BIRTH', 'YOUTH', 'AGE', 'OLD', 'NEW', 'NOW', 'HERE', 'THERE',
    'HUMAN', 'ROBOT', 'ALIEN', 'BEAST', 'BIRD', 'FISH', 'LION', 'WOLF', 'BEAR',
    'SNAKE', 'DRAGON', 'EAGLE', 'HAWK', 'OWL', 'CROW', 'CAT', 'DOG', 'BAT',
    'MASTER', 'TEACHER', 'STUDENT', 'GUIDE', 'LEADER', 'KING', 'QUEEN', 'PRINCE',
    'LORD', 'LADY', 'KNIGHT', 'MAGE', 'BARD', 'DRUID', 'MONK', 'ROGUE', 'THIEF'
];

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

// Sacred & Scientific Constants
const SACRED_NUMBERS = {
    '108': 'Vedic Whole / Distance to Sun/Moon',
    '369': 'Tesla Code / Universal Key',
    '432': 'Verdi Pitch / Natural Tuning',
    '528': 'Solfeggio Freq (Miracle)',
    '137': 'Fine Structure Constant (Alpha)',
    '273': 'Absolute Zero / Moon Siderial',
    '618': 'Golden Ratio (approx)',
    '1618': 'Golden Ratio (Phi)'
};

const AURA_MAP = {
    1: { color: 'Red', trait: 'Leadership & Will', hex: '#FF4136' },
    2: { color: 'Orange', trait: 'Harmony & Balance', hex: '#FF851B' },
    3: { color: 'Yellow', trait: 'Creativity & Joy', hex: '#FFDC00' },
    4: { color: 'Green', trait: 'Stability & Order', hex: '#2ECC40' },
    5: { color: 'Blue', trait: 'Change & Freedom', hex: '#0074D9' },
    6: { color: 'Indigo', trait: 'Nurturing & Care', hex: '#001f3f' },
    7: { color: 'Violet', trait: 'Wisdom & Spirit', hex: '#B10DC9' },
    8: { color: 'Rose', trait: 'Power & Abundance', hex: '#F012BE' },
    9: { color: 'Gold', trait: 'Completion & Global', hex: '#FFD700' },
    11: { color: 'Silver', trait: 'Illumination', hex: '#DDDDDD' },
    22: { color: 'Coral', trait: 'Master Builder', hex: '#FF6F61' },
    33: { color: 'Platinum', trait: 'Universal Teacher', hex: '#E5E4E2' }
};

// ... existing code ...
const findAnagrams = (cleanInput) => {
    // ... (existing anagram implementation)
    if (!cleanInput || cleanInput.length < 2) return [];

    const inputUpper = cleanInput.toUpperCase();
    const inputCounts = {};
    for (const char of inputUpper) {
        inputCounts[char] = (inputCounts[char] || 0) + 1;
    }

    const found = [];

    for (const word of POWER_WORDS) {
        // Skip if word is longer than input
        if (word.length > inputUpper.length) continue;

        // Check if word can be formed
        const wordCounts = {};
        let possible = true;
        for (const char of word) {
            wordCounts[char] = (wordCounts[char] || 0) + 1;
        }

        for (const [char, count] of Object.entries(wordCounts)) {
            if (!inputCounts[char] || inputCounts[char] < count) {
                possible = false;
                break;
            }
        }

        if (possible) {
            found.push(word);
        }
    }

    return found.sort((a, b) => b.length - a.length).slice(0, 12); // Limit to top 12 longest matches
};

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
        breakdown: null,
        anagrams: []
    };

    // Detect Type & Component Breakdown
    const phoneRegex = /^(\+?\d{1,2}[\s.-]?)?\(?(\d{3})\)?[\s.-]?(\d{3})[\s.-]?(\d{4})$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/; // Simple MM/DD/YYYY
    const timeRegex = /^([01]?\d|2[0-3]):([0-5]\d)(\s?[AP]M)?$/i; // HH:MM [AM/PM]
    const licensePlateRegex = /^[A-Z0-9]{1,7}$/; // Generic US style

    if (emailRegex.test(raw)) {
        analysis.type = 'Email Address';
        const [user, domain] = raw.split('@');
        analysis.breakdown = [
            { label: 'User', value: user },
            { label: 'Domain', value: domain }
        ];
    } else if (phoneRegex.test(raw)) {
        analysis.type = 'Phone Number';
        const match = raw.match(phoneRegex);
        if (match) {
            analysis.breakdown = [];
            if (match[1]) analysis.breakdown.push({ label: 'Country', value: match[1].replace(/[\s+-]/g, '') });
            if (match[2]) analysis.breakdown.push({ label: 'Area Code', value: match[2] });
            if (match[3]) analysis.breakdown.push({ label: 'Prefix', value: match[3] });
            if (match[4]) analysis.breakdown.push({ label: 'Line', value: match[4] });
        }
    } else if (dateRegex.test(raw)) {
        analysis.type = 'Date';
        const [m, d, y] = raw.split('/');
        analysis.breakdown = [
            { label: 'Month', value: m },
            { label: 'Day', value: d },
            { label: 'Year', value: y }
        ];
    } else if (timeRegex.test(raw)) {
        analysis.type = 'Time';
        const match = raw.match(timeRegex);
        if (match) {
            analysis.breakdown = [
                { label: 'Hour', value: match[1] },
                { label: 'Minute', value: match[2] },
                { label: 'Period', value: match[3] ? match[3].trim().toUpperCase() : '24H' }
            ];
        }
    } else if (analysis.isNumeric) {
        analysis.type = 'Number';
    } else if (analysis.isAlpha) {
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
        // Also check if text looks like leet for 'E' (3), 'A' (4), 'T' (7), 'S' (5), 'O' (0), 'I' (1), 'B' (8)
        // Simple heuristic: if alphanumeric containing numbers, try to "unleet"
        // (Not implemented fully to avoid noise, but specific patterns are caught)
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

    // 3. Mathematical Properties & Gematria

    // A. Gematria / Value Calculation
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

    // B. Mathematical Analysis
    // We analyze either the direct numeric input OR the Gematria sum
    let numberValue = null;
    let numberSource = null;

    if (analysis.isNumeric && clean.length < 16) {
        numberValue = parseInt(clean);
        numberSource = 'Direct Input';
    } else if (analysis.gematria && analysis.gematria.sum > 0) {
        numberValue = analysis.gematria.sum;
        numberSource = 'Gematria Sum';
    }

    if (numberValue !== null && !isNaN(numberValue)) {
        const numStr = numberValue.toString();
        const digitSum = numStr.split('').reduce((a, b) => a + parseInt(b), 0);
        const digitProduct = numStr.length < 10 ? numStr.split('').reduce((a, b) => a * parseInt(b), 1) : null;

        analysis.math = {
            source: numberSource,
            value: numberValue,
            isPrime: isPrime(numberValue),
            isPerfectSquare: isPerfectSquare(numberValue),
            isTriangular: isTriangular(numberValue),
            isFibonacci: FIBONACCI_SET.has(numberValue),
            sumOfDigits: digitSum,
            productOfDigits: digitProduct,
            parity: numberValue % 2 === 0 ? 'Even' : 'Odd'
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

    // Find missing digits (if numeric context) or letters
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

    // 6. Anagram/Hidden Word Finder
    // If text context, find words that can be made from input
    if (analysis.isAlpha || analysis.isAlphanumeric) {
        analysis.anagrams = findAnagrams(clean);
    }

    // Sacred Number Check
    for (const [key, meaning] of Object.entries(SACRED_NUMBERS)) {
        if (raw.includes(key)) {
            analysis.patterns.push({ type: 'Sacred Number', match: key, meaning });
        } else if (analysis.gematria?.sum === parseInt(key)) {
            analysis.patterns.push({ type: 'Sacred Resonance', match: key, meaning: `${meaning} (Sum)` });
        }
    }

    // Dominant Aura Analysis
    if (analysis.gematria && analysis.gematria.reduction) {
        const root = analysis.gematria.reduction;
        if (AURA_MAP[root]) {
            analysis.aura = AURA_MAP[root];
        }
    }

    // Tech / Data View
    if (clean.length > 0) {
        analysis.tech = {
            messageLength: raw.length,
            ascii: clean.split('').slice(0, 10).map(c => c.charCodeAt(0)).join(' '),
            isHexColor: /^#[0-9A-F]{6}$/i.test(raw) || /^[0-9A-F]{6}$/i.test(raw)
        };
        if (analysis.tech.isHexColor) {
            analysis.tech.hexPreview = raw.startsWith('#') ? raw : `#${raw}`;
        }
    }

    return analysis;
};
