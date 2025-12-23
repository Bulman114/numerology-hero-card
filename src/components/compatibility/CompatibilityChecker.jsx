import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import useProfileStore from '../../store/useProfileStore';
import { getCompatibilityScore, getCompatibilityInsights } from '../../data/compatibility';
import { getEsotericData } from '../../data/esotericData';
import Button from '../ui/Button';
import HarmonyScore from './HarmonyScore';

const CompatibilityChecker = () => {
    const navigate = useNavigate();
    const { profiles } = useProfileStore();
    const [profile1Id, setProfile1Id] = useState('');
    const [profile2Id, setProfile2Id] = useState('');
    const [showResult, setShowResult] = useState(false);

    const profile1 = profiles.find(p => p.id === profile1Id);
    const profile2 = profiles.find(p => p.id === profile2Id);

    const canCompare = profile1 && profile2 && profile1Id !== profile2Id;

    const handleCompare = () => {
        if (canCompare) {
            setShowResult(true);
        }
    };

    const handleReset = () => {
        setShowResult(false);
        setProfile1Id('');
        setProfile2Id('');
    };

    if (profiles.length < 2) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="mb-6">
                    <Button onClick={() => navigate(-1)} variant="ghost" icon={ArrowLeft}>
                        Back
                    </Button>
                </div>
                <div className="text-center py-12 bg-white rounded-lg shadow">
                    <Heart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <h2 className="text-2xl font-display mb-2">Need More Profiles</h2>
                    <p className="text-gray-600 mb-4">
                        You need at least 2 profiles to check compatibility.
                    </p>
                    <Button onClick={() => navigate('/')} variant="primary">
                        Create Profile
                    </Button>
                </div>
            </div>
        );
    }

    const score = canCompare
        ? getCompatibilityScore(
            profile1.numbers.lifePath.value,
            profile2.numbers.lifePath.value
        )
        : 0;

    const insights = canCompare
        ? getCompatibilityInsights(
            profile1.numbers.lifePath.value,
            profile2.numbers.lifePath.value
        )
        : null;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-6">
                <Button onClick={() => navigate(-1)} variant="ghost" icon={ArrowLeft}>
                    Back
                </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-bg-charcoal text-bg-cream px-6 py-4">
                    <h1 className="text-2xl font-display flex items-center gap-2">
                        <Heart className="w-6 h-6" />
                        Compatibility Checker
                    </h1>
                    <p className="text-sm opacity-80 mt-1">
                        Compare Life Path numbers to discover relationship dynamics
                    </p>
                </div>

                <div className="p-6">
                    {!showResult ? (
                        <div className="space-y-6">
                            {/* Profile Selection */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Profile 1 */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Person 1
                                    </label>
                                    <select
                                        value={profile1Id}
                                        onChange={(e) => setProfile1Id(e.target.value)}
                                        className="input-field"
                                    >
                                        <option value="">Select a profile...</option>
                                        {profiles.map((p) => {
                                            const esoteric = getEsotericData(p.numbers.lifePath.value);
                                            return (
                                                <option key={p.id} value={p.id} disabled={p.id === profile2Id}>
                                                    {p.firstName} {p.lastName} (Life Path {p.numbers.lifePath.value})
                                                </option>
                                            );
                                        })}
                                    </select>
                                    {profile1 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-3 p-4 bg-gray-50 rounded-lg"
                                        >
                                            <div className="text-3xl font-bold text-lifepath-7 text-center">
                                                {profile1.numbers.lifePath.value}
                                            </div>
                                            <div className="text-center text-sm text-gray-600 mt-1">
                                                {getEsotericData(profile1.numbers.lifePath.value).keywords.join(' • ')}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Profile 2 */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Person 2
                                    </label>
                                    <select
                                        value={profile2Id}
                                        onChange={(e) => setProfile2Id(e.target.value)}
                                        className="input-field"
                                    >
                                        <option value="">Select a profile...</option>
                                        {profiles.map((p) => (
                                            <option key={p.id} value={p.id} disabled={p.id === profile1Id}>
                                                {p.firstName} {p.lastName} (Life Path {p.numbers.lifePath.value})
                                            </option>
                                        ))}
                                    </select>
                                    {profile2 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-3 p-4 bg-gray-50 rounded-lg"
                                        >
                                            <div className="text-3xl font-bold text-lifepath-7 text-center">
                                                {profile2.numbers.lifePath.value}
                                            </div>
                                            <div className="text-center text-sm text-gray-600 mt-1">
                                                {getEsotericData(profile2.numbers.lifePath.value).keywords.join(' • ')}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            {/* Compare Button */}
                            <div className="text-center pt-4">
                                <Button
                                    onClick={handleCompare}
                                    disabled={!canCompare}
                                    variant="primary"
                                    size="lg"
                                    icon={Heart}
                                >
                                    Check Compatibility
                                </Button>
                                {profile1Id === profile2Id && profile1Id !== '' && (
                                    <p className="text-sm text-red-500 mt-2">
                                        Please select two different profiles
                                    </p>
                                )}
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <HarmonyScore
                                score={score}
                                insights={insights}
                                profile1={profile1}
                                profile2={profile2}
                            />
                            <div className="text-center pt-6">
                                <Button onClick={handleReset} variant="secondary">
                                    Compare Different Profiles
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompatibilityChecker;
