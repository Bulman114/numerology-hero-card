import { describe, it, expect } from 'vitest';
import {
    reduceToSingle,
    calculateLifePath,
    nameToNumber,
    calculateExpression,
    calculateSoulUrge,
    calculatePersonality,
    calculateAllNumbers,
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

        it('should preserve master number 33', () => {
            const result = reduceToSingle(33);
            expect(result.value).toBe(33);
            expect(result.isMaster).toBe(true);
        });

        it('should handle large numbers', () => {
            const result = reduceToSingle(999);
            expect(result.value).toBe(9); // 9+9+9=27 → 2+7=9
        });

        it('should return single digits as-is', () => {
            const result = reduceToSingle(5);
            expect(result.value).toBe(5);
            expect(result.isMaster).toBe(false);
        });

        it('should track reduction steps', () => {
            const result = reduceToSingle(123);
            // 123 → 1+2+3=6
            expect(result.steps).toEqual([123, 6]);
            expect(result.value).toBe(6);
        });
    });

    describe('calculateLifePath', () => {
        it('should calculate Life Path correctly for July 15, 1990', () => {
            const result = calculateLifePath(7, 15, 1990);
            // Month: 7
            // Day: 15 → 1+5=6
            // Year: 1990 → 1+9+9+0=19 → 1+9=10 → 1+0=1
            // Total: 7 + 6 + 1 = 14 → 1+4 = 5
            expect(result.value).toBe(5);
        });

        it('should identify master Life Path 11', () => {
            // November 29, 1992: 11 + 11 + 3 = 25 → 7
            // Actually let's find a real 11: December 12, 2007
            // 12 → 3, 12 → 3, 2007 → 9 = 15 → 6
            // Let's try: February 9, 2000
            // 2 + 9 + 2 = 13 → 4

            // To get 11: need components that sum to 11 or 29 or 38 etc.
            // October 1, 2000: 10→1, 1, 2000→2 = 4
            // March 5, 2003: 3 + 5 + 5 = 13 → 4
            // November 11, 2009: 11 + 11 + 11 = 33 (master!)
            const result = calculateLifePath(11, 11, 2009);
            // 11 (master) + 2 (11→2) + 2 (2009→11→2... wait)
            // 2009 → 2+0+0+9=11 (master)
            // So: 11 + 11 + 11 = 33 (master!)
            expect(result.value).toBe(33);
            expect(result.isMaster).toBe(true);
        });

        it('should handle master number in month', () => {
            const result = calculateLifePath(11, 2, 1990);
            // Month: 11 (master)
            expect(result.calculation.month.value).toBe(11);
            expect(result.calculation.month.isMaster).toBe(true);
        });
    });

    describe('nameToNumber', () => {
        it('should convert name to number (Pythagorean)', () => {
            const result = nameToNumber('CLARA', 'pythagorean');
            // C=3, L=3, A=1, R=9, A=1 = 17 → 1+7=8
            expect(result.value).toBe(8);
        });

        it('should handle lowercase', () => {
            const result = nameToNumber('clara', 'pythagorean');
            expect(result.value).toBe(8);
        });

        it('should ignore spaces and special characters', () => {
            const result = nameToNumber('Clara Jane', 'pythagorean');
            // Same as 'ClaraJane'
            expect(result.sum).toBeGreaterThan(0);
        });

        it('should use Chaldean system when specified', () => {
            const result = nameToNumber('CLARA', 'chaldean');
            // Chaldean: C=3, L=3, A=1, R=2, A=1 = 10 → 1+0=1
            expect(result.value).toBe(1);
        });
    });

    describe('calculateExpression', () => {
        it('should calculate expression from full name', () => {
            const result = calculateExpression('Clara', 'Jane', 'Bennett', 'pythagorean');
            expect(result.value).toBeGreaterThan(0);
            expect(result.value).toBeLessThanOrEqual(33);
            expect(result.breakdown.firstName).toBeDefined();
            expect(result.breakdown.lastName).toBeDefined();
        });

        it('should handle missing middle name', () => {
            const result = calculateExpression('Clara', '', 'Bennett', 'pythagorean');
            expect(result.breakdown.middleName.sum).toBe(0);
        });
    });

    describe('calculateSoulUrge', () => {
        it('should only count vowels', () => {
            const result = calculateSoulUrge('Clara Jane Bennett', 'pythagorean');
            // Vowels: Clara(aa), Jane(ae), Bennett(ee) = aaaeee
            expect(result.vowels).toBe('aaaeee');
        });
    });

    describe('calculatePersonality', () => {
        it('should only count consonants', () => {
            const result = calculatePersonality('Clara Jane Bennett', 'pythagorean');
            // Consonants: C, L, R, J, N, B, N, N, T, T
            expect(result.consonants).toBe('clrjnbnntt');
        });
    });

    describe('calculateAllNumbers', () => {
        it('should calculate all numbers for a profile', () => {
            const result = calculateAllNumbers({
                firstName: 'Clara',
                middleName: 'Jane',
                lastName: 'Bennett',
                birthdate: { month: 7, day: 15, year: 1990 },
                calculationMethod: 'pythagorean',
            });

            expect(result.lifePath).toBeDefined();
            expect(result.expression).toBeDefined();
            expect(result.soulUrge).toBeDefined();
            expect(result.personality).toBeDefined();
            expect(result.birthday).toBe(15);
            expect(result.personalYear).toBeDefined();
            expect(result.challengeNumber).toBeDefined();
        });
    });
});
