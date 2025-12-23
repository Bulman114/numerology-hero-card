import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Image } from 'lucide-react';
import { getEsotericData } from '../../data/esotericData';
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

    const esotericItems = [
        { label: 'Tarot', value: esotericData.tarot, icon: '🃏' },
        { label: 'Planet', value: esotericData.planet, icon: '🪐' },
        { label: 'Element', value: esotericData.element, icon: '🌊' },
        { label: 'Gemstone', value: esotericData.gemstone, icon: '💎' },
        { label: 'Chakra', value: esotericData.chakra, icon: '🧘' },
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
            <div className="flex gap-3 mb-4 justify-end no-print">
                <button
                    onClick={handleExportPNG}
                    disabled={isExporting}
                    className="btn-secondary flex items-center gap-2"
                >
                    <Image size={18} />
                    {isExporting ? 'Exporting...' : 'Download PNG'}
                </button>
                <button
                    onClick={handleExportPDF}
                    disabled={isExporting}
                    className="btn-secondary flex items-center gap-2"
                >
                    <FileText size={18} />
                    Download PDF
                </button>
            </div>

            {/* Card Container - ref for export */}
            <div ref={cardRef} className="hero-card">
                {/* Card Header */}
                <div className="px-8 py-6 bg-bg-charcoal text-bg-cream">
                    <h2 className="text-3xl font-display uppercase tracking-wide">
                        {fullName}
                    </h2>
                    <p className="text-sm mt-2 opacity-80">
                        Born: {formattedDate}
                    </p>
                    {profile.nickname && (
                        <p className="text-sm italic opacity-70">
                            "{profile.nickname}"
                        </p>
                    )}
                </div>

                {/* Life Path Display */}
                <div
                    className="py-12 text-center"
                    style={{ backgroundColor: esotericData.color + '20' }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="inline-block"
                    >
                        <div className="number-display" style={{ color: esotericData.color }}>
                            {profile.numbers.lifePath.value}
                        </div>
                        {profile.numbers.lifePath.isMaster && (
                            <div className="text-2xl mt-2">⚡ Master Number</div>
                        )}
                    </motion.div>

                    <div className="mt-4 text-xl font-medium space-x-2">
                        {esotericData.keywords.map((keyword, idx) => (
                            <span key={idx}>
                                {keyword}
                                {idx < esotericData.keywords.length - 1 && ' • '}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Reduction ID */}
                <div className="px-8 py-4 bg-white border-t-2 border-bg-charcoal">
                    <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">REDUCTION ID:</span>
                        <span className="font-mono font-bold">
                            {profile.numbers.expression.value}
                            {profile.numbers.expression.isMaster && ' ⚡'}
                        </span>
                    </div>
                </div>

                {/* Core Numbers Grid */}
                <div className="px-8 py-6 bg-white border-t-2 border-bg-charcoal">
                    <h3 className="text-xl font-display mb-4 uppercase">Core Numbers</h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {coreNumbers.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-50 p-4 rounded-md border border-gray-200"
                            >
                                <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                                <div className="text-3xl font-bold text-lifepath-7">
                                    {item.value}
                                    {item.isMaster && <span className="text-lg ml-1">⚡</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Esoteric Correspondences */}
                <div className="px-8 py-6 bg-white border-t-2 border-bg-charcoal">
                    <h3 className="text-xl font-display mb-4 uppercase">Esoteric Correspondences</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {esotericItems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <div className="text-xs text-gray-600">{item.label}</div>
                                    <div className="font-medium">{item.value}</div>
                                </div>
                            </div>
                        ))}

                        <div className="flex items-center gap-3 col-span-full">
                            <div
                                className="w-12 h-12 rounded-full border-2 border-gray-300"
                                style={{ backgroundColor: esotericData.color }}
                            />
                            <div>
                                <div className="text-xs text-gray-600">Color</div>
                                <div className="font-medium font-mono">{esotericData.color}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Metadata Footer */}
                <div className="px-8 py-4 bg-gray-100 border-t-2 border-bg-charcoal text-xs text-gray-600 flex justify-between">
                    <span>Method: {profile.calculationMethod}</span>
                    <span>Generated: {new Date(profile.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </motion.div>
    );
}
