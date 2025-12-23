import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Trash2, User, Calendar } from 'lucide-react';
import useProfileStore from '../../store/useProfileStore';
import { getEsotericData } from '../../data/esotericData';

export default function ProfileLibrary() {
    const navigate = useNavigate();
    const { profiles, setActiveProfile, deleteProfile } = useProfileStore();

    const handleSelectProfile = (profileId) => {
        setActiveProfile(profileId);
        navigate(`/card/${profileId}`);
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
                <h1 className="text-3xl font-display mb-8 text-center">📚 Profile Library</h1>
                <div className="text-center py-12 bg-white rounded-lg shadow">
                    <p className="text-gray-600 mb-4">No profiles saved yet.</p>
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
                <h1 className="text-3xl font-display">📚 Profile Library</h1>
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
                            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            {/* Color Bar */}
                            <div
                                className="h-2"
                                style={{ backgroundColor: esotericData.color }}
                            />

                            <div className="p-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3 className="font-display text-lg font-semibold">{fullName}</h3>
                                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {`${profile.birthdate.month}/${profile.birthdate.day}/${profile.birthdate.year}`}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Life Path Badge */}
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                                        style={{ backgroundColor: esotericData.color }}
                                    >
                                        {profile.numbers.lifePath.value}
                                    </div>
                                </div>

                                {/* Keywords */}
                                <div className="mt-3 text-sm text-gray-600">
                                    {esotericData.keywords.join(' • ')}
                                </div>

                                {/* Actions */}
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-xs text-gray-400">
                                        {profile.calculationMethod}
                                    </span>
                                    <button
                                        onClick={(e) => handleDelete(e, profile.id)}
                                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                        title="Delete profile"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
