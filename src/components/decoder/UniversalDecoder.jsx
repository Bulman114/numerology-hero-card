import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Hash, Cpu, Code, Binary, Zap, Type, Repeat } from 'lucide-react';
import { analyzeInput } from '../../utils/decoder'; // Import the utility we just made

export default function UniversalDecoder() {
    const [input, setInput] = useState('');
    const [analysis, setAnalysis] = useState(null);

    useEffect(() => {
        if (!input) {
            setAnalysis(null);
            return;
        }
        const result = analyzeInput(input);
        setAnalysis(result);
    }, [input]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 min-h-screen">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4 tracking-tight">
                    Universal <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-primary">Decoder</span>
                </h1>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    Enter names, dates, numbers, specialized codes, or unknown patterns.
                    The system will analyze structure, mathematical properties, and esoteric resonance.
                </p>
            </div>

            {/* Input Console */}
            <div className="max-w-3xl mx-auto mb-12 relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="text-accent-teal" size={24} />
                </div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter any sequence to decode..."
                    className="w-full pl-14 pr-6 py-6 rounded-2xl bg-bg-card border-2 border-border-default text-2xl font-mono text-text-primary focus:outline-none focus:border-accent-teal/50 focus:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all placeholder:text-text-muted/50"
                    autoFocus
                />

                {analysis && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-bg-elevated border border-border-subtle text-xs font-mono text-accent-teal uppercase tracking-widest">
                        {analysis.type} Detected
                    </div>
                )}
            </div>

            {/* Results Grid */}
            <AnimatePresence mode="wait">
                {analysis && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {/* 1. Core Structure */}
                        <motion.div variants={itemVariants} className="glass-card p-6 border-l-4 border-l-accent-primary">
                            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-muted mb-4">
                                <Cpu size={16} /> Structure
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-border-subtle pb-2">
                                    <span className="text-text-secondary">Length</span>
                                    <span className="font-mono text-text-primary">{analysis.length} chars</span>
                                </div>
                                <div className="flex justify-between border-b border-border-subtle pb-2">
                                    <span className="text-text-secondary">Classification</span>
                                    <span className="font-mono text-text-primary">{analysis.type}</span>
                                </div>
                                <div className="flex justify-between border-b border-border-subtle pb-2">
                                    <span className="text-text-secondary">Cleaned Input</span>
                                    <span className="font-mono text-accent-primary">{analysis.clean || 'N/A'}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* 2. Numerological Resonance */}
                        <motion.div variants={itemVariants} className="glass-card p-6 border-l-4 border-l-accent-teal">
                            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-muted mb-4">
                                <Zap size={16} /> Resonance
                            </h3>
                            <div className="flex flex-col items-center justify-center py-2">
                                <div className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-accent-teal">
                                    {analysis.gematria?.reduction || 0}
                                </div>
                                {analysis.gematria?.isMaster && (
                                    <span className="master-badge mt-2">Master Vibration</span>
                                )}
                                <div className="mt-4 w-full flex justify-between text-xs font-mono text-text-secondary">
                                    <span>SUM: {analysis.gematria?.sum}</span>
                                    <span>ROOT: {analysis.gematria?.reduction}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. Mathematical Properties (Conditional) */}
                        {analysis.math && (
                            <motion.div variants={itemVariants} className="glass-card p-6 border-l-4 border-l-accent-gold">
                                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-muted mb-4">
                                    <Hash size={16} /> Math Props
                                </h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className={`p-2 rounded bg-bg-secondary text-center text-sm ${analysis.math.isPrime ? 'text-accent-gold border border-accent-gold/30' : 'text-text-muted opacity-50'}`}>
                                        Prime
                                    </div>
                                    <div className={`p-2 rounded bg-bg-secondary text-center text-sm ${analysis.math.isPerfectSquare ? 'text-accent-gold border border-accent-gold/30' : 'text-text-muted opacity-50'}`}>
                                        Square
                                    </div>
                                    <div className={`p-2 rounded bg-bg-secondary text-center text-sm ${analysis.math.isTriangular ? 'text-accent-gold border border-accent-gold/30' : 'text-text-muted opacity-50'}`}>
                                        Triangular
                                    </div>
                                    <div className={`p-2 rounded bg-bg-secondary text-center text-sm ${analysis.math.isFibonacci ? 'text-accent-gold border border-accent-gold/30' : 'text-text-muted opacity-50'}`}>
                                        Fibonacci
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* 4. Binary/Hex Representations */}
                        {analysis.representations && (
                            <motion.div variants={itemVariants} className="glass-card p-6 md:col-span-2 lg:col-span-1">
                                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-muted mb-4">
                                    <Binary size={16} /> Machine Code
                                </h3>
                                <div className="space-y-3 font-mono text-sm">
                                    <div>
                                        <div className="text-[10px] text-text-muted mb-1">BINARY</div>
                                        <div className="bg-bg-secondary p-2 rounded text-accent-teal break-all">
                                            {analysis.representations.binary}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <div className="text-[10px] text-text-muted mb-1">HEX</div>
                                            <div className="bg-bg-secondary p-2 rounded text-accent-primary">
                                                {analysis.representations.hex}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-text-muted mb-1">OCTAL</div>
                                            <div className="bg-bg-secondary p-2 rounded text-text-primary">
                                                {analysis.representations.octal}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* 5. Pattern Matches */}
                        {analysis.patterns.length > 0 && (
                            <motion.div variants={itemVariants} className="glass-card p-6 md:col-span-2">
                                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-muted mb-4">
                                    <Code size={16} /> Pattern Recognition
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {analysis.patterns.map((pat, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-bg-elevated border border-border-default">
                                            <div className="bg-accent-teal/10 text-accent-teal px-2 py-1 rounded text-xs font-bold uppercase whitespace-nowrap">
                                                {pat.type}
                                            </div>
                                            <div>
                                                <div className="font-mono font-bold text-text-primary">{pat.match}</div>
                                                <div className="text-sm text-text-secondary">{pat.meaning}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* 6. Frequency Analysis */}
                        <motion.div variants={itemVariants} className="glass-card p-6 lg:col-span-2">
                            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-muted mb-4">
                                <Repeat size={16} /> Signal Frequency
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(analysis.frequency.counts)
                                    .sort(([, a], [, b]) => b - a)
                                    .slice(0, 14) // Limit display
                                    .map(([char, count]) => (
                                        <div key={char} className="flex flex-col items-center justify-center w-12 h-16 bg-bg-secondary rounded-lg border border-border-subtle hover:border-accent-teal/50 transition-colors">
                                            <span className="text-lg font-bold text-text-primary">{char}</span>
                                            <span className="text-[10px] text-accent-teal font-mono">{count}x</span>
                                        </div>
                                    ))}
                                {Object.keys(analysis.frequency.counts).length > 14 && (
                                    <div className="flex items-center justify-center w-12 h-16 text-text-muted text-xs">...</div>
                                )}
                            </div>

                            {analysis.frequency.mostCommon.count > 0 && (
                                <div className="mt-4 pt-4 border-t border-border-subtle flex gap-6 text-sm">
                                    <div>
                                        <span className="text-text-muted mr-2">DOMINANT:</span>
                                        <span className="text-accent-primary font-bold">
                                            {analysis.frequency.mostCommon.chars.join(', ')} ({analysis.frequency.mostCommon.count})
                                        </span>
                                    </div>
                                    {analysis.frequency.missingDigits && analysis.frequency.missingDigits.length > 0 && (
                                        <div>
                                            <span className="text-text-muted mr-2">MISSING:</span>
                                            <span className="text-text-secondary font-mono">
                                                {analysis.frequency.missingDigits.join(' ')}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
