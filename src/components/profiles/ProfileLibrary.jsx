import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Trash2, Calendar, Edit3, Upload, Download } from 'lucide-react';
import useProfileStore from '../../store/useProfileStore';
import { getEsotericData } from '../../data/esotericData';
import { exportToJSON, importFromJSON } from '../../utils/export';
import EditProfileModal from './EditProfileModal';

export default function ProfileLibrary() {
    const navigate = useNavigate();
    const { profiles, setActiveProfile, deleteProfile, importProfiles } = useProfileStore();
    const [editingProfile, setEditingProfile] = useState(null);
    const [importStatus, setImportStatus] = useState(null);
    const fileInputRef = useRef(null);

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

    const handleExportAll = () => {
        if (profiles.length === 0) return;
        exportToJSON(profiles, 'numerology-profiles-backup.json');
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const imported = await importFromJSON(file);
            if (imported && Array.isArray(imported)) {
                // Merge with existing profiles (avoid duplicates by ID)
                const existingIds = new Set(profiles.map(p => p.id));
                const newProfiles = imported.filter(p => !existingIds.has(p.id));

                if (newProfiles.length > 0) {
                    importProfiles([...profiles, ...newProfiles]);
                    setImportStatus({ type: 'success', message: `Imported ${newProfiles.length} profile(s)` });
                } else {
                    setImportStatus({ type: 'info', message: 'All profiles already exist' });
                }
            }
        } catch (err) {
            setImportStatus({ type: 'error', message: 'Failed to import profiles' });
        }

        // Clear file input
        e.target.value = '';

        // Clear status after 3 seconds
        setTimeout(() => setImportStatus(null), 3000);
    };

    if (profiles.length === 0) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-display mb-8 text-center text-text-primary">📚 Profile Library</h1>
                <div className="text-center py-12 glass-card">
                    <p className="text-text-secondary mb-4">No profiles saved yet.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button onClick={() => navigate('/')} className="btn-primary">
                            Create Your First Profile
                        </button>
                        <button onClick={handleImportClick} className="btn-secondary flex items-center justify-center gap-2">
                            <Upload size={18} />
                            Import Profiles
                        </button>
                    </div>
                </div>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h1 className="text-3xl font-display text-text-primary">📚 Profile Library</h1>
                <div className="flex gap-2">
                    <button onClick={handleImportClick} className="btn-secondary flex items-center gap-2">
                        <Upload size={16} />
                        Import
                    </button>
                    <button onClick={handleExportAll} className="btn-secondary flex items-center gap-2">
                        <Download size={16} />
                        Export All
                    </button>
                    <button onClick={() => navigate('/')} className="btn-primary">
                        + New
                    </button>
                </div>
            </div>

            {/* Import Status */}
            {importStatus && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-4 p-3 rounded-lg text-center ${importStatus.type === 'success' ? 'bg-accent-teal/20 text-accent-teal' :
                            importStatus.type === 'error' ? 'bg-red-500/20 text-red-400' :
                                'bg-accent-gold/20 text-accent-gold'
                        }`}
                >
                    {importStatus.message}
                </motion.div>
            )}

            <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
                aria-label="Import profiles from JSON file"
            />

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
                            className="bg-bg-card rounded-xl border border-border-default overflow-hidden cursor-pointer hover:border-accent-teal/50 transition-all hover:shadow-lg hover:shadow-accent-teal/10"
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
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-bg-primary font-display font-bold text-xl shadow-lg"
                                        style={{ backgroundColor: esotericData.color }}
                                    >
                                        {profile.numbers.lifePath.value}
                                    </div>
                                </div>

                                {/* Keywords */}
                                <div className="mt-3 text-sm text-text-secondary italic">
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
                                            className="p-2 text-text-muted hover:text-accent-teal transition-colors"
                                            title="Edit profile"
                                            aria-label="Edit profile"
                                        >
                                            <Edit3 size={18} />
                                        </button>
                                        <button
                                            onClick={(e) => handleDelete(e, profile.id)}
                                            className="p-2 text-text-muted hover:text-red-400 transition-colors"
                                            title="Delete profile"
                                            aria-label="Delete profile"
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
