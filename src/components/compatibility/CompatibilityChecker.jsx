import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import useProfileStore from '../../store/useProfileStore';
import { getCompatibilityScore, getCompatibilityInsights } from '../../data/compatibility';
import { getEsotericData } from '../../data/esotericData';
import { getLifePathProfile } from '../../data/lifePathProfiles';
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
                <div className="text-center py-12 bg-bg-card rounded-3xl border border-border-default shadow-lg">
                    <Heart className="w-16 h-16 mx-auto text-accent-primary/50 mb-4" />
                    <h2 className="text-2xl font-display mb-2 text-text-primary">Need More Profiles</h2>
                    <p className="text-text-secondary mb-4">
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

            <div className="bg-bg-card/80 backdrop-blur-xl border border-border-default rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-accent-primary/10 px-8 py-6 border-b border-border-default">
                    <h1 className="text-2xl font-display font-bold flex items-center gap-3 text-white">
                        <Heart className="w-6 h-6 text-accent-primary" />
                        Compatibility Matrix
                    </h1>
                    <p className="text-sm text-text-secondary mt-1">
                        Compare Life Path resonance and relationship dynamics
                    </p>
                </div>

                <div className="p-8">
                    {!showResult ? (
                        <div className="space-y-8">
                            {/* Profile Selection */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Profile 1 */}
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-wider text-text-muted mb-3">
                                        Partner A
                                    </label>
                                    <select
                                        value={profile1Id}
                                        onChange={(e) => setProfile1Id(e.target.value)}
                                        className="input-field bg-bg-elevated"
                                    >
                                        <option value="">Select profile...</option>
                                        {profiles.map((p) => {
                                            return (
                                                <option key={p.id} value={p.id} disabled={p.id === profile2Id}>
                                                    {p.firstName} {p.lastName} (LP {p.numbers.lifePath.value})
                                                </option>
                                            );
                                        })}
                                    </select>
                                    {profile1 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-4 p-6 bg-bg-elevated rounded-2xl border border-border-subtle"
                                        >
                                            <div
                                                className="text-4xl font-display font-bold text-center mx-auto w-16 h-16 rounded-full flex items-center justify-center text-white"
                                                style={{
                                                    backgroundColor: getEsotericData(profile1.numbers.lifePath.value).color,
                                                    boxShadow: `0 0 20px ${getEsotericData(profile1.numbers.lifePath.value).color}40`
                                                }}
                                            >
                                                {profile1.numbers.lifePath.value}
                                            </div>
                                            <div className="text-center text-xs font-bold uppercase tracking-widest text-accent-primary mt-3">
                                                {getLifePathProfile(profile1.numbers.lifePath.value)?.archetype || 'Life Path ' + profile1.numbers.lifePath.value}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Profile 2 */}
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-wider text-text-muted mb-3">
                                        Partner B
                                    </label>
                                    <select
                                        value={profile2Id}
                                        onChange={(e) => setProfile2Id(e.target.value)}
                                        className="input-field bg-bg-elevated"
                                    >
                                        <option value="">Select profile...</option>
                                        {profiles.map((p) => (
                                            <option key={p.id} value={p.id} disabled={p.id === profile1Id}>
                                                {p.firstName} {p.lastName} (LP {p.numbers.lifePath.value})
                                            </option>
                                        ))}
                                    </select>
                                    {profile2 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-4 p-6 bg-bg-elevated rounded-2xl border border-border-subtle"
                                        >
                                            <div
                                                className="text-4xl font-display font-bold text-center mx-auto w-16 h-16 rounded-full flex items-center justify-center text-white"
                                                style={{
                                                    backgroundColor: getEsotericData(profile2.numbers.lifePath.value).color,
                                                    boxShadow: `0 0 20px ${getEsotericData(profile2.numbers.lifePath.value).color}40`
                                                }}
                                            >
                                                {profile2.numbers.lifePath.value}
                                            </div>
                                            <div className="text-center text-xs font-bold uppercase tracking-widest text-accent-teal mt-3">
                                                {getLifePathProfile(profile2.numbers.lifePath.value)?.archetype || 'Life Path ' + profile2.numbers.lifePath.value}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            {/* Compare Button */}
                            <div className="text-center pt-4 border-t border-border-subtle">
                                <Button
                                    onClick={handleCompare}
                                    disabled={!canCompare}
                                    variant="primary"
                                    size="lg"
                                    icon={Heart}
                                    className="w-full md:w-auto min-w-[200px]"
                                >
                                    Analyze Compatibility
                                </Button>
                                {profile1Id === profile2Id && profile1Id !== '' && (
                                    <p className="text-sm text-red-400 mt-2 bg-red-400/10 py-1 px-3 rounded inline-block">
                                        Select two different profiles
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
                            <div className="text-center pt-8">
                                <Button onClick={handleReset} variant="secondary">
                                    Start New Comparison
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
