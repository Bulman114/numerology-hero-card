import React from 'react';
import { motion } from 'framer-motion';
import { getCompatibilityLevel, getCompatibilityColor } from '../../data/compatibility';

const HarmonyScore = ({ score, insights, profile1, profile2 }) => {
    const level = getCompatibilityLevel(score);
    const color = getCompatibilityColor(score);

    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="space-y-6">
            {/* Score Circle */}
            <div className="flex justify-center">
                <div className="relative">
                    <svg width="120" height="120" className="-rotate-90">
                        {/* Background circle */}
                        <circle
                            cx="60"
                            cy="60"
                            r="45"
                            stroke="#e5e7eb"
                            strokeWidth="10"
                            fill="none"
                        />
                        {/* Progress circle */}
                        <motion.circle
                            cx="60"
                            cy="60"
                            r="45"
                            stroke={color}
                            strokeWidth="10"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-3xl font-bold" style={{ color }}>
                                {score}%
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Level Label */}
            <div className="text-center">
                <span
                    className="px-4 py-2 rounded-full text-white font-medium"
                    style={{ backgroundColor: color }}
                >
                    {level}
                </span>
            </div>

            {/* Profile Names */}
            <div className="flex justify-center items-center gap-4 text-center">
                <div>
                    <div className="text-2xl font-bold text-lifepath-7">
                        {profile1.numbers.lifePath.value}
                    </div>
                    <div className="text-sm text-gray-600">{profile1.firstName}</div>
                </div>
                <div className="text-2xl text-gray-400">💕</div>
                <div>
                    <div className="text-2xl font-bold text-lifepath-7">
                        {profile2.numbers.lifePath.value}
                    </div>
                    <div className="text-sm text-gray-600">{profile2.firstName}</div>
                </div>
            </div>

            {/* Insights */}
            <div className="space-y-4 pt-4 border-t">
                {/* Strengths */}
                <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                        ✅ Strengths
                    </h4>
                    <ul className="space-y-1">
                        {insights.strengths.map((s, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-green-500">•</span>
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Challenges */}
                <div>
                    <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                        ⚠️ Challenges
                    </h4>
                    <ul className="space-y-1">
                        {insights.challenges.map((c, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-orange-500">•</span>
                                {c}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tips */}
                <div>
                    <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                        💡 Tips
                    </h4>
                    <ul className="space-y-1">
                        {insights.tips.map((t, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-blue-500">•</span>
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
