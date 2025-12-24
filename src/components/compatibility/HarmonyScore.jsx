import React from 'react';
import { motion } from 'framer-motion';
import { getCompatibilityLevel, getCompatibilityColor, getRelationshipSummary } from '../../data/compatibility';
import { getLifePathProfile } from '../../data/lifePathProfiles';
import { getEsotericData } from '../../data/esotericData';

const HarmonyScore = ({ score, insights, profile1, profile2 }) => {
    const level = getCompatibilityLevel(score);
    const color = getCompatibilityColor(score);
    const summary = getRelationshipSummary(
        profile1.numbers.lifePath.value,
        profile2.numbers.lifePath.value
    );

    const lifePathProfile1 = getLifePathProfile(profile1.numbers.lifePath.value);
    const lifePathProfile2 = getLifePathProfile(profile2.numbers.lifePath.value);
    const esoteric1 = getEsotericData(profile1.numbers.lifePath.value);
    const esoteric2 = getEsotericData(profile2.numbers.lifePath.value);

    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="space-y-8">
            {/* Score Circle */}
            <div className="flex justify-center">
                <div className="relative">
                    <svg width="140" height="140" className="-rotate-90">
                        {/* Background circle */}
                        <circle
                            cx="70"
                            cy="70"
                            r="55"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="12"
                            fill="none"
                        />
                        {/* Glow effect */}
                        <motion.circle
                            cx="70"
                            cy="70"
                            r="55"
                            stroke={color}
                            strokeWidth="12"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference * 1.22}
                            initial={{ strokeDashoffset: circumference * 1.22 }}
                            animate={{ strokeDashoffset: strokeDashoffset * 1.22 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            style={{ filter: `drop-shadow(0 0 10px ${color})` }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                            className="text-center"
                        >
                            <div className="text-4xl font-display font-bold" style={{ color }}>
                                {score}%
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Level Label */}
            <div className="text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="px-5 py-2 rounded-full text-white font-bold text-sm uppercase tracking-wider"
                    style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}40` }}
                >
                    {level}
                </motion.span>
                {summary.isBestMatch && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-3 text-accent-gold text-xs font-medium"
                    >
                        ✨ One of their ideal matches!
                    </motion.div>
                )}
            </div>

            {/* Profile Comparison */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-bg-elevated/50 rounded-2xl border border-border-subtle">
                {/* Profile 1 */}
                <div className="text-center">
                    <div
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-display font-bold text-white mb-2"
                        style={{ backgroundColor: esoteric1?.color, boxShadow: `0 0 20px ${esoteric1?.color}40` }}
                    >
                        {profile1.numbers.lifePath.value}
                    </div>
                    <div className="font-bold text-text-primary">{profile1.firstName}</div>
                    <div className="text-xs text-accent-primary mt-1">
                        {lifePathProfile1?.archetype || 'Life Path ' + profile1.numbers.lifePath.value}
                    </div>
                </div>

                {/* Connector */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden">
                    <span className="text-3xl">💕</span>
                </div>

                {/* Profile 2 */}
                <div className="text-center">
                    <div
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-display font-bold text-white mb-2"
                        style={{ backgroundColor: esoteric2?.color, boxShadow: `0 0 20px ${esoteric2?.color}40` }}
                    >
                        {profile2.numbers.lifePath.value}
                    </div>
                    <div className="font-bold text-text-primary">{profile2.firstName}</div>
                    <div className="text-xs text-accent-teal mt-1">
                        {lifePathProfile2?.archetype || 'Life Path ' + profile2.numbers.lifePath.value}
                    </div>
                </div>
            </div>

            {/* Romantic Dynamics */}
            {insights.romanticDynamics && insights.romanticDynamics.length > 0 && (
                <div className="space-y-4">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-pink-400 flex items-center gap-2">
                        <span>💕</span> Romantic Dynamics
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        {insights.romanticDynamics.map((dynamic, i) => (
                            <div
                                key={i}
                                className="p-4 bg-pink-500/5 border border-pink-500/20 rounded-xl"
                            >
                                <div className="text-pink-300 text-xs font-bold mb-2">
                                    {dynamic.archetype}
                                </div>
                                <ul className="space-y-1">
                                    {dynamic.traits.map((trait, j) => (
                                        <li key={j} className="text-text-secondary text-sm flex items-start gap-2">
                                            <span className="text-pink-400 mt-1">♡</span>
                                            {trait}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Insights */}
            <div className="space-y-6 pt-4 border-t border-border-subtle">
                {/* Strengths */}
                <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-accent-teal mb-3 flex items-center gap-2">
                        <span>✦</span> Strengths
                    </h4>
                    <ul className="space-y-2">
                        {insights.strengths.map((s, i) => (
                            <li key={i} className="text-sm text-text-secondary flex items-start gap-3">
                                <span className="text-accent-teal mt-0.5">•</span>
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Complex Dynamic */}
                {insights.complexDynamic && (
                    <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                        <h4 className="font-bold text-xs uppercase tracking-widest text-amber-400 mb-2">
                            🔮 Complex Dynamic
                        </h4>
                        <p className="text-text-secondary text-sm">{insights.complexDynamic}</p>
                    </div>
                )}

                {/* Challenges */}
                <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-red-400 mb-3 flex items-center gap-2">
                        <span>⚡</span> Challenges
                    </h4>
                    <ul className="space-y-2">
                        {insights.challenges.map((c, i) => (
                            <li key={i} className="text-sm text-text-secondary flex items-start gap-3">
                                <span className="text-red-400 mt-0.5">•</span>
                                {c}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tips */}
                <div className="p-4 bg-accent-primary/5 border border-accent-primary/20 rounded-xl">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-accent-primary mb-3 flex items-center gap-2">
                        <span>💡</span> Wisdom for This Pairing
                    </h4>
                    <ul className="space-y-2">
                        {insights.tips.map((t, i) => (
                            <li key={i} className="text-sm text-text-secondary flex items-start gap-3">
                                <span className="text-accent-primary mt-0.5">→</span>
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HarmonyScore;
