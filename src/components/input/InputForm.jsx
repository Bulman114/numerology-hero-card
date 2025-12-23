import { useState } from 'react';
import { motion } from 'framer-motion';
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

export default function InputForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        nickname: '',
        birthdate: {
            month: '',
            day: '',
            year: '',
        },
    });

    const [errors, setErrors] = useState({});
    const { addProfile, calculationMethod, setCalculationMethod } = useProfileStore();

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));

        // Clear error for this field
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

        // Validate
        const validation = validateProfile({
            ...formData,
            calculationMethod,
        });

        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        // Create profile
        const profileId = addProfile({
            ...formData,
            calculationMethod,
        });

        // Notify parent
        if (onSubmit) {
            onSubmit(profileId);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto p-6"
        >
            <h1 className="text-4xl font-display text-center mb-8 text-text-primary">
                🔢 Numerology Hero Card
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-6 glass-card p-8"
                aria-label="Create numerology profile form"
            >
                {/* First Name */}
                <div className="space-y-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-text-secondary">
                        First Name <span className="text-red-400" aria-label="required">*</span>
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`input-field ${errors.firstName ? 'border-red-500 focus:ring-red-500' : ''}`}
                        aria-required="true"
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                    />
                    {errors.firstName && (
                        <p id="firstName-error" className="text-sm text-red-400" role="alert">{errors.firstName}</p>
                    )}
                </div>

                {/* Middle Name */}
                <div className="space-y-1">
                    <label htmlFor="middleName" className="block text-sm font-medium text-text-secondary">
                        Middle Name (Optional)
                    </label>
                    <input
                        id="middleName"
                        type="text"
                        value={formData.middleName}
                        onChange={(e) => handleInputChange('middleName', e.target.value)}
                        className={`input-field ${errors.middleName ? 'border-red-500 focus:ring-red-500' : ''}`}
                        aria-invalid={!!errors.middleName}
                    />
                    {errors.middleName && (
                        <p className="text-sm text-red-400" role="alert">{errors.middleName}</p>
                    )}
                </div>

                {/* Last Name */}
                <div className="space-y-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-text-secondary">
                        Last Name <span className="text-red-400" aria-label="required">*</span>
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`input-field ${errors.lastName ? 'border-red-500 focus:ring-red-500' : ''}`}
                        aria-required="true"
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                    />
                    {errors.lastName && (
                        <p id="lastName-error" className="text-sm text-red-400" role="alert">{errors.lastName}</p>
                    )}
                </div>

                {/* Nickname */}
                <div className="space-y-1">
                    <label htmlFor="nickname" className="block text-sm font-medium text-text-secondary">
                        Nickname (Optional)
                    </label>
                    <input
                        id="nickname"
                        type="text"
                        value={formData.nickname}
                        onChange={(e) => handleInputChange('nickname', e.target.value)}
                        placeholder="How you're commonly called"
                        className="input-field"
                    />
                </div>

                {/* Birthdate */}
                <fieldset className="space-y-2">
                    <legend className="block text-sm font-medium text-text-secondary">
                        Birthdate <span className="text-red-400" aria-label="required">*</span>
                    </legend>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="birth-month" className="sr-only">Month</label>
                            <select
                                id="birth-month"
                                value={formData.birthdate.month}
                                onChange={(e) => handleBirthdateChange('month', e.target.value)}
                                className={`input-field ${errors.birthdate ? 'border-red-500' : ''}`}
                                aria-required="true"
                            >
                                <option value="">Month</option>
                                {MONTHS.map(m => (
                                    <option key={m.value} value={m.value}>
                                        {m.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="birth-day" className="sr-only">Day</label>
                            <input
                                id="birth-day"
                                type="number"
                                placeholder="Day"
                                value={formData.birthdate.day}
                                onChange={(e) => handleBirthdateChange('day', e.target.value)}
                                min="1"
                                max="31"
                                className={`input-field ${errors.birthdate ? 'border-red-500' : ''}`}
                                aria-required="true"
                            />
                        </div>

                        <div>
                            <label htmlFor="birth-year" className="sr-only">Year</label>
                            <select
                                id="birth-year"
                                value={formData.birthdate.year}
                                onChange={(e) => handleBirthdateChange('year', e.target.value)}
                                className={`input-field ${errors.birthdate ? 'border-red-500' : ''}`}
                                aria-required="true"
                            >
                                <option value="">Year</option>
                                {YEARS.map(y => (
                                    <option key={y} value={y}>
                                        {y}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {errors.birthdate && (
                        <p className="text-sm text-red-400" role="alert">{errors.birthdate}</p>
                    )}
                </fieldset>

                {/* Calculation Method */}
                <fieldset className="space-y-2">
                    <legend className="block text-sm font-medium text-text-secondary">
                        Calculation Method
                    </legend>
                    <div className="flex gap-4" role="radiogroup" aria-label="Calculation method">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="calculationMethod"
                                value="pythagorean"
                                checked={calculationMethod === 'pythagorean'}
                                onChange={(e) => setCalculationMethod(e.target.value)}
                                className="mr-2 accent-accent-primary"
                            />
                            <span className="text-text-primary">Pythagorean</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="calculationMethod"
                                value="chaldean"
                                checked={calculationMethod === 'chaldean'}
                                onChange={(e) => setCalculationMethod(e.target.value)}
                                className="mr-2 accent-accent-primary"
                            />
                            <span className="text-text-primary">Chaldean</span>
                        </label>
                    </div>
                </fieldset>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn-primary w-full"
                    aria-label="Generate your numerology hero card"
                >
                    Generate Hero Card
                </button>
            </form>
        </motion.div>
    );
}
