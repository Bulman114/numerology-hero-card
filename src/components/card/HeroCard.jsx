import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Image, Info } from 'lucide-react';
import { getEsotericData } from '../../data/esotericData';
import { getNumberMeaning } from '../../data/numberMeanings';
import { exportToPNG, exportToPDF } from '../../utils/export';

export default function HeroCard({ profile }) {
    const cardRef = useRef(null);
    const [isExporting, setIsExporting] = useState(false);

    if (!profile) return null;

    const esotericData = getEsotericData(profile.numbers.lifePath.value);

    const fullName = [
        profile.firstName,
        profile.middleName,
        profile.lastName,
    ].filter(Boolean).join(' ');

    const formattedDate = `${String(profile.birthdate.month).padStart(2, '0')}/${String(profile.birthdate.day).padStart(2, '0')}/${profile.birthdate.year}`;

    const coreNumbers = [
        { label: 'Expression', value: profile.numbers.expression.value, isMaster: profile.numbers.expression.isMaster },
        { label: 'Soul Urge', value: profile.numbers.soulUrge.value, isMaster: profile.numbers.soulUrge.isMaster },
        { label: 'Personality', value: profile.numbers.personality.value, isMaster: profile.numbers.personality.isMaster },
        { label: 'Birthday', value: profile.numbers.birthday, isMaster: false },
        { label: 'Personal Year', value: profile.numbers.personalYear.value, isMaster: profile.numbers.personalYear.isMaster },
        { label: 'Challenge', value: profile.numbers.challengeNumber, isMaster: false },
    ];

    // Helper to get meaning key (safely handling masters and large numbers)
    const getMeaningKey = (val, isMaster) => {
        if (isMaster || [11, 22, 33].includes(val)) return val;
        if (val === 0) return 0; // Handle challenge 0
        return val > 9 ? (val % 9 || 9) : val;
    };

    // Zero meaning fallback (since it's not in the main dictionary usually)
    const zeroMeaning = {
        keywords: ['Potential', 'Choice', 'All-encompassing'],
        description: 'The number of unlimited potential and choice. It amplifies the qualities of other numbers present.',
    };

    const esotericItems = [
        { label: 'Tarot', value: esotericData.tarot, iconType: 'tarot' },
        { label: 'Planet', value: esotericData.planet, iconType: 'planet' },
        { label: 'Element', value: esotericData.element, iconType: 'element' },
        { label: 'Gemstone', value: esotericData.gemstone, iconType: 'gemstone' },
        { label: 'Chakra', value: esotericData.chakra, iconType: 'chakra' },
    ];

    const handleExportPNG = async () => {
        if (!cardRef.current || isExporting) return;
        setIsExporting(true);
        const filename = `${profile.firstName}-${profile.lastName}-hero-card.png`;
        await exportToPNG(cardRef.current, filename);
        setIsExporting(false);
    };

    const handleExportPDF = async () => {
        if (!cardRef.current || isExporting) return;
        setIsExporting(true);
        const filename = `${profile.firstName}-${profile.lastName}-hero-card.pdf`;
        await exportToPDF(cardRef.current, filename);
        setIsExporting(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto p-6"
        >
            {/* Export Buttons */}
            <div className="flex gap-3 mb-6 justify-end no-print">
                <button
                    onClick={handleExportPNG}
                    disabled={isExporting}
                    className="btn-secondary flex items-center gap-2"
                >
                    <Image size={18} />
                    {isExporting ? 'Exporting...' : 'PNG'}
                </button>
                <button
                    onClick={handleExportPDF}
                    disabled={isExporting}
                    className="btn-secondary flex items-center gap-2"
                >
                    <FileText size={18} />
                    PDF
                </button>
            </div>

            {/* Card Container - ref for export */}
            <div ref={cardRef} className="hero-card text-text-primary">
                {/* Visual Header Background */}
                <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-accent-primary/20 to-transparent pointer-events-none" />

                {/* Header Content */}
                <div className="relative z-10 px-10 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                            {fullName}
                        </h2>
                        <div className="flex items-center gap-4 mt-2 text-sm text-text-secondary font-mono">
                            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">
                                {formattedDate}
                            </span>
                            {profile.nickname && (
                                <span className="italic opacity-70">
                                    "{profile.nickname}"
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Method Badge */}
                    <div className="px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-bold tracking-widest uppercase">
                        {profile.calculationMethod}
                    </div>
                </div>

                {/* Life Path Section - Hero */}
                <div className="relative z-10 px-10 py-12 flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className="relative"
                    >
                        {/* Glow Effect behind number */}
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px]"
                            style={{ backgroundColor: esotericData.color, opacity: 0.3 }}
                        />

                        <div className="number-display relative z-10">
                            {profile.numbers.lifePath.value}
                        </div>

                        {profile.numbers.lifePath.isMaster && (
                            <div className="absolute -top-6 right-0 rotate-12">
                                <span className="master-badge shadow-lg backdrop-blur-md bg-black/50">
                                    Master Number
                                </span>
                            </div>
                        )}
                    </motion.div>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {esotericData.keywords.map((keyword, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-text-primary backdrop-blur-sm"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Grid Layout for Details */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-border-subtle/30 border-t border-border-subtle">

                    {/* Left Column: Core Matrix */}
                    <div className="md:col-span-7 bg-bg-card p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted">Core Matrix</h3>
                            <div className="text-xs font-mono text-accent-primary">
                                EXP: {profile.numbers.expression.value}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {coreNumbers.map((item, idx) => {
                                const key = getMeaningKey(item.value, item.isMaster);
                                const meaning = key === 0 ? zeroMeaning : getNumberMeaning(key);

                                return (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-2xl bg-bg-secondary border border-border-default hover:border-accent-teal/30 transition-colors group flex flex-col h-full"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="text-xs text-text-muted group-hover:text-accent-teal transition-colors uppercase tracking-wider">
                                                {item.label}
                                            </div>
                                            <div className="text-2xl font-display font-bold text-text-primary flex items-baseline gap-1">
                                                {item.value}
                                                {item.isMaster && <span className="text-[10px] text-accent-gold">⚡</span>}
                                            </div>
                                        </div>

                                        {/* Meaning Content */}
                                        <div className="mt-auto pt-2 border-t border-white/5">
                                            <div className="text-xs font-bold text-accent-primary mb-1">
                                                {meaning.keywords[0]}
                                            </div>
                                            <div className="text-[11px] text-text-muted leading-relaxed line-clamp-3">
                                                {meaning.description}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Esoteric Data */}
                    <div className="md:col-span-5 bg-bg-elevated/30 p-8 backdrop-blur-sm">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-6">Esoteric Profile</h3>

                        <div className="space-y-4">
                            {esotericItems.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    {/* Icon Container with Generated Image */}
                                    <div className="w-12 h-12 rounded-xl bg-bg-secondary border border-border-default flex items-center justify-center overflow-hidden relative group shrink-0">
                                        <img
                                            src={`/icons/${item.iconType}.png`}
                                            alt={item.label}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.classList.add('fallback-icon');
                                                e.target.parentElement.innerHTML = '<span class="text-xl">✨</span>';
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <div className="text-xs text-text-muted">{item.label}</div>
                                        <div className="font-medium text-text-primary text-sm leading-tight">{item.value}</div>
                                    </div>
                                </div>
                            ))}

                            <div className="flex items-center gap-4 pt-4 mt-4 border-t border-white/5">
                                <div
                                    className="w-12 h-12 rounded-xl border border-white/10 shadow-lg relative overflow-hidden"
                                    style={{ backgroundColor: esotericData.color }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                                </div>
                                <div>
                                    <div className="text-xs text-text-muted">Aura Color</div>
                                    <div className="font-medium font-mono text-text-primary text-sm">{esotericData.color}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-4 bg-black/20 backdrop-blur-xl border-t border-white/5 text-[10px] text-text-muted flex justify-between uppercase tracking-wider">
                    <span>Generated on {new Date(profile.createdAt).toLocaleDateString()}</span>
                    <span>Numerology Hero Card • {profile.id.slice(0, 8)}</span>
                </div>
            </div>
        </motion.div>
    );
}
