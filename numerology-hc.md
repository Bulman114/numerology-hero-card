# Numerology Hero Card: Complete Development Specification

## Executive Summary

**Project Name:** Numerology Hero Card
**Type:** Progressive Web App (PWA)
**Platform:** Web-first (iOS/Android via browser, installable)
**Tech Stack:** React 18 + Vite + Tailwind CSS + Framer Motion + Zustand
**Timeline:** 4-6 weeks (MVP in 2-3 weeks)
**Deployment:** Vercel (zero-config hosting)

**Core Value Proposition:**
Generate comprehensive numerological identity cards with transparent mathematical calculations, esoteric correspondences, and multi-profile management. Educational tool blending mathematical rigor with symbolic interpretation.

---

## Table of Contents

1. [Project Setup](#1-project-setup)
2. [Application Architecture](#2-application-architecture)
3. [Data Models & State Management](#3-data-models--state-management)
4. [Core Algorithm Implementation](#4-core-algorithm-implementation)
5. [Component Specifications](#5-component-specifications)
6. [Styling & Design System](#6-styling--design-system)
7. [Features by Phase](#7-features-by-phase)
8. [PWA Configuration](#8-pwa-configuration)
9. [Testing Strategy](#9-testing-strategy)
10. [Deployment Instructions](#10-deployment-instructions)
11. [Reference Data](#11-reference-data)
12. [Export Utilities](#12-export-utilities)
13. [Final Implementation Checklist](#13-final-implementation-checklist)
14. [Troubleshooting Guide](#14-troubleshooting-guide)
15. [Performance Optimization](#15-performance-optimization)
16. [Accessibility Requirements](#16-accessibility-requirements)
17. [Security Considerations](#17-security-considerations)

---

## 1. Project Setup

### 1.1 Initialize Project

```bash
# Create React app with Vite
npm create vite@latest numerology-hero -- --template react
cd numerology-hero

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install additional libraries
npm install zustand framer-motion html2canvas jspdf date-fns lucide-react

# Install development dependencies
npm install -D @testing-library/react @testing-library/jest-dom vitest jsdom
```

### 1.2 Project Structure

```
numerology-hero/
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── icons/                 # App icons (multiple sizes)
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   └── icon-maskable.png
│   └── sw.js                  # Service worker
├── src/
│   ├── assets/                # Images, fonts
│   │   └── tarot/            # Tarot card images (0-21)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Navigation.jsx
│   │   │   └── Footer.jsx
│   │   ├── input/
│   │   │   ├── InputForm.jsx
│   │   │   ├── DatePicker.jsx
│   │   │   └── NameInput.jsx
│   │   ├── card/
│   │   │   ├── HeroCard.jsx
│   │   │   ├── CardHeader.jsx
│   │   │   ├── CardBody.jsx
│   │   │   ├── CoreNumbers.jsx
│   │   │   ├── ArchetypeReference.jsx
│   │   │   └── EsotericSection.jsx
│   │   ├── calculations/
│   │   │   ├── CalculationTree.jsx
│   │   │   ├── StepByStep.jsx
│   │   │   └── ReductionPath.jsx
│   │   ├── profiles/
│   │   │   ├── ProfileList.jsx
│   │   │   ├── ProfileCard.jsx
│   │   │   └── ProfileComparison.jsx
│   │   ├── compatibility/
│   │   │   ├── CompatibilityChecker.jsx
│   │   │   └── HarmonyScore.jsx
│   │   ├── export/
│   │   │   ├── ExportModal.jsx
│   │   │   └── ShareButtons.jsx
│   │   ├── reference/
│   │   │   ├── ReferenceLibrary.jsx
│   │   │   ├── NumberMeanings.jsx
│   │   │   ├── MethodsGuide.jsx
│   │   │   └── TypeologyBridge.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Modal.jsx
│   │       ├── Tooltip.jsx
│   │       ├── Accordion.jsx
│   │       └── Tabs.jsx
│   ├── utils/
│   │   ├── numerology.js      # Core calculations
│   │   ├── validation.js      # Input validation
│   │   ├── export.js          # Export utilities
│   │   └── constants.js       # Static data
│   ├── data/
│   │   ├── numberMeanings.js
│   │   ├── esotericData.js
│   │   ├── compatibility.js
│   │   └── tarotData.js
│   ├── hooks/
│   │   ├── useNumerology.js
│   │   ├── useLocalStorage.js
│   │   └── useExport.js
│   ├── store/
│   │   └── useProfileStore.js # Zustand state
│   ├── styles/
│   │   └── globals.css        # Global styles
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

### 1.3 Tailwind Configuration

**`tailwind.config.js`:**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Life Path specific colors
        lifepath: {
          1: '#E74C3C', // Red
          2: '#F39C12', // Orange
          3: '#F1C40F', // Yellow
          4: '#2ECC71', // Green
          5: '#3498DB', // Blue
          6: '#9B59B6', // Purple
          7: '#5D3FD3', // Deep Violet
          8: '#34495E', // Charcoal
          9: '#95A5A6', // Silver
          11: '#ECF0F1', // Platinum (Master)
          22: '#C0392B', // Crimson (Master)
          33: '#16A085', // Teal (Master)
        },
        background: {
          cream: '#F5F5DC',
          charcoal: '#2F4F4F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        display: ['Futura', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero': '4rem',
        'display': '3rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'number-cascade': 'cascade 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        cascade: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

### 1.4 Vite Configuration

**`vite.config.js`:**

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'icons/*.png'],
      manifest: {
        name: 'Numerology Hero Card',
        short_name: 'Hero Card',
        description: 'Generate comprehensive numerological identity cards',
        theme_color: '#5D3FD3',
        background_color: '#F5F5DC',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/icon-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
```

### 1.5 Package.json Scripts

```json
{
  "name": "numerology-hero",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "lint": "eslint src --ext js,jsx",
    "format": "prettier --write \"src/**/*.{js,jsx,css,md}\""
  }
}
```

---

## 2. Application Architecture

### 2.1 Component Hierarchy

```
App
├── Header
│   └── Navigation
├── Main Content (Router-based)
│   ├── Home/InputForm
│   │   ├── NameInput
│   │   ├── DatePicker
│   │   └── MethodSelector
│   ├── HeroCard
│   │   ├── CardHeader
│   │   ├── CoreNumbers
│   │   ├── ArchetypeReference
│   │   ├── EsotericSection
│   │   └── ExportButtons
│   ├── CalculationBreakdown
│   │   ├── LifePathTree
│   │   ├── NameReduction
│   │   └── StepAnimation
│   ├── ProfileLibrary
│   │   ├── ProfileList
│   │   └── ProfileComparison
│   ├── CompatibilityChecker
│   │   ├── ProfileSelector
│   │   └── HarmonyScore
│   └── ReferenceLibrary
│       ├── NumberMeanings
│       ├── MethodsGuide
│       └── TypeologyBridge
└── Footer
```

### 2.2 Routing Structure

```javascript
// src/App.jsx structure
const routes = [
  { path: '/', component: InputForm },
  { path: '/card/:profileId', component: HeroCard },
  { path: '/calculations/:profileId', component: CalculationBreakdown },
  { path: '/profiles', component: ProfileLibrary },
  { path: '/compatibility', component: CompatibilityChecker },
  { path: '/reference', component: ReferenceLibrary },
];
```

**Note:** For MVP, use hash-based routing or conditional rendering. Full routing can be added in Phase 2.

### 2.3 State Flow

```
User Input → Zustand Store → Calculation Utils → Display Components
     ↓
localStorage (persistence)
     ↓
Export Functions (PNG/PDF/JSON)
```

---

## 3. Data Models & State Management

### 3.1 Profile Data Model

```javascript
// TypeScript-style definition (implement in JS)
const Profile = {
  id: 'uuid-string',
  fullName: 'Clara Jane Bennett',
  firstName: 'Clara',
  middleName: 'Jane',
  lastName: 'Bennett',
  birthdate: {
    month: 7,
    day: 15,
    year: 1990,
    formatted: '07/15/1990',
  },
  nickname: 'Clara', // Optional
  calculationMethod: 'pythagorean', // or 'chaldean'
  numbers: {
    lifePath: {
      value: 7,
      isMaster: false,
      calculation: [7, 1, 5, 1, 9, 9, 0, 32, 5],
    },
    expression: {
      value: 1,
      isMaster: false,
      breakdown: {
        firstName: 8,
        middleName: 3,
        lastName: 8,
      },
    },
    soulUrge: {
      value: 9,
      vowels: 'aaaaee',
    },
    personality: {
      value: 1,
      consonants: 'clrjnbnnt',
    },
    birthday: 15, // Unreduced
    personalYear: 7, // Current year calculation
    challengeNumber: 7, // Max - min digit in birthdate
  },
  esoteric: {
    tarot: 'The Chariot',
    planet: 'Neptune',
    color: '#5D3FD3',
    gemstone: 'Amethyst',
    element: 'Water',
    chakra: 'Crown',
  },
  createdAt: '2025-12-23T10:30:00Z',
  updatedAt: '2025-12-23T10:30:00Z',
};
```

### 3.2 Zustand Store Implementation

**`src/store/useProfileStore.js`:**

```javascript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { calculateAllNumbers } from '../utils/numerology';

const useProfileStore = create(
  persist(
    (set, get) => ({
      // State
      profiles: [],
      activeProfileId: null,
      calculationMethod: 'pythagorean',
      
      // Computed
      activeProfile: () => {
        const { profiles, activeProfileId } = get();
        return profiles.find(p => p.id === activeProfileId) || null;
      },
      
      // Actions
      addProfile: (profileData) => {
        const newProfile = {
          ...profileData,
          id: crypto.randomUUID(),
          numbers: calculateAllNumbers(profileData),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        
        set(state => ({
          profiles: [...state.profiles, newProfile],
          activeProfileId: newProfile.id,
        }));
        
        return newProfile.id;
      },
      
      updateProfile: (id, updates) => {
        set(state => ({
          profiles: state.profiles.map(p =>
            p.id === id
              ? {
                  ...p,
                  ...updates,
                  numbers: calculateAllNumbers({ ...p, ...updates }),
                  updatedAt: new Date().toISOString()
                }
              : p
          ),
        }));
      },
      
      deleteProfile: (id) => {
        set(state => ({
          profiles: state.profiles.filter(p => p.id !== id),
          activeProfileId: state.activeProfileId === id ? null : state.activeProfileId,
        }));
      },
      
      setActiveProfile: (id) => {
        set({ activeProfileId: id });
      },
      
      setCalculationMethod: (method) => {
        set({ calculationMethod: method });
        // Recalculate all profiles with new method
        const { profiles } = get();
        set({
          profiles: profiles.map(p => ({
            ...p,
            calculationMethod: method,
            numbers: calculateAllNumbers({ ...p, calculationMethod: method }),
          })),
        });
      },
      
      importProfiles: (profilesData) => {
        set({ profiles: profilesData });
      },
      
      clearAllProfiles: () => {
        set({ profiles: [], activeProfileId: null });
      },
    }),
    {
      name: 'numerology-profiles', // localStorage key
      version: 1,
    }
  )
);

export default useProfileStore;
```

---

## 4. Core Algorithm Implementation

### 4.1 Numerology Calculation Utilities

**`src/utils/numerology.js`:**

```javascript
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
  const vowels = fullName.toLowerCase().replace(/[^aeiouy]/g, '');
  
  // Y is vowel only when it sounds like one (simplification: always count it)
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

// ============================================
// COMPATIBILITY CALCULATION
// ============================================

/**
 * Calculate compatibility score between two Life Path numbers
 * @param {number} lifePath1
 * @param {number} lifePath2
 * @returns {object} - { score, strengths, challenges, tips }
 */
export function calculateCompatibility(lifePath1, lifePath2) {
  // Compatibility matrix (0-100 score)
  const compatibilityMatrix = {
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
  
  const score = compatibilityMatrix[lifePath1]?.[lifePath2] || 50;
  
  // Generate dynamic insights based on score ranges
  let strengths = [];
  let challenges = [];
  let tips = [];
  
  if (score >= 85) {
    strengths = [
      'Natural harmony and understanding',
      'Complementary life goals',
      'Strong emotional connection',
    ];
    challenges = ['May become too comfortable', 'Need to maintain individual growth'];
    tips = ['Schedule regular adventures together', 'Support each other\'s personal projects'];
  } else if (score >= 70) {
    strengths = [
      'Good mutual respect',
      'Balanced give-and-take',
      'Compatible communication styles',
    ];
    challenges = ['Occasional misunderstandings', 'Different processing speeds'];
    tips = ['Practice active listening', 'Create shared rituals'];
  } else if (score >= 50) {
    strengths = ['Opportunity for growth', 'Learn from differences'];
    challenges = ['Core value conflicts', 'Requires compromise'];
    tips = ['Focus on shared goals', 'Respect each other\'s space'];
  } else {
    strengths = ['Challenging but transformative'];
    challenges = ['Fundamental differences', 'High effort required'];
    tips = ['Seek professional guidance if needed', 'Clearly define boundaries'];
  }
  
  return {
    score,
    strengths,
    challenges,
    tips,
    compatibility: score >= 85 ? 'Excellent' : score >= 70 ? 'Good' : score >= 50 ? 'Moderate' : 'Challenging',
  };
}
```

### 4.2 Validation Utilities

**`src/utils/validation.js`:**

```javascript
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
  
  if (month < 1 || month > 12) {
    return { isValid: false, error: 'Invalid month (1-12)' };
  }
  
  if (day < 1 || day > 31) {
    return { isValid: false, error: 'Invalid day (1-31)' };
  }
  
  if (year < 1900 || year > currentYear) {
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
  
  if (profileData.middleName) {
    const middleNameValidation = validateName(profileData.middleName);
    if (!middleNameValidation.isValid) {
      errors.middleName = middleNameValidation.error;
    }
  }
  
  const birthdateValidation = validateBirthdate(
    profileData.birthdate.month,
    profileData.birthdate.day,
    profileData.birthdate.year
  );
  if (!birthdateValidation.isValid) {
    errors.birthdate = birthdateValidation.error;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
```

---

## 5. Component Specifications

### 5.1 Input Form Component

**`src/components/input/InputForm.jsx`:**

```javascript
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useProfileStore from '../../store/useProfileStore';
import { validateProfile } from '../../utils/validation';
import NameInput from './NameInput';
import DatePicker from './DatePicker';
import Button from '../ui/Button';

const InputForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    nickname: '',
    birthdate: {
      month: '',
      day: '',
      year: '',
    },
  });
  
  const [errors, setErrors] = useState({});
  const { addProfile, calculationMethod, setCalculationMethod } = useProfileStore();
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };
  
  const handleBirthdateChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      birthdate: {
        ...prev.birthdate,
        [field]: value,
      },
    }));
    
    if (errors.birthdate) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.birthdate;
        return newErrors;
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    const validation = validateProfile({
      ...formData,
      calculationMethod,
    });
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    // Create profile
    const profileId = addProfile({
      ...formData,
      calculationMethod,
    });
    
    // Navigate to card view (implement routing or state change)
    console.log('Profile created:', profileId);
    
    // Reset form
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      nickname: '',
      birthdate: {
        month: '',
        day: '',
        year: '',
      },
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6"
    >
      <h1 className="text-4xl font-display text-center mb-8 text-background-charcoal">
        🔢 Numerology Hero Card
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <NameInput
          label="First Name"
          value={formData.firstName}
          onChange={(value) => handleInputChange('firstName', value)}
          error={errors.firstName}
          required
        />
        
        <NameInput
          label="Middle Name (Optional)"
          value={formData.middleName}
          onChange={(value) => handleInputChange('middleName', value)}
          error={errors.middleName}
        />
        
        <NameInput
          label="Last Name"
          value={formData.lastName}
          onChange={(value) => handleInputChange('lastName', value)}
          error={errors.lastName}
          required
        />
        
        <NameInput
          label="Nickname (Optional)"
          value={formData.nickname}
          onChange={(value) => handleInputChange('nickname', value)}
          placeholder="How you're commonly called"
        />
        
        <DatePicker
          month={formData.birthdate.month}
          day={formData.birthdate.day}
          year={formData.birthdate.year}
          onChange={handleBirthdateChange}
          error={errors.birthdate}
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Calculation Method
          </label>
          <div className="flex gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                value="pythagorean"
                checked={calculationMethod === 'pythagorean'}
                onChange={(e) => setCalculationMethod(e.target.value)}
                className="mr-2"
              />
              <span>Pythagorean</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                value="chaldean"
                checked={calculationMethod === 'chaldean'}
                onChange={(e) => setCalculationMethod(e.target.value)}
                className="mr-2"
              />
              <span>Chaldean</span>
            </label>
          </div>
        </div>
        
        <Button type="submit" variant="primary" fullWidth>
          Generate Hero Card
        </Button>
      </form>
    </motion.div>
  );
};

export default InputForm;
```

**`src/components/input/NameInput.jsx`:**

```javascript
import React from 'react';

const NameInput = ({ label, value, onChange, error, required = false, placeholder = '' }) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2
          ${error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-lifepath-7'
          }
        `}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default NameInput;
```

**`src/components/input/DatePicker.jsx`:**

```javascript
import React from 'react';

const DatePicker = ({ month, day, year, onChange, error }) => {
  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];
  
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);
  
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Birthdate <span className="text-red-500">*</span>
      </label>
      
      <div className="grid grid-cols-3 gap-4">
        <select
          value={month}
          onChange={(e) => onChange('month', parseInt(e.target.value))}
          className={`
            px-4 py-2 border rounded-md focus:outline-none focus:ring-2
            ${error ? 'border-red-500' : 'border-gray-300 focus:ring-lifepath-7'}
          `}
        >
          <option value="">Month</option>
          {months.map(m => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
        
        <input
          type="number"
          placeholder="Day"
          value={day}
          onChange={(e) => onChange('day', parseInt(e.target.value))}
          min="1"
          max="31"
          className={`
            px-4 py-2 border rounded-md focus:outline-none focus:ring-2
            ${error ? 'border-red-500' : 'border-gray-300 focus:ring-lifepath-7'}
          `}
        />
        
        <select
          value={year}
          onChange={(e) => onChange('year', parseInt(e.target.value))}
          className={`
            px-4 py-2 border rounded-md focus:outline-none focus:ring-2
            ${error ? 'border-red-500' : 'border-gray-300 focus:ring-lifepath-7'}
          `}
        >
          <option value="">Year</option>
          {years.map(y => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default DatePicker;
```

### 5.2 Hero Card Component

**`src/components/card/HeroCard.jsx`:**

```javascript
import React from 'react';
import { motion } from 'framer-motion';
import CardHeader from './CardHeader';
import CoreNumbers from './CoreNumbers';
import ArchetypeReference from './ArchetypeReference';
import EsotericSection from './EsotericSection';
import { getEsotericData } from '../../data/esotericData';

const HeroCard = ({ profile }) => {
  if (!profile) return null;
  
  const esotericData = getEsotericData(profile.numbers.lifePath.value);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="bg-background-cream border-4 border-background-charcoal rounded-lg overflow-hidden shadow-2xl">
        {/* Card Header */}
        <CardHeader profile={profile} />
        
        {/* Life Path Display */}
        <div
          className="py-12 text-center"
          style={{ backgroundColor: esotericData.color + '20' }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-block"
          >
            <div className="text-8xl font-bold" style={{ color: esotericData.color }}>
              {profile.numbers.lifePath.value}
            </div>
            {profile.numbers.lifePath.isMaster && (
              <div className="text-2xl mt-2">⚡ Master Number</div>
            )}
          </motion.div>
          
          <div className="mt-4 text-xl font-medium space-x-2">
            {esotericData.keywords.map((keyword, idx) => (
              <span key={idx}>
                {keyword}
                {idx < esotericData.keywords.length - 1 && ' • '}
              </span>
            ))}
          </div>
        </div>
        
        {/* Reduction ID */}
        <div className="px-8 py-4 bg-white border-t-2 border-background-charcoal">
          <div className="flex justify-between items-center">
            <span className="font-mono text-sm">REDUCTION ID:</span>
            <span className="font-mono font-bold">
              {profile.numbers.expression.value}
              {profile.numbers.expression.isMaster && ' ⚡'}
            </span>
          </div>
        </div>
        
        {/* Core Numbers Grid */}
        <CoreNumbers numbers={profile.numbers} />
        
        {/* Archetype Reference */}
        <ArchetypeReference />
        
        {/* Esoteric Correspondences */}
        <EsotericSection data={esotericData} />
        
        {/* Metadata Footer */}
        <div className="px-8 py-4 bg-gray-100 border-t-2 border-background-charcoal text-xs text-gray-600 flex justify-between">
          <span>Method: {profile.calculationMethod}</span>
          <span>Generated: {new Date(profile.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCard;
```

**`src/components/card/CardHeader.jsx`:**

```javascript
import React from 'react';

const CardHeader = ({ profile }) => {
  const fullName = [
    profile.firstName,
    profile.middleName,
    profile.lastName,
  ].filter(Boolean).join(' ');
  
  const formattedDate = `${profile.birthdate.month.toString().padStart(2, '0')}/${profile.birthdate.day.toString().padStart(2, '0')}/${profile.birthdate.year}`;
  
  return (
    <div className="px-8 py-6 bg-background-charcoal text-background-cream">
      <h2 className="text-3xl font-display uppercase tracking-wide">
        {fullName}
      </h2>
      <p className="text-sm mt-2 opacity-80">
        Born: {formattedDate}
      </p>
      {profile.nickname && (
        <p className="text-sm italic opacity-70">
          "{profile.nickname}"
        </p>
      )}
    </div>
  );
};

export default CardHeader;
```

**`src/components/card/CoreNumbers.jsx`:**

```javascript
import React from 'react';
import Tooltip from '../ui/Tooltip';

const CoreNumbers = ({ numbers }) => {
  const coreNumbersData = [
    {
      label: 'Expression',
      value: numbers.expression.value,
      isMaster: numbers.expression.isMaster,
      tooltip: 'Full name reduction - your potential and talents',
    },
    {
      label: 'Soul Urge',
      value: numbers.soulUrge.value,
      isMaster: numbers.soulUrge.isMaster,
      tooltip: 'Vowels only - your inner motivations',
    },
    {
      label: 'Personality',
      value: numbers.personality.value,
      isMaster: numbers.personality.isMaster,
      tooltip: 'Consonants only - your outer presentation',
    },
    {
      label: 'Birthday',
      value: numbers.birthday,
      isMaster: false,
      tooltip: 'Day of birth (unreduced) - natural gifts',
    },
    {
      label: 'Personal Year',
      value: numbers.personalYear.value,
      isMaster: numbers.personalYear.isMaster,
      tooltip: `${numbers.personalYear.targetYear} cycle energy`,
    },
    {
      label: 'Challenge',
      value: numbers.challengeNumber,
      isMaster: false,
      tooltip: 'Growth opportunity number',
    },
  ];
  
  return (
    <div className="px-8 py-6 bg-white border-t-2 border-background-charcoal">
      <h3 className="text-xl font-display mb-4 uppercase">Core Numbers</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {coreNumbersData.map((item, idx) => (
          <Tooltip key={idx} content={item.tooltip}>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 hover:border-lifepath-7 transition-colors cursor-help">
              <div className="text-sm text-gray-600 mb-1">{item.label}</div>
              <div className="text-3xl font-bold text-lifepath-7">
                {item.value}
                {item.isMaster && <span className="text-lg ml-1">⚡</span>}
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default CoreNumbers;
```

**`src/components/card/ArchetypeReference.jsx`:**

```javascript
import React from 'react';
import { NUMBER_MEANINGS } from '../../data/numberMeanings';
import Accordion from '../ui/Accordion';

const ArchetypeReference = () => {
  const archetypes = [
    ...Array.from({ length: 9 }, (_, i) => i + 1),
    11, 22, 33,
  ];
  
  return (
    <div className="px-8 py-6 bg-gray-50 border-t-2 border-background-charcoal">
      <h3 className="text-xl font-display mb-4 uppercase">Number Archetypes</h3>
      
      <Accordion>
        {archetypes.map(num => {
          const meaning = NUMBER_MEANINGS[num];
          return (
            <Accordion.Item key={num} title={`${num}: ${meaning.keywords.join(' • ')}`}>
              <div className="space-y-2 text-sm">
                <p className="font-medium">{meaning.description}</p>
                {num > 9 && (
                  <p className="text-purple-700 italic">Master Number</p>
                )}
              </div>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ArchetypeReference;
```

**`src/components/card/EsotericSection.jsx`:**

```javascript
import React from 'react';

const EsotericSection = ({ data }) => {
  const correspondences = [
    { label: 'Tarot', value: data.tarot, icon: '🃏' },
    { label: 'Planet', value: data.planet, icon: '🪐' },
    { label: 'Element', value: data.element, icon: '🌊' },
    { label: 'Gemstone', value: data.gemstone, icon: '💎' },
    { label: 'Chakra', value: data.chakra, icon: '🧘' },
  ];
  
  return (
    <div className="px-8 py-6 bg-white border-t-2 border-background-charcoal">
      <h3 className="text-xl font-display mb-4 uppercase">Esoteric Correspondences</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {correspondences.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <div className="text-xs text-gray-600">{item.label}</div>
              <div className="font-medium">{item.value}</div>
            </div>
          </div>
        ))}
        
        <div className="flex items-center gap-3 col-span-full">
          <div
            className="w-12 h-12 rounded-full border-2 border-gray-300"
            style={{ backgroundColor: data.color }}
          />
          <div>
            <div className="text-xs text-gray-600">Color</div>
            <div className="font-medium font-mono">{data.color}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsotericSection;
```

### 5.3 Calculation Breakdown Component

**`src/components/calculations/CalculationTree.jsx`:**

```javascript
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StepByStep from './StepByStep';
import ReductionPath from './ReductionPath';

const CalculationTree = ({ profile }) => {
  const [activeCalculation, setActiveCalculation] = useState('lifePath');
  
  const calculations = {
    lifePath: {
      title: 'Life Path Calculation',
      data: profile.numbers.lifePath,
      components: [
        profile.birthdate.month,
        profile.birthdate.day,
        ...profile.birthdate.year.toString().split('').map(Number),
      ],
    },
    expression: {
      title: 'Expression Number',
      data: profile.numbers.expression,
      breakdown: profile.numbers.expression.breakdown,
    },
    soulUrge: {
      title: 'Soul Urge (Vowels)',
      data: profile.numbers.soulUrge,
      letters: profile.numbers.soulUrge.vowels,
    },
    personality: {
      title: 'Personality (Consonants)',
      data: profile.numbers.personality,
      letters: profile.numbers.personality.consonants,
    },
  };
  
  const current = calculations[activeCalculation];
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-display mb-6">Calculation Breakdown</h2>
      
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {Object.keys(calculations).map(key => (
          <button
            key={key}
            onClick={() => setActiveCalculation(key)}
            className={`
              px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap
              ${activeCalculation === key
                ? 'bg-lifepath-7 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }
            `}
          >
            {calculations[key].title}
          </button>
        ))}
      </div>
      
      {/* Calculation Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCalculation}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          {activeCalculation === 'lifePath' && (
            <StepByStep
              components={current.components}
              steps={current.data.steps}
              final={current.data.value}
              isMaster={current.data.isMaster}
            />
          )}
          
          {activeCalculation === 'expression' && (
            <ReductionPath
              breakdown={current.breakdown}
              final={current.data.value}
              isMaster={current.data.isMaster}
            />
          )}
          
          {(activeCalculation === 'soulUrge' || activeCalculation === 'personality') && (
            <div className="space-y-4">
              <div className="font-mono text-lg">
                Letters: {current.letters.toUpperCase()}
              </div>
              <div className="font-mono">
                Values: {current.data.letterValues.map(lv => lv.value).join(' + ')}
              </div>
              <div className="font-mono">
                Sum: {current.data.sum}
              </div>
              <div className="text-center mt-6">
                <div className="text-6xl font-bold text-lifepath-7">
                  {current.data.value}
                  {current.data.isMaster && ' ⚡'}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CalculationTree;
```

**`src/components/calculations/StepByStep.jsx`:**

```javascript
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StepByStep = ({ components, steps, final, isMaster }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    setCurrentStep(0);
  }, [components, steps]);
  
  const animate = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setIsAnimating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
  };
  
  return (
    <div className="space-y-6">
      {/* Initial Components */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {components.map((num, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="text-3xl font-mono font-bold"
            >
              {num}
            </motion.div>
            {idx < components.length - 1 && (
              <span className="text-2xl text-gray-400">+</span>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Reduction Steps */}
      <div className="space-y-4">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: idx <= currentStep ? 1 : 0.3,
              y: 0,
            }}
            className="text-center"
          >
            <div className="text-gray-400 text-xl">↓</div>
            <div
              className={`
                text-4xl font-bold font-mono
                ${idx === currentStep ? 'text-lifepath-7 scale-110' : 'text-gray-600'}
                transition-all duration-300
              `}
            >
              {step}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Final Result */}
      <div className="text-center pt-6 border-t-2">
        <div className="text-sm text-gray-600 mb-2">Final Result:</div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: currentStep === steps.length - 1 ? 1 : 0.8 }}
          className="text-7xl font-bold text-lifepath-7"
        >
          {final}
          {isMaster && ' ⚡'}
        </motion.div>
      </div>
      
      {/* Animation Control */}
      <div className="text-center pt-4">
        <button
          onClick={animate}
          disabled={isAnimating}
          className="px-6 py-2 bg-lifepath-7 text-white rounded-md hover:bg-opacity-90 disabled:opacity-50"
        >
          {isAnimating ? 'Animating...' : 'Play Animation'}
        </button>
      </div>
    </div>
  );
};

export default StepByStep;
```

### 5.4 UI Components

**`src/components/ui/Button.jsx`:**

```javascript
import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'px-6 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-lifepath-7 text-white hover:bg-opacity-90 focus:ring-lifepath-7',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'bg-transparent border border-gray-300 hover:bg-gray-50 focus:ring-gray-400',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${widthClass}
        ${disabledClass}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
```

**`src/components/ui/Tooltip.jsx`:**

```javascript
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };
  
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className={`
              absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md
              whitespace-nowrap pointer-events-none
              ${positions[position]}
            `}
          >
            {content}
            <div
              className={`
                absolute w-2 h-2 bg-gray-900 transform rotate-45
                ${position === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' : ''}
                ${position === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' : ''}
                ${position === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' : ''}
                ${position === 'right' ? 'left-[-4px] top-1/2 -translate-y-1/2' : ''}
              `}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
```

**`src/components/ui/Accordion.jsx`:**

```javascript
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <div className="space-y-2">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => setOpenIndex(openIndex === index ? null : index),
        })
      )}
    </div>
  );
};

Accordion.Item = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="font-medium text-left">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 bg-white">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
```

**`src/components/ui/Modal.jsx`:**

```javascript
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-2xl' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`bg-white rounded-lg shadow-2xl w-full ${maxWidth} max-h-[90vh] overflow-y-auto`}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h3 className="text-xl font-display">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Content */}
              <div className="px-6 py-4">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
```

**`src/components/ui/Tabs.jsx`:**

```javascript
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <div className="space-y-4">
      {/* Tab Headers */}
      <div className="flex gap-2 border-b border-gray-200">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`
              relative px-4 py-2 font-medium transition-colors
              ${activeTab === idx
                ? 'text-lifepath-7'
                : 'text-gray-600 hover:text-gray-900'
              }
            `}
          >
            {tab.label}
            
            {activeTab === idx && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-lifepath-7"
              />
            )}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
};

export default Tabs;
```

---

## 6. Styling & Design System

### 6.1 Global Styles

**`src/styles/globals.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap');

@layer base {
  * {
    @apply antialiased;
  }
  
  body {
    @apply bg-background-cream text-background-charcoal;
    font-family: 'Inter', system-ui, sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

@layer components {
  /* Card Styles */
  .hero-card {
    @apply bg-background-cream border-4 border-background-charcoal rounded-lg overflow-hidden shadow-2xl;
  }
  
  /* Number Display */
  .number-display {
    @apply text-6xl md:text-8xl font-bold font-mono;
  }
  
  /* Section Divider */
  .section-divider {
    @apply border-t-2 border-background-charcoal;
  }
  
  /* Input Field */
  .input-field {
    @apply w-full px-4 py-2 border border-gray-300 rounded-md
           focus:outline-none focus:ring-2 focus:ring-lifepath-7 focus:border-transparent
           transition-all;
  }
  
  /* Button Base */
  .btn {
    @apply px-6 py-3 rounded-md font-medium transition-colors
           focus:outline-none focus:ring-2 focus:ring-offset-2;
  }
  
  .btn-primary {
    @apply btn bg-lifepath-7 text-white hover:bg-opacity-90 focus:ring-lifepath-7;
  }
  
  /* Master Number Indicator */
  .master-badge {
    @apply inline-flex items-center px-2 py-1 rounded-md text-sm font-medium
           bg-purple-100 text-purple-800;
  }
}

@layer utilities {
  /* Animation Utilities */
  .animate-fade-in {
    animation: fadeIn 0.5s ease-in;
  }
  
  .animate-slide-up {
    animation: slideUp 0.5s ease-out;
  }
  
  .animate-pulse-slow {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  /* Text Gradient */
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-lifepath-5 to-lifepath-7;
  }
  
  /* Glassmorphism */
  .glass {
    @apply bg-white bg-opacity-70 backdrop-blur-md;
  }
  
  /* Custom Scrollbar */
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }
  
  .scrollbar-thin::-webkit-scrollbar-track {
    @apply bg-gray-100 rounded-full;
  }
  
  .scrollbar-thin::-webkit-scrollbar-thumb {
    @apply bg-gray-400 rounded-full hover:bg-gray-500;
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes cascade {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Print Styles */
@media print {
  body {
    @apply bg-white;
  }
  
  .no-print {
    display: none !important;
  }
  
  .hero-card {
    @apply shadow-none border-2;
    page-break-inside: avoid;
  }
}
```

---

## 7. Features by Phase

### Phase 1: MVP (Weeks 1-2)

**Goals:** Core functionality working end-to-end.

**Features:**
- ✅ Input form with validation
- ✅ Life Path calculation
- ✅ Expression number calculation
- ✅ Basic hero card display
- ✅ localStorage persistence (1 profile)
- ✅ PNG export (basic)

**Deliverables:**
- User can input name + birthdate
- See Life Path and Expression numbers
- View hero card with core numbers
- Export card as image

**Testing Checklist:**
- [ ] Form validation works (invalid dates, empty fields)
- [ ] Calculations match manual verification
- [ ] Master numbers (11, 22, 33) are preserved correctly
- [ ] Card displays all information legibly
- [ ] Export produces downloadable PNG
- [ ] Refresh preserves last profile

---

### Phase 2: Enhancements (Week 3)

**Goals:** Multi-profile management, calculation transparency, esoteric data.

**Features:**
- ✅ Profile library (save multiple people)
- ✅ Profile comparison view
- ✅ Calculation breakdown screen
- ✅ Step-by-step animation
- ✅ Esoteric correspondences (Tarot, planets, colors)
- ✅ Archetype reference section
- ✅ Compatibility checker

**Deliverables:**
- Users can manage multiple profiles
- See detailed calculation steps
- Compare two profiles side-by-side
- View esoteric associations

**Testing Checklist:**
- [ ] Profile CRUD operations work
- [ ] Switching between profiles updates card
- [ ] Calculation animations run smoothly
- [ ] Compatibility scores are reasonable
- [ ] Esoteric data matches reference materials

---

### Phase 3: Polish & PWA (Week 4)

**Goals:** Professional finish, offline capability, advanced export.

**Features:**
- ✅ PWA configuration (installable, offline)
- ✅ Advanced animations (Framer Motion)
- ✅ PDF export with formatting
- ✅ JSON import/export (backup/restore)
- ✅ Reference library content
- ✅ Responsive design refinement
- ✅ Accessibility improvements (ARIA labels, keyboard navigation)

**Deliverables:**
- App installable on mobile
- Works offline after first load
- Professional export options
- Comprehensive reference material

**Testing Checklist:**
- [ ] PWA installs correctly on iOS/Android
- [ ] Offline mode works (cached assets)
- [ ] PDF export matches card design
- [ ] JSON import restores all profiles
- [ ] Reference library content is accurate
- [ ] App is keyboard-navigable
- [ ] Screen readers can parse content

---

### Phase 4: Advanced Features (Optional - Weeks 5-6)

**Goals:** Differentiation, engagement, advanced insights.

**Features:**
- Personal Year insights (daily/monthly themes)
- Name variant comparison tool
- Name generator (target specific numbers)
- Data visualization (Life Path distribution charts)
- 9-year cycle chart
- Backend integration (Firebase) for cross-device sync
- User accounts (optional, privacy-first)
- Social sharing (pre-filled cards for Instagram)
- AI-generated interpretations (GPT-4 API)

**Deliverables:**
- Users get actionable insights for current year
- Can experiment with name changes
- Visualize patterns in saved profiles
- Sync across devices (optional)

---

## 8. PWA Configuration

### 8.1 Manifest File

**`public/manifest.json`:**

```json
{
  "name": "Numerology Hero Card",
  "short_name": "Hero Card",
  "description": "Generate comprehensive numerological identity cards with transparent calculations and esoteric correspondences",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F5F5DC",
  "theme_color": "#5D3FD3",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-maskable.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "screenshots": [
    {
      "src": "/screenshots/desktop.png",
      "sizes": "1280x720",
      "type": "image/png",
      "form_factor": "wide"
    },
    {
      "src": "/screenshots/mobile.png",
      "sizes": "750x1334",
      "type": "image/png",
      "form_factor": "narrow"
    }
  ],
  "categories": ["lifestyle", "education", "utilities"],
  "shortcuts": [
    {
      "name": "New Profile",
      "short_name": "New",
      "description": "Create a new numerology profile",
      "url": "/?action=new",
      "icons": [
        {
          "src": "/icons/icon-192.png",
          "sizes": "192x192"
        }
      ]
    },
    {
      "name": "Profile Library",
      "short_name": "Library",
      "description": "View saved profiles",
      "url": "/?view=library",
      "icons": [
        {
          "src": "/icons/icon-192.png",
          "sizes": "192x192"
        }
      ]
    }
  ]
}
```

### 8.2 Service Worker Strategy

The Vite PWA plugin handles service worker generation automatically. Custom caching strategies are defined in `vite.config.js` (see section 1.4).

**Key caching strategies:**
- **Fonts:** CacheFirst (1 year)
- **Images/Icons:** CacheFirst (30 days)
- **HTML/JS/CSS:** NetworkFirst (fallback to cache)
- **API calls:** NetworkFirst (if backend added later)

---

## 9. Testing Strategy

### 9.1 Unit Tests

**Test File Example: `src/utils/numerology.test.js`:**

```javascript
import { describe, it, expect } from 'vitest';
import {
  reduceToSingle,
  calculateLifePath,
  nameToNumber,
  calculateCompatibility,
} from './numerology';

describe('Numerology Core Functions', () => {
  describe('reduceToSingle', () => {
    it('should reduce to single digit', () => {
      const result = reduceToSingle(25);
      expect(result.value).toBe(7); // 2+5=7
      expect(result.isMaster).toBe(false);
    });
    
    it('should preserve master number 11', () => {
      const result = reduceToSingle(11);
      expect(result.value).toBe(11);
      expect(result.isMaster).toBe(true);
    });
    
    it('should preserve master number 22', () => {
      const result = reduceToSingle(22);
      expect(result.value).toBe(22);
      expect(result.isMaster).toBe(true);
    });
    
    it('should reduce 33 to master number', () => {
      const result = reduceToSingle(33);
      expect(result.value).toBe(33);
      expect(result.isMaster).toBe(true);
    });
    
    it('should handle large numbers', () => {
      const result = reduceToSingle(999);
      expect(result.value).toBe(9); // 9+9+9=27 → 2+7=9
    });
  });
  
  describe('calculateLifePath', () => {
    it('should calculate Life Path correctly', () => {
      // Example: July 15, 1990
      const result = calculateLifePath(7, 15, 1990);
      expect(result.value).toBe(5); // 7+1+5+1+9+9+0=32 → 3+2=5
    });
    
    it('should identify master Life Path', () => {
      // Example: March 22, 1985
      // 3 + 22 + 1+9+8+5=23 → 2+3=5
      // But if 11 appears in steps...
      const result = calculateLifePath(11, 2, 1990);
      // 11 + 2 + 1+9+9+0=19 → 1+9=10 → 1+0=1
      // Master 11 should be detected
      expect(result.calculation.month.isMaster).toBe(true);
    });
  });
  
  describe('nameToNumber', () => {
    it('should convert name to number (Pythagorean)', () => {
      const result = nameToNumber('CLARA', 'pythagorean');
      // C=3, L=3, A=1, R=9, A=1 = 17 → 1+7=8
      expect(result.value).toBe(8);
    });
    
    it('should handle lowercase and spaces', () => {
      const result = nameToNumber('john doe', 'pythagorean');
      // J=1, O=6, H=8, N=5, D=4, O=6, E=5 = 35 → 3+5=8
      expect(result.value).toBe(8);
    });
    
    it('should use Chaldean system when specified', () => {
      const result = nameToNumber('CLARA', 'chaldean');
      // Chaldean: C=3, L=3, A=1, R=2, A=1 = 10 → 1+0=1
      expect(result.value).toBe(1);
    });
  });
  
  describe('calculateCompatibility', () => {
    it('should return high score for compatible numbers', () => {
      const result = calculateCompatibility(3, 5);
      expect(result.score).toBeGreaterThan(85);
      expect(result.compatibility).toBe('Excellent');
    });
    
    it('should return lower score for challenging numbers', () => {
      const result = calculateCompatibility(4, 5);
      expect(result.score).toBeLessThan(70);
    });
    
    it('should handle master numbers', () => {
      const result = calculateCompatibility(11, 7);
      expect(result.score).toBeGreaterThan(80);
    });
  });
});
```

**Run tests:**

```bash
npm test
```

### 9.2 Component Tests

**Example: `src/components/input/InputForm.test.jsx`:**

```javascript
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import InputForm from './InputForm';

describe('InputForm', () => {
  it('should render all input fields', () => {
    render(<InputForm />);
    
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/birthdate/i)).toBeInTheDocument();
  });
  
  it('should show validation errors on invalid submission', () => {
    render(<InputForm />);
    
    const submitButton = screen.getByRole('button', { name: /generate/i });
    fireEvent.click(submitButton);
    
    expect(screen.getByText(/name cannot be empty/i)).toBeInTheDocument();
  });
  
  it('should call addProfile on valid submission', () => {
    const mockAddProfile = vi.fn();
      // Mock Zustand store
      vi.mock('../../store/useProfileStore', () => ({
      	default: () => ({
      		addProfile: mockAddProfile,
      		calculationMethod: 'pythagorean',
      		setCalculationMethod: vi.fn(),
      		}),
      		}));
      	render(<InputForm />);

	// Fill form
	fireEvent.change(screen.getByLabelText(/first name/i), {
	  target: { value: 'John' },
	});
	fireEvent.change(screen.getByLabelText(/last name/i), {
	  target: { value: 'Doe' },
	});
	// ... fill birthdate
	
	fireEvent.click(screen.getByRole('button', { name: /generate/i }));
	
	expect(mockAddProfile).toHaveBeenCalled();
	});
	});

### 9.3 E2E Testing (Optional - Playwright)

For comprehensive end-to-end testing, use Playwright:
```bash
npm install -D @playwright/test
npx playwright install
```

**Example E2E test:**
```javascript
// tests/e2e/create-profile.spec.js
import { test, expect } from '@playwright/test';

test('should create a complete profile', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  // Fill form
  await page.fill('input[name="firstName"]', 'Clara');
  await page.fill('input[name="lastName"]', 'Bennett');
  await page.selectOption('select[name="month"]', '7');
  await page.fill('input[name="day"]', '15');
  await page.selectOption('select[name="year"]', '1990');
  
  // Submit
  await page.click('button[type="submit"]');
  
  // Verify card displays
  await expect(page.locator('.hero-card')).toBeVisible();
  await expect(page.locator('text=CLARA BENNETT')).toBeVisible();
  await expect(page.locator('text=5')).toBeVisible(); // Life Path
});
```

---

## 10. Deployment Instructions

### 10.1 Vercel Deployment (Recommended)

**Prerequisites:**
- GitHub account
- Vercel account (free tier)

**Steps:**

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/numerology-hero.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - In Vercel dashboard → Settings → Domains
   - Add custom domain (e.g., `herocard.app`)
   - Follow DNS configuration instructions

**Environment Variables:**
- None required for MVP
- For Phase 4 (API integrations): Add in Vercel dashboard

### 10.2 Netlify Alternative
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

### 10.3 Self-Hosting

**Build for production:**
```bash
npm run build
```

**Serve with any static host:**
- Upload `dist/` folder contents to:
  - AWS S3 + CloudFront
  - DigitalOcean App Platform
  - GitHub Pages
  - Your own server (Nginx/Apache)

**Nginx configuration example:**
```nginx
server {
    listen 80;
    server_name herocard.app;
    
    root /var/www/numerology-hero/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 11. Reference Data

### 11.1 Number Meanings Data

**`src/data/numberMeanings.js`:**
```javascript
export const NUMBER_MEANINGS = {
  1: {
    keywords: ['Independent', 'Pioneering', 'Initiator'],
    description: 'The number of new beginnings, leadership, and individuality. Ones are natural-born leaders with strong willpower and determination.',
    strengths: ['Courageous', 'Innovative', 'Self-reliant', 'Determined'],
    challenges: ['Egotistical', 'Domineering', 'Impatient', 'Stubborn'],
    careers: ['Entrepreneur', 'Manager', 'Inventor', 'Leader'],
  },
  2: {
    keywords: ['Diplomatic', 'Cooperative', 'Sensitive'],
    description: 'The number of partnership, balance, and harmony. Twos are natural mediators who thrive in collaborative environments.',
    strengths: ['Empathetic', 'Diplomatic', 'Intuitive', 'Supportive'],
    challenges: ['Indecisive', 'Oversensitive', 'Codependent', 'Passive'],
    careers: ['Counselor', 'Diplomat', 'Therapist', 'Team player'],
  },
  3: {
    keywords: ['Creative', 'Expressive', 'Optimistic'],
    description: 'The number of self-expression, creativity, and communication. Threes are natural entertainers with vibrant personalities.',
    strengths: ['Charismatic', 'Artistic', 'Optimistic', 'Social'],
    challenges: ['Scattered', 'Superficial', 'Exaggerating', 'Unfocused'],
    careers: ['Artist', 'Writer', 'Performer', 'Designer'],
  },
  4: {
    keywords: ['Practical', 'Disciplined', 'Builder'],
    description: 'The number of stability, hard work, and order. Fours are reliable builders who create lasting foundations.',
    strengths: ['Organized', 'Loyal', 'Methodical', 'Pragmatic'],
    challenges: ['Rigid', 'Workaholic', 'Resistant to change', 'Overly serious'],
    careers: ['Architect', 'Accountant', 'Engineer', 'Manager'],
  },
  5: {
    keywords: ['Adventurous', 'Freedom-seeking', 'Dynamic'],
    description: 'The number of freedom, adventure, and change. Fives are versatile explorers who embrace life\'s experiences.',
    strengths: ['Adaptable', 'Energetic', 'Progressive', 'Resourceful'],
    challenges: ['Restless', 'Irresponsible', 'Impulsive', 'Inconsistent'],
    careers: ['Travel guide', 'Sales', 'Journalist', 'Entrepreneur'],
  },
  6: {
    keywords: ['Nurturing', 'Responsible', 'Harmonizer'],
    description: 'The number of responsibility, care, and service. Sixes are natural caregivers who create harmonious environments.',
    strengths: ['Compassionate', 'Protective', 'Idealistic', 'Balanced'],
    challenges: ['Self-righteous', 'Worrying', 'Interfering', 'Martyrdom'],
    careers: ['Teacher', 'Nurse', 'Social worker', 'Interior designer'],
  },
  7: {
    keywords: ['Analytical', 'Introspective', 'Truth-seeker'],
    description: 'The number of wisdom, analysis, and spirituality. Sevens are deep thinkers who seek understanding and truth.',
    strengths: ['Intellectual', 'Intuitive', 'Reflective', 'Spiritual'],
    challenges: ['Isolated', 'Cynical', 'Perfectionist', 'Secretive'],
    careers: ['Researcher', 'Analyst', 'Philosopher', 'Scientist'],
  },
  8: {
    keywords: ['Ambitious', 'Authoritative', 'Manifestor'],
    description: 'The number of power, achievement, and material success. Eights are natural executives who manifest abundance.',
    strengths: ['Confident', 'Efficient', 'Realistic', 'Authoritative'],
    challenges: ['Materialistic', 'Workaholic', 'Controlling', 'Intolerant'],
    careers: ['Executive', 'Banker', 'Real estate', 'Politician'],
  },
  9: {
    keywords: ['Humanitarian', 'Compassionate', 'Universal'],
    description: 'The number of completion, compassion, and global consciousness. Nines are old souls dedicated to serving humanity.',
    strengths: ['Generous', 'Idealistic', 'Artistic', 'Romantic'],
    challenges: ['Moody', 'Impractical', 'Possessive', 'Disconnected'],
    careers: ['Nonprofit work', 'Artist', 'Healer', 'Teacher'],
  },
  11: {
    keywords: ['Intuitive', 'Inspirational', 'Visionary'],
    description: 'Master number of spiritual insight and illumination. Elevens are highly intuitive channels for higher wisdom.',
    strengths: ['Psychic', 'Inspirational', 'Idealistic', 'Charismatic'],
    challenges: ['Nervous', 'Impractical', 'Fanatical', 'Oversensitive'],
    careers: ['Spiritual teacher', 'Counselor', 'Artist', 'Inventor'],
    isMaster: true,
  },
  22: {
    keywords: ['Master-builder', 'Practical-idealist', 'Architect'],
    description: 'Master number of the practical idealist. Twenty-twos turn dreams into reality through disciplined vision.',
    strengths: ['Visionary', 'Practical', 'Powerful', 'Confident'],
    challenges: ['Overwhelming', 'Anxious', 'Dictatorial', 'Self-destructive'],
    careers: ['Large-scale entrepreneur', 'Diplomat', 'Architect', 'Systems designer'],
    isMaster: true,
  },
  33: {
    keywords: ['Master-teacher', 'Selfless', 'Illuminator'],
    description: 'Master number of compassionate service. Thirty-threes are devoted to uplifting humanity through teaching and healing.',
    strengths: ['Nurturing', 'Sacrificial', 'Knowledgeable', 'Inspirational'],
    challenges: ['Martyrdom', 'Codependent', 'Unrealistic', 'Self-neglecting'],
    careers: ['Spiritual leader', 'Healer', 'Artist', 'Humanitarian'],
    isMaster: true,
  },
};
```

### 11.2 Esoteric Correspondences Data

**`src/data/esotericData.js`:**
```javascript
export const ESOTERIC_CORRESPONDENCES = {
  1: {
    tarot: 'The Magician (I)',
    planet: 'Sun',
    element: 'Fire',
    color: '#E74C3C',
    gemstone: 'Ruby',
    chakra: 'Solar Plexus',
    keywords: ['Independent', 'Pioneering', 'Initiator'],
  },
  2: {
    tarot: 'The High Priestess (II)',
    planet: 'Moon',
    element: 'Water',
    color: '#F39C12',
    gemstone: 'Moonstone',
    chakra: 'Sacral',
    keywords: ['Diplomatic', 'Cooperative', 'Sensitive'],
  },
  3: {
    tarot: 'The Empress (III)',
    planet: 'Venus',
    element: 'Earth',
    color: '#F1C40F',
    gemstone: 'Topaz',
    chakra: 'Throat',
    keywords: ['Creative', 'Expressive', 'Optimistic'],
  },
  4: {
    tarot: 'The Emperor (IV)',
    planet: 'Mars',
    element: 'Earth',
    color: '#2ECC71',
    gemstone: 'Emerald',
    chakra: 'Root',
    keywords: ['Practical', 'Disciplined', 'Builder'],
  },
  5: {
    tarot: 'The Hierophant (V)',
    planet: 'Mercury',
    element: 'Air',
    color: '#3498DB',
    gemstone: 'Aquamarine',
    chakra: 'Throat',
    keywords: ['Adventurous', 'Freedom-seeking', 'Dynamic'],
  },
  6: {
    tarot: 'The Lovers (VI)',
    planet: 'Venus',
    element: 'Air',
    color: '#9B59B6',
    gemstone: 'Rose Quartz',
    chakra: 'Heart',
    keywords: ['Nurturing', 'Responsible', 'Harmonizer'],
  },
  7: {
    tarot: 'The Chariot (VII)',
    planet: 'Neptune',
    element: 'Water',
    color: '#5D3FD3',
    gemstone: 'Amethyst',
    chakra: 'Crown',
    keywords: ['Analytical', 'Introspective', 'Truth-seeker'],
  },
  8: {
    tarot: 'Strength (VIII)',
    planet: 'Saturn',
    element: 'Fire',
    color: '#34495E',
    gemstone: 'Diamond',
    chakra: 'Solar Plexus',
    keywords: ['Ambitious', 'Authoritative', 'Manifestor'],
  },
  9: {
    tarot: 'The Hermit (IX)',
    planet: 'Mars',
    element: 'Fire',
    color: '#95A5A6',
    gemstone: 'Opal',
    chakra: 'Crown',
    keywords: ['Humanitarian', 'Compassionate', 'Universal'],
  },
  11: {
    tarot: 'Justice (XI)',
    planet: 'Uranus',
    element: 'Air',
    color: '#ECF0F1',
    gemstone: 'Clear Quartz',
    chakra: 'Third Eye',
    keywords: ['Intuitive', 'Inspirational', 'Visionary'],
  },
  22: {
    tarot: 'The Fool (0) + The World (XXI)',
    planet: 'Pluto',
    element: 'Earth',
    color: '#C0392B',
    gemstone: 'Black Tourmaline',
    chakra: 'Root + Crown',
    keywords: ['Master-builder', 'Practical-idealist', 'Architect'],
  },
  33: {
    tarot: 'The Hanged Man (XII) + The Empress (III)',
    planet: 'Neptune',
    element: 'Water',
    color: '#16A085',
    gemstone: 'Jade',
    chakra: 'Heart',
    keywords: ['Master-teacher', 'Selfless', 'Illuminator'],
  },
};

export function getEsotericData(lifePathNumber) {
  return ESOTERIC_CORRESPONDENCES[lifePathNumber] || ESOTERIC_CORRESPONDENCES[1];
}
```

### 11.3 Compatibility Matrix

**`src/data/compatibility.js`:**
```javascript
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
  // Key relationship dynamics
  '1-1': {
    strengths: ['Mutual independence', 'Shared leadership goals'],
    challenges: ['Power struggles', 'Competing egos'],
    tips: ['Take turns leading', 'Celebrate each other\'s victories'],
  },
  '2-6': {
    strengths: ['Deep emotional connection', 'Shared values of harmony'],
    challenges: ['Codependency risk', 'Both avoid conflict'],
    tips: ['Maintain individual identities', 'Practice direct communication'],
  },
  '3-5': {
    strengths: ['Adventure and creativity', 'Mutual love of freedom'],
    challenges: ['Lack of stability', 'Both avoid commitment'],
    tips: ['Create shared rituals', 'Balance spontaneity with planning'],
  },
  '4-8': {
    strengths: ['Shared work ethic', 'Material success alignment'],
    challenges: ['Workaholism', 'Emotional distance'],
    tips: ['Schedule quality time', 'Express feelings verbally'],
  },
  '7-9': {
    strengths: ['Deep philosophical connection', 'Spiritual alignment'],
    challenges: ['Both withdraw emotionally', 'Idealism clashes'],
    tips: ['Ground in practical activities', 'Share insights openly'],
  },
  // Add more as needed
};

export function getCompatibilityInsights(num1, num2) {
  const key1 = `${num1}-${num2}`;
  const key2 = `${num2}-${num1}`;
  
  return COMPATIBILITY_INSIGHTS[key1] || COMPATIBILITY_INSIGHTS[key2] || {
    strengths: ['Opportunity for growth through differences'],
    challenges: ['Requires conscious effort to understand each other'],
    tips: ['Focus on shared goals', 'Practice patience and empathy'],
  };
}
```

---

## 12. Export Utilities

### 12.1 PNG Export

**`src/utils/export.js`:**
```javascript
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Export element as PNG image
 * @param {HTMLElement} element - DOM element to capture
 * @param {string} filename - Output filename
 * @param {object} options - html2canvas options
 */
export async function exportToPNG(element, filename = 'hero-card.png', options = {}) {
  const defaultOptions = {
    scale: 2, // Higher resolution
    useCORS: true,
    backgroundColor: '#F5F5DC',
    ...options,
  };
  
  try {
    const canvas = await html2canvas(element, defaultOptions);
    
    // Convert to blob
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = filename;
      link.href = url;
      link.click();
      
      // Cleanup
      URL.revokeObjectURL(url);
    });
    
    return true;
  } catch (error) {
    console.error('PNG export failed:', error);
    return false;
  }
}

/**
 * Export element as PDF
 * @param {HTMLElement} element - DOM element to capture
 * @param {string} filename - Output filename
 * @param {object} options - PDF options
 */
export async function exportToPDF(element, filename = 'hero-card.pdf', options = {}) {
  const defaultOptions = {
    orientation: 'portrait',
    unit: 'in',
    format: [4, 6.5], // 4" x 6.5" postcard size
    ...options,
  };
  
  try {
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: '#F5F5DC',
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF(defaultOptions);
    
    // Calculate dimensions to fit page
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
    
    return true;
  } catch (error) {
    console.error('PDF export failed:', error);
    return false;
  }
}

/**
 * Export profiles as JSON
 * @param {array} profiles - Array of profile objects
 * @param {string} filename - Output filename
 */
export function exportToJSON(profiles, filename = 'numerology-profiles.json') {
  const dataStr = JSON.stringify(profiles, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.download = filename;
  link.href = url;
  link.click();
  
  URL.revokeObjectURL(url);
}

/**
 * Import profiles from JSON file
 * @param {File} file - JSON file to import
 * @returns {Promise<array>} - Parsed profiles
 */
export function importFromJSON(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const profiles = JSON.parse(e.target.result);
        
        // Validate structure
        if (!Array.isArray(profiles)) {
          throw new Error('Invalid JSON format: expected array');
        }
        
        resolve(profiles);
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => reject(new Error('File read error'));
    reader.readAsText(file);
  });
}

/**
 * Generate shareable link with profile data
 * @param {object} profile - Profile to share
 * @returns {string} - URL with encoded profile data
 */
export function generateShareLink(profile) {
  const baseUrl = window.location.origin;
  const encodedProfile = btoa(JSON.stringify({
    firstName: profile.firstName,
    middleName: profile.middleName,
    lastName: profile.lastName,
    birthdate: profile.birthdate,
    calculationMethod: profile.calculationMethod,
  }));
  
  return `${baseUrl}?share=${encodedProfile}`;
}

/**
 * Parse shared profile from URL
 * @returns {object|null} - Decoded profile data or null
 */
export function parseSharedProfile() {
  const params = new URLSearchParams(window.location.search);
  const shareData = params.get('share');
  
  if (!shareData) return null;
  
  try {
    return JSON.parse(atob(shareData));
  } catch (error) {
    console.error('Failed to parse shared profile:', error);
    return null;
  }
}
```

### 12.2 Export Modal Component

**`src/components/export/ExportModal.jsx`:**
```javascript
import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { exportToPNG, exportToPDF, generateShareLink } from '../../utils/export';

const ExportModal = ({ isOpen, onClose, profile, cardElementRef }) => {
  const [format, setFormat] = useState('png');
  const [isExporting, setIsExporting] = useState(false);
  const [shareLink, setShareLink] = useState('');
  
  const handleExport = async () => {
    if (!cardElementRef.current) return;
    
    setIsExporting(true);
    
    try {
      const filename = `${profile.firstName}-${profile.lastName}-hero-card`;
      
      if (format === 'png') {
        await exportToPNG(cardElementRef.current, `${filename}.png`);
      } else if (format === 'pdf') {
        await exportToPDF(cardElementRef.current, `${filename}.pdf`);
      }
      
      onClose();
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };
  
  const handleGenerateLink = () => {
    const link = generateShareLink(profile);
    setShareLink(link);
    
    // Copy to clipboard
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Export Hero Card">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Format</label>
          <div className="space-y-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                value="png"
                checked={format === 'png'}
                onChange={(e) => setFormat(e.target.value)}
                className="mr-2"
              />
              <span>PNG Image (social media ready)</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                value="pdf"
                checked={format === 'pdf'}
                onChange={(e) => setFormat(e.target.value)}
                className="mr-2"
              />
              <span>PDF Document (printable 4"×6.5")</span>
            </label>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <Button
            onClick={handleExport}
            disabled={isExporting}
            fullWidth
            variant="primary"
          >
            {isExporting ? 'Exporting...' : `Download ${format.toUpperCase()}`}
          </Button>
        </div>
        
        <div className="pt-4 border-t">
          <label className="block text-sm font-medium mb-2">Share Link</label>
          <p className="text-sm text-gray-600 mb-3">
            Generate a shareable link that others can use to view this profile.
          </p>
          
          {shareLink ? (
            <div className="bg-gray-50 p-3 rounded-md break-all text-sm font-mono">
              {shareLink}
            </div>
          ) : (
            <Button onClick={handleGenerateLink} variant="secondary" fullWidth>
              Generate Share Link
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ExportModal;
```

---

## 13. Final Implementation Checklist

### Phase 1: MVP
- [ ] Initialize project with Vite + React
- [ ] Install all dependencies (Tailwind, Zustand, Framer Motion, etc.)
- [ ] Set up Tailwind configuration
- [ ] Create project folder structure
- [ ] Implement core numerology algorithms
- [ ] Build input form with validation
- [ ] Create Zustand store for profile management
- [ ] Build hero card display component
- [ ] Implement localStorage persistence
- [ ] Add basic PNG export functionality
- [ ] Test calculations against manual verification
- [ ] Verify master numbers preserved correctly
- [ ] Test form validation edge cases
- [ ] Deploy to Vercel

### Phase 2: Enhancements
- [ ] Build profile library component
- [ ] Add profile CRUD operations
- [ ] Create calculation breakdown screen
- [ ] Implement step-by-step animation
- [ ] Add esoteric correspondences data
- [ ] Build archetype reference section
- [ ] Create compatibility checker
- [ ] Add profile comparison view
- [ ] Test multi-profile workflows
- [ ] Verify esoteric data accuracy

### Phase 3: Polish & PWA
- [ ] Configure PWA manifest
- [ ] Set up service worker caching
- [ ] Add PDF export functionality
- [ ] Implement JSON import/export
- [ ] Build reference library content
- [ ] Add Framer Motion animations
- [ ] Optimize responsive design
- [ ] Add ARIA labels for accessibility
- [ ] Implement keyboard navigation
- [ ] Test PWA installation (iOS/Android)
- [ ] Verify offline functionality
- [ ] Run Lighthouse audit
- [ ] Final cross-browser testing

### Phase 4: Advanced (Optional)
- [ ] Add Personal Year insights
- [ ] Create name variant comparison
- [ ] Build name generator tool
- [ ] Add data visualization charts
- [ ] Implement 9-year cycle chart
- [ ] Set up Firebase (if backend needed)
- [ ] Add user authentication (optional)
- [ ] Integrate GPT-4 API (if desired)
- [ ] Create social sharing templates
- [ ] Build monetization tier logic

---

## 14. Troubleshooting Guide

### Common Issues

**Build fails with "Cannot find module 'X'"**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Tailwind styles not applying**
```javascript
// Verify tailwind.config.js content paths
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

**PWA not installing on iOS**
- Verify manifest.json is valid JSON
- Check that icons exist at specified paths
- Ensure HTTPS is enabled (required for PWA)
- Add to Home Screen from Safari (not Chrome)

**localStorage persistence not working**
- Check browser privacy settings (may block localStorage)
- Verify Zustand persist middleware configuration
- Test in incognito mode (fresh state)

**Export produces blank image**
- Ensure all images use CORS-friendly URLs
- Add `useCORS: true` to html2canvas options
- Verify element is visible before export
- Check for CSS transforms that might break capture

---

## 15. Performance Optimization

### Bundle Size Optimization

**Code splitting:**
```javascript
// Lazy load heavy components
const CalculationTree = lazy(() => import('./components/calculations/CalculationTree'));
const ReferenceLibrary = lazy(() => import('./components/reference/ReferenceLibrary'));

// Use Suspense
<Suspense fallback={<div>Loading...</div>}>
  <CalculationTree />
</Suspense>
```

**Tree shaking:**
```javascript
// Import only what's needed
import { motion } from 'framer-motion'; // ✅
// vs
import * as FramerMotion from 'framer-motion'; // ❌
```

### Image Optimization
```javascript
// Use WebP with fallback
<picture>
  <source srcSet="tarot-1.webp" type="image/webp" />
  <img src="tarot-1.png" alt="The Magician" />
</picture>
```

### Render Optimization
```javascript
// Memoize expensive calculations
const memoizedNumbers = useMemo(
  () => calculateAllNumbers(profileData),
  [profileData.birthdate, profileData.fullName]
);

// Debounce form inputs
const debouncedSearch = useMemo(
  () => debounce(handleSearch, 300),
  []
);
```

---

## 16. Accessibility Requirements

### ARIA Labels
```jsx
<button aria-label="Generate Hero Card" onClick={handleSubmit}>
  Generate
</button>

<input
  type="text"
  aria-label="First name"
  aria-required="true"
  aria-invalid={errors.firstName ? 'true' : 'false'}
  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
/>
```

### Keyboard Navigation
```jsx
// Ensure all interactive elements are keyboard-accessible
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyPress={(e) => e.key === 'Enter' && handleClick()}
>
  Click me
</div>
```

### Color Contrast
- Ensure all text has 4.5:1 contrast ratio minimum (WCAG AA)
- Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 17. Security Considerations

### Input Sanitization
```javascript
// Already handled by validation, but reinforce:
const sanitizeName = (name) => {
  return name.replace(/[^a-zA-Z\s-]/g, '');
};
```

### XSS Prevention
```javascript
// React automatically escapes content, but be careful with:
// - dangerouslySetInnerHTML (avoid)
// - Direct DOM manipulation (avoid)
```

### localStorage Security
- Never store sensitive data (passwords, payment info)
- Profile data is non-sensitive (names, birthdates)
- Use HTTPS to prevent interception

---

## 18. Conclusion

This specification provides everything needed to build the Numerology Hero Card app from scratch. Follow the phased approach to deliver an MVP quickly, then iterate with enhancements. The modular architecture allows for easy expansion and feature additions.

**Key Success Metrics:**
- MVP deployed within 2-3 weeks
- 90+ Lighthouse score
- Works offline (PWA)
- Accurate calculations (verified against manual tests)
- Clean, professional UI
- Zero console errors in production

**Next Steps:**
1. Set up development environment
2. Build core numerology algorithms (test-first)
3. Create input form + validation
4. Implement hero card display
5. Add export functionality
6. Deploy MVP
7. Gather feedback
8. Iterate with Phase 2+ features

