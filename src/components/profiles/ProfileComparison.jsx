import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, Users } from 'lucide-react';
import useProfileStore from '../../store/useProfileStore';
import { getEsotericData } from '../../data/esotericData';

export default function ProfileComparison() {
    const { profiles } = useProfileStore();
    const [selectedProfiles, setSelectedProfiles] = useState([null, null]);

    const handleSelectProfile = (index, profileId) => {
        const newSelection = [...selectedProfiles];
        newSelection[index] = profiles.find(p => p.id === profileId) || null;
        setSelectedProfiles(newSelection);
    };

    const profileA = selectedProfiles[0];
    const profileB = selectedProfiles[1];

    const comparisonRows = [
        { label: 'Life Path', key: 'lifePath' },
        { label: 'Expression', key: 'expression' },
        { label: 'Soul Urge', key: 'soulUrge' },
        { label: 'Personality', key: 'personality' },
        { label: 'Birthday', key: 'birthday', isDirect: true },
        { label: 'Personal Year', key: 'personalYear' },
        { label: 'Challenge', key: 'challengeNumber', isDirect: true },
    ];

    const getValue = (profile, row) => {
        if (!profile) return '-';
        if (row.isDirect) return profile.numbers[row.key];
        return profile.numbers[row.key]?.value ?? '-';
    };

    const getIsMaster = (profile, row) => {
        if (!profile || row.isDirect) return false;
        return profile.numbers[row.key]?.isMaster ?? false;
    };

    if (profiles.length < 2) {
        return (
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-3xl font-display mb-8 text-center text-text-primary">
                    ⚖️ Profile Comparison
                </h1>
                <div className="text-center py-12 glass-card">
                    <Users className="mx-auto mb-4 text-text-muted" size={48} />
                    <p className="text-text-secondary mb-2">
                        You need at least 2 profiles to compare.
                    </p>
                    <p className="text-text-muted text-sm">
                        Currently you have {profiles.length} profile(s).
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-display mb-8 text-center text-text-primary">
                ⚖️ Profile Comparison
            </h1>

            {/* Profile Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[0, 1].map((index) => (
                    <div key={index} className="glass-card p-4">
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                            Profile {index + 1}
                        </label>
                        <select
                            value={selectedProfiles[index]?.id || ''}
                            onChange={(e) => handleSelectProfile(index, e.target.value)}
                            className="input-field"
                        >
                            <option value="">Select a profile...</option>
                            {profiles.map(p => (
                                <option key={p.id} value={p.id}>
                                    {p.firstName} {p.lastName}
                                </option>
                            ))}
                        </select>

                        {selectedProfiles[index] && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 text-center"
                            >
                                <div
                                    className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-display font-bold text-white mb-2"
                                    style={{
                                        backgroundColor: getEsotericData(selectedProfiles[index].numbers.lifePath.value).color
                                    }}
                                >
                                    {selectedProfiles[index].numbers.lifePath.value}
                                </div>
                                <p className="text-text-primary font-display">
                                    {selectedProfiles[index].firstName} {selectedProfiles[index].lastName}
                                </p>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>

            {/* Comparison Table */}
            {profileA && profileB && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card overflow-hidden"
                >
                    <div className="p-4 bg-bg-elevated border-b border-border-default">
                        <div className="flex items-center justify-center gap-4">
                            <span className="font-display text-text-primary">
                                {profileA.firstName}
                            </span>
                            <ArrowLeftRight className="text-accent-teal" size={20} />
                            <span className="font-display text-text-primary">
                                {profileB.firstName}
                            </span>
                        </div>
                    </div>

                    <div className="divide-y divide-border-default">
                        {comparisonRows.map((row) => {
                            const valA = getValue(profileA, row);
                            const valB = getValue(profileB, row);
                            const isMatch = valA === valB;
                            const masterA = getIsMaster(profileA, row);
                            const masterB = getIsMaster(profileB, row);

                            return (
                                <div
                                    key={row.key}
                                    className={`grid grid-cols-3 ${isMatch ? 'bg-accent-teal/5' : ''}`}
                                >
                                    {/* Profile A Value */}
                                    <div className="p-4 text-center">
                                        <span className="text-2xl font-display font-bold text-accent-primary">
                                            {valA}
                                        </span>
                                        {masterA && <span className="ml-1 text-accent-gold">⚡</span>}
                                    </div>

                                    {/* Label */}
                                    <div className="p-4 text-center bg-bg-secondary/30 flex items-center justify-center">
                                        <span className="text-sm text-text-secondary font-medium">
                                            {row.label}
                                        </span>
                                        {isMatch && (
                                            <span className="ml-2 text-xs text-accent-teal">✓</span>
                                        )}
                                    </div>

                                    {/* Profile B Value */}
                                    <div className="p-4 text-center">
                                        <span className="text-2xl font-display font-bold text-accent-primary">
                                            {valB}
                                        </span>
                                        {masterB && <span className="ml-1 text-accent-gold">⚡</span>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Summary */}
                    <div className="p-4 bg-bg-elevated border-t border-border-default text-center">
                        <p className="text-text-secondary text-sm">
                            {comparisonRows.filter(row => getValue(profileA, row) === getValue(profileB, row)).length} of {comparisonRows.length} numbers match
                        </p>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
