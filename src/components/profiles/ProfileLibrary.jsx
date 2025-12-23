import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Trash2, Calendar, Edit3 } from 'lucide-react';
import useProfileStore from '../../store/useProfileStore';
import { getEsotericData } from '../../data/esotericData';
import EditProfileModal from './EditProfileModal';

export default function ProfileLibrary() {
    const navigate = useNavigate();
    const { profiles, setActiveProfile, deleteProfile } = useProfileStore();
    const [editingProfile, setEditingProfile] = useState(null);

    const handleSelectProfile = (profileId) => {
        setActiveProfile(profileId);
        navigate(`/card/${profileId}`);
    };

    const handleEdit = (e, profile) => {
        e.stopPropagation();
        setEditingProfile(profile);
    };

    const handleDelete = (e, profileId) => {
        e.stopPropagation();
        if (confirm('Are you sure you want to delete this profile?')) {
            deleteProfile(profileId);
        }
    };

    if (profiles.length === 0) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-display mb-8 text-center text-text-primary">📚 Profile Library</h1>
                <div className="text-center py-12 glass-card">
                    <p className="text-text-secondary mb-4">No profiles saved yet.</p>
                    <button onClick={() => navigate('/')} className="btn-primary">
                        Create Your First Profile
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-display text-text-primary">📚 Profile Library</h1>
                <button onClick={() => navigate('/')} className="btn-primary">
                    + New Profile
                </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {profiles.map((profile, idx) => {
                    const esotericData = getEsotericData(profile.numbers.lifePath.value);
                    const fullName = [profile.firstName, profile.middleName, profile.lastName]
                        .filter(Boolean)
                        .join(' ');

                    return (
                        <motion.div
                            key={profile.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => handleSelectProfile(profile.id)}
                            className="bg-bg-card rounded-xl border border-border-default overflow-hidden cursor-pointer hover:border-accent-primary/50 transition-all hover:shadow-lg hover:shadow-accent-primary/10"
                        >
                            {/* Color Bar */}
                            <div
                                className="h-1.5"
                                style={{ backgroundColor: esotericData.color }}
                            />

                            <div className="p-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3 className="font-display text-lg font-semibold text-text-primary">{fullName}</h3>
                                        <div className="flex items-center gap-4 mt-2 text-sm text-text-muted">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {`${profile.birthdate.month}/${profile.birthdate.day}/${profile.birthdate.year}`}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Life Path Badge */}
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                                        style={{ backgroundColor: esotericData.color }}
                                    >
                                        {profile.numbers.lifePath.value}
                                    </div>
                                </div>

                                {/* Keywords */}
                                <div className="mt-3 text-sm text-text-secondary">
                                    {esotericData.keywords.join(' • ')}
                                </div>

                                {/* Actions */}
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-xs text-text-muted">
                                        {profile.calculationMethod}
                                    </span>
                                    <div className="flex gap-1">
                                        <button
                                            onClick={(e) => handleEdit(e, profile)}
                                            className="p-2 text-text-muted hover:text-accent-primary transition-colors"
                                            title="Edit profile"
                                        >
                                            <Edit3 size={18} />
                                        </button>
                                        <button
                                            onClick={(e) => handleDelete(e, profile.id)}
                                            className="p-2 text-text-muted hover:text-red-400 transition-colors"
                                            title="Delete profile"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Edit Modal */}
            <EditProfileModal
                profile={editingProfile}
                isOpen={!!editingProfile}
                onClose={() => setEditingProfile(null)}
                onSave={() => setEditingProfile(null)}
            />
        </div>
    );
}
