import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save } from 'lucide-react';
import useProfileStore from '../../store/useProfileStore';
import { validateProfile } from '../../utils/validation';

const MONTHS = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);

export default function EditProfileModal({ profile, isOpen, onClose, onSave }) {
    const { updateProfile } = useProfileStore();
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        nickname: '',
        birthdate: { month: '', day: '', year: '' },
        calculationMethod: 'pythagorean',
    });
    const [errors, setErrors] = useState({});

    // Initialize form with profile data when opened
    useEffect(() => {
        if (profile && isOpen) {
            setFormData({
                firstName: profile.firstName || '',
                middleName: profile.middleName || '',
                lastName: profile.lastName || '',
                nickname: profile.nickname || '',
                birthdate: profile.birthdate || { month: '', day: '', year: '' },
                calculationMethod: profile.calculationMethod || 'pythagorean',
            });
            setErrors({});
        }
    }, [profile, isOpen]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const handleBirthdateChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            birthdate: {
                ...prev.birthdate,
                [field]: value ? parseInt(value) : '',
            },
        }));
        if (errors.birthdate) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.birthdate;
                return newErrors;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validation = validateProfile(formData);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        updateProfile(profile.id, formData);
        onSave?.();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="glass-card w-full max-w-lg max-h-[90vh] overflow-y-auto"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b border-border-default">
                        <h2 className="text-xl font-display text-text-primary">Edit Profile</h2>
                        <button
                            onClick={onClose}
                            className="p-2 text-text-muted hover:text-text-primary transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        {/* First Name */}
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-text-secondary">
                                First Name <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                className={`input-field ${errors.firstName ? 'border-red-500 focus:ring-red-500' : ''}`}
                            />
                            {errors.firstName && (
                                <p className="text-sm text-red-400">{errors.firstName}</p>
                            )}
                        </div>

                        {/* Middle Name */}
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-text-secondary">
                                Middle Name (Optional)
                            </label>
                            <input
                                type="text"
                                value={formData.middleName}
                                onChange={(e) => handleInputChange('middleName', e.target.value)}
                                className="input-field"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-text-secondary">
                                Last Name <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                className={`input-field ${errors.lastName ? 'border-red-500 focus:ring-red-500' : ''}`}
                            />
                            {errors.lastName && (
                                <p className="text-sm text-red-400">{errors.lastName}</p>
                            )}
                        </div>

                        {/* Nickname */}
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-text-secondary">
                                Nickname (Optional)
                            </label>
                            <input
                                type="text"
                                value={formData.nickname}
                                onChange={(e) => handleInputChange('nickname', e.target.value)}
                                className="input-field"
                            />
                        </div>

                        {/* Birthdate */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-text-secondary">
                                Birthdate <span className="text-red-400">*</span>
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                <select
                                    value={formData.birthdate.month}
                                    onChange={(e) => handleBirthdateChange('month', e.target.value)}
                                    className={`input-field ${errors.birthdate ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Month</option>
                                    {MONTHS.map(m => (
                                        <option key={m.value} value={m.value}>{m.label}</option>
                                    ))}
                                </select>
                                <input
                                    type="number"
                                    placeholder="Day"
                                    value={formData.birthdate.day}
                                    onChange={(e) => handleBirthdateChange('day', e.target.value)}
                                    min="1"
                                    max="31"
                                    className={`input-field ${errors.birthdate ? 'border-red-500' : ''}`}
                                />
                                <select
                                    value={formData.birthdate.year}
                                    onChange={(e) => handleBirthdateChange('year', e.target.value)}
                                    className={`input-field ${errors.birthdate ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Year</option>
                                    {YEARS.map(y => (
                                        <option key={y} value={y}>{y}</option>
                                    ))}
                                </select>
                            </div>
                            {errors.birthdate && (
                                <p className="text-sm text-red-400">{errors.birthdate}</p>
                            )}
                        </div>

                        {/* Calculation Method */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-text-secondary">
                                Calculation Method
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        value="pythagorean"
                                        checked={formData.calculationMethod === 'pythagorean'}
                                        onChange={(e) => handleInputChange('calculationMethod', e.target.value)}
                                        className="mr-2 accent-accent-primary"
                                    />
                                    <span className="text-text-primary">Pythagorean</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        value="chaldean"
                                        checked={formData.calculationMethod === 'chaldean'}
                                        onChange={(e) => handleInputChange('calculationMethod', e.target.value)}
                                        className="mr-2 accent-accent-primary"
                                    />
                                    <span className="text-text-primary">Chaldean</span>
                                </label>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="btn-secondary flex-1"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn-primary flex-1 flex items-center justify-center gap-2"
                            >
                                <Save size={18} />
                                Save Changes
                            </button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
