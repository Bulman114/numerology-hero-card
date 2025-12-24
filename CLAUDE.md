# Numerology Hero Card - Project Context

## Overview
A Progressive Web App (PWA) that generates comprehensive numerological identity cards with transparent mathematical calculations, esoteric correspondences, and multi-profile management.

**Live URL:** https://numerology-hero-card.vercel.app/
**GitHub:** https://github.com/Bulman114/numerology-hero-card
**Spec Document:** `numerology-hc.md` (3600+ lines, comprehensive)

---

## Tech Stack
- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS v4 (CSS-based config with `@tailwindcss/vite` plugin)
- **State:** Zustand with localStorage persistence
- **Animation:** Framer Motion
- **Export:** html2canvas (PNG), jsPDF (PDF)
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Testing:** Vitest (19 tests passing)
- **Hosting:** Vercel

---

## Design Theme

**Modern Digital / Ethereal Tech** - A premium dark-mode aesthetic with cyber-mystic influences

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#0F0F16` | Main background (Almost Black) |
| `bg-secondary` | `#181824` | Cards, nav (Dark Grey-Blue) |
| `bg-card` | `#1E1E2C` | Card backgrounds |
| `bg-elevated` | `#2A2A3D` | Hover/Modal backgrounds |
| `text-primary` | `#FFFFFF` | Main text |
| `text-secondary` | `#A0A0B0` | Secondary text |
| `text-muted` | `#6C6C7D` | Muted/labels |
| `accent-primary` | `#C77DFF` | Lavender accent |
| `accent-secondary` | `#9D4EDD` | Deep Purple |
| `accent-teal` | `#00F0FF` | Cyan/Teal (bright tech feel) |
| `accent-gold` | `#FFD166` | Tech Gold (master numbers) |

### Life Path Colors
Vibrant tech pastels for each number: Soft Coral (1), Peach (2), Pale Lime (3), Mint (4), Periwinkle (5), Mauve (6), Thistle (7), Seafoam (8), Salmon (9), Lavender (11), Muted Purple (22), Orchid (33)

### Typography
- **Sans:** Inter (primary font)
- **Display:** Manrope (headings, bold elements)
- **Mono:** Ui-Monospace, SFMono-Regular, Menlo

### Special Effects
- Deep space gradient background with subtle purple/teal glows
- Glassmorphism cards with backdrop blur
- Subtle grain overlay for texture
- Custom dark-themed scrollbar
- Smooth hover transitions with glow shadows
- CSS animations: fadeIn, slideUp, float, pulseSlow

---

## Project Structure
```
app/src/
├── components/
│   ├── calculations/
│   │   ├── CalculationTree.jsx   # Tabbed breakdown view
│   │   ├── StepByStep.jsx        # Animated step display
│   │   └── ReductionPath.jsx     # Name-to-number visualization
│   ├── card/
│   │   └── HeroCard.jsx          # Main card display + export
│   ├── compatibility/
│   │   ├── CompatibilityChecker.jsx  # Two-profile comparison
│   │   └── HarmonyScore.jsx          # Score display
│   ├── decoder/
│   │   └── UniversalDecoder.jsx  # Pattern/Math analysis tool
│   ├── export/
│   │   ├── ExportModal.jsx       # Export format selection
│   │   └── ShareButtons.jsx      # Social sharing (Twitter, Facebook, Email)
│   ├── input/
│   │   └── InputForm.jsx         # Name/birthdate form
│   ├── profiles/
│   │   ├── ProfileLibrary.jsx    # Profile list view
│   │   ├── ProfileComparison.jsx # Side-by-side view
│   │   └── EditProfileModal.jsx  # Profile editing
│   ├── reference/
│   │   ├── ReferenceLibrary.jsx  # Educational hub (Learn tab)
│   │   ├── NumberMeanings.jsx    # All number interpretations
│   │   └── MethodsGuide.jsx      # Pythagorean vs Chaldean
│   └── ui/
│       ├── Accordion.jsx         # Collapsible sections
│       ├── Button.jsx            # Reusable button
│       ├── Modal.jsx             # Reusable modal
│       ├── Tabs.jsx              # Tab navigation
│       └── Tooltip.jsx           # Hover tooltips
├── data/
│   ├── esotericData.js           # Tarot/planet correspondences
│   ├── numberMeanings.js         # Number interpretations + getEnhancedMeaning()
│   ├── lifePathProfiles.js       # Comprehensive Life Path data (12 profiles)
│   └── compatibility.js          # Compatibility matrix + rich insights
├── store/
│   └── useProfileStore.js        # Zustand state
├── utils/
│   ├── numerology.js             # Core calculations
│   ├── numerology.test.js        # Unit tests (19 tests)
│   ├── decoder.js                # Universal Decoder analysis logic
│   ├── contentRotation.js        # Dynamic content selection utilities
│   ├── validation.js             # Input validation
│   └── export.js                 # PNG/PDF/JSON export
├── App.jsx                       # Routes + navigation
└── index.css                     # Tailwind v4 theme (Modern Digital)
```

---

## Routes
| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomePage | Input form |
| `/card/:profileId` | CardPage | Hero Card display |
| `/profiles` | ProfileLibrary | Saved profiles list |
| `/breakdown/:profileId` | CalculationTree | Step-by-step math |
| `/compatibility` | CompatibilityChecker | Compatibility scoring |
| `/comparison` | ProfileComparison | Side-by-side view |
| `/decoder` | UniversalDecoder | Pattern/Math analysis tool |
| `/reference` | ReferenceLibrary | Educational content |

---

## Implementation Status

### ✅ COMPLETED

**Phase 1: MVP**
- [x] Project setup (Vite + React + Tailwind v4)
- [x] Core numerology calculations
- [x] Input form with validation
- [x] Hero Card display with all core numbers
- [x] Esoteric correspondences (Tarot, planets, elements)
- [x] Zustand store with localStorage persistence
- [x] React Router navigation
- [x] PNG/PDF export
- [x] Profile Library
- [x] Unit tests (19/19 passing)
- [x] Vercel deployment

**Phase 2A: UI Components**
- [x] Button, Modal, Tooltip, Accordion, Tabs

**Phase 2B: Calculation Breakdown**
- [x] CalculationTree, StepByStep, ReductionPath
- [x] Route `/breakdown/:profileId`

**Phase 2C: Compatibility**
- [x] CompatibilityChecker, HarmonyScore
- [x] Route `/compatibility`

**Phase 2D: Profile Enhancements**
- [x] ProfileComparison.jsx - Side-by-side view (Route: `/comparison`)
- [x] Profile editing capability (EditProfileModal)

**Phase 3A: Reference Library**
- [x] ReferenceLibrary, NumberMeanings, MethodsGuide
- [x] Route `/reference`
- [x] Modernized to "Modern Cyber-Mystic" design theme
- [x] NumberMeanings enhanced with 5 tabbed sections (Overview, Personality, Relationships, Career, Growth)

**Phase 3B: Export Enhancements**
- [x] ShareButtons.jsx - Social sharing (Twitter, Facebook, Email, native)
- [x] JSON import/export from Profile Library UI

**Phase 3C: PWA Configuration**
- [x] Install vite-plugin-pwa
- [x] App icons (192, 512, maskable)
- [x] manifest.json (via Vite config)
- [x] Service worker caching
- [x] Offline functionality

**Universal Decoder Feature**
- [x] UniversalDecoder.jsx - Real-time analysis tool
- [x] Pattern analysis (Leet, Numeronyms, Text speak)
- [x] Math properties (Prime, Fib, Triangular, Digit Sum/Product) - Works for Text (Gematria) & Numbers
- [x] Hidden Word discovery (Anagrams) using `POWER_WORDS`
- [x] Detailed Component Breakdown (Phone, Date, Email)
- [x] Aura mapping for numerological results
- [x] Route `/decoder`

**Data Files**
- [x] numberMeanings.js - Full interpretations for 1-9, 11, 22, 33
- [x] lifePathProfiles.js - Comprehensive profiles with 15+ categories per number
- [x] compatibility.js - Matrix + rich insights from profiles
- [x] contentRotation.js - Utilities for dynamic content selection

**Styling**
- [x] Modern Digital / Ethereal Tech theme (cyan/lavender + sans-serif fonts)
- [x] Tailwind v4 with `@tailwindcss/vite` plugin
- [x] Glassmorphism effects with backdrop blur
- [x] Inter + Manrope fonts (Google Fonts)
- [x] Grain overlay texture
- [x] Dark scrollbar styling

---

### 🔲 REMAINING

**Phase 3D: Accessibility**
- [x] ARIA labels (InputForm)
- [ ] Keyboard navigation
- [ ] eslint-plugin-jsx-a11y
- [ ] Color contrast audit

**Optional Refactoring**
- [ ] ProfileCard.jsx - Extracted individual card component
- [ ] CardHeader, CoreNumbers, EsotericSection - Sub-components for HeroCard

---

## Commands
```bash
cd /Users/bulman/ProgrammingProjects/apps/numerology-hero-card/app
npm run dev      # Start dev server (http://localhost:5173)
npm test         # Run unit tests
npm run build    # Production build
git push         # Vercel auto-deploys
```

---

## Key Files

| File | Purpose |
|------|---------|
| `numerology-hc.md` | Full 3600-line specification |
| `src/index.css` | Theme config (Modern Digital / Ethereal Tech) |
| `src/utils/numerology.js` | All calculation functions |
| `src/utils/decoder.js` | Universal Decoder analysis logic |
| `src/utils/contentRotation.js` | Dynamic content selection for variety |
| `src/data/lifePathProfiles.js` | Comprehensive Life Path profiles (primary data source) |
| `src/data/numberMeanings.js` | Number interpretations + enhanced getter |
| `src/data/compatibility.js` | Compatibility matrix + profile-based insights |
| `src/store/useProfileStore.js` | State management |
| `vite.config.js` | Vite config with Tailwind v4 + PWA plugins |

---

## Design Decisions

1. **Tailwind v4** - Uses CSS-based `@theme` config with `@tailwindcss/vite` plugin (required for Vite)
2. **Dark Theme** - Deep space tech palette with cyan/lavender accents
3. **Simplified Y rule** - Y always counts as vowel (per spec)
4. **Master numbers** - Only 11, 22, 33 (not 44+)
5. **No Tarot images** - Text labels only (no image assets)
6. **Consolidated HeroCard** - Includes functionality that spec splits into sub-components
7. **Glassmorphism** - Semi-transparent cards with backdrop blur for modern look
8. **Sans-Serif Typography** - Inter + Manrope for clean, modern digital aesthetic

---

## Known Issues

1. **VS Code CSS Linting** - Shows "Unknown at rule" warnings for Tailwind v4's `@theme` and `@apply` directives. These are false positives - the CSS compiles correctly at build time.

2. **Bundle Size Warning** - Main JS chunk exceeds 500KB. Can be optimized with code-splitting if needed in the future.
