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


                {/* Header Content */}
                <div className="relative z-10 px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 bg-black/20">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-text-primary">
                            {fullName}
                        </h2>
                        <div className="flex items-center gap-4 mt-1 text-xs text-text-secondary font-mono">
                            <span className="opacity-80">
                                {formattedDate}
                            </span>
                            {profile.nickname && (
                                <span className="italic opacity-60">
                                    "{profile.nickname}"
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Method Badge */}
                    <div className="px-3 py-1 rounded bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-[10px] font-bold tracking-widest uppercase">
                        {profile.calculationMethod}
                    </div>
                </div>

                {/* Life Path Section - Compact Hero */}
                <div className="relative z-10 px-6 md:px-24 py-8 flex items-center justify-between gap-8 bg-gradient-to-b from-accent-primary/10 to-transparent">
                    <div className="flex-1">
                        <div className="text-sm font-bold text-accent-primary uppercase tracking-widest mb-2">Life Path Number</div>
                        <div className="text-text-secondary text-sm leading-relaxed max-w-lg">
                            {esotericData.keywords.join(' • ')}
                        </div>
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className="relative flex-shrink-0"
                    >
                        {/* Glow Effect behind number */}
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-[40px]"
                            style={{ backgroundColor: esotericData.color, opacity: 0.4 }}
                        />

                        <div className="text-7xl md:text-8xl font-display font-bold text-white relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 drop-shadow-2xl">
                            {profile.numbers.lifePath.value}
                        </div>

                        {profile.numbers.lifePath.isMaster && (
                            <div className="absolute -top-3 -right-6 rotate-12">
                                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-accent-gold text-black shadow-lg">
                                    Master
                                </span>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Esoteric Strip - Horizontal Layout */}
                <div className="relative z-10 border-t border-white/5 bg-black/10 backdrop-blur-sm px-8 py-6">
                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-4">
                        {esotericItems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-bg-secondary border border-border-default flex items-center justify-center overflow-hidden relative shrink-0 text-text-muted">
                                    <img
                                        src={`/icons/${item.iconType}.png`}
                                        alt={item.label}
                                        className="w-full h-full object-cover opacity-80"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<span class="text-xs">✨</span>';
                                        }}
                                    />
                                </div>
                                <div>
                                    <div className="text-[9px] text-text-muted uppercase tracking-wide">{item.label}</div>
                                    <div className="font-medium text-text-primary text-xs">{item.value}</div>
                                </div>
                            </div>
                        ))}

                        {/* Periodic Aura Item */}
                        <div className="flex items-center gap-3 pl-4 md:border-l border-white/10">
                            <div
                                className="w-8 h-8 rounded-lg border border-white/10 shadow-lg relative overflow-hidden"
                                style={{ backgroundColor: esotericData.color }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                            </div>
                            <div>
                                <div className="text-[9px] text-text-muted uppercase tracking-wide">Aura</div>
                                <div className="font-medium font-mono text-text-primary text-xs">{esotericData.color}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Matrix - Full Width */}
                <div className="bg-bg-card p-6 md:p-8 border-t border-border-subtle">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted">Core Matrix</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {coreNumbers.map((item, idx) => {
                            const key = getMeaningKey(item.value, item.isMaster);
                            const meaning = key === 0 ? zeroMeaning : getNumberMeaning(key);

                            return (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl bg-bg-secondary border border-border-default hover:border-accent-teal/30 transition-colors group flex flex-col h-full"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="text-[10px] font-bold text-text-muted group-hover:text-accent-teal transition-colors uppercase tracking-wider">
                                            {item.label}
                                        </div>
                                        <div className="text-xl font-display font-bold text-text-primary flex items-baseline gap-1">
                                            {item.value}
                                            {item.isMaster && <span className="text-[10px] text-accent-gold">⚡</span>}
                                        </div>
                                    </div>

                                    {/* Meaning Content - No Truncation */}
                                    <div className="mt-auto pt-2 border-t border-white/5">
                                        <div className="text-xs font-bold text-accent-primary mb-1">
                                            {meaning.keywords[0]}
                                        </div>
                                        <div className="text-[11px] text-text-muted leading-relaxed">
                                            {meaning.description}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-4 bg-black/20 backdrop-blur-xl border-t border-white/5 text-[10px] text-text-muted flex flex-col sm:flex-row justify-between gap-2 uppercase tracking-wider">
                    <span>Generated on {new Date(profile.createdAt).toLocaleDateString()}</span>
                    <span>Numerology Hero Card • {profile.id.slice(0, 8)}</span>
                </div>
            </div>
        </motion.div>
    );
}
