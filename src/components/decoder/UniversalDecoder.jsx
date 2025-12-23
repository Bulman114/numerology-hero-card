import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Hash, Cpu, Code, Binary, Zap, Type, Repeat, Eye, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { analyzeInput } from '../../utils/decoder';

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
        <div className="max-w-7xl mx-auto p-4 md:p-8 min-h-screen">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-3 tracking-tight">
                    Universal <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-primary">Decoder</span>
                </h1>
                <p className="text-text-secondary text-base max-w-2xl mx-auto">
                    Pattern Recognition Engine v2.0 • Gematria • Sacred Geometry • Linguistic Analysis
                </p>
            </div>

            {/* Input Console */}
            <div className="max-w-2xl mx-auto mb-10 relative group z-20">
                <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-transparent via-accent-teal to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity" />
                <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Search className="text-accent-teal" size={20} />
                    </div>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter sequence (e.g. 369, Matrix, 11:11)..."
                        className="w-full pl-12 pr-4 py-5 rounded-xl bg-bg-card border border-border-default text-2xl font-mono text-text-primary focus:outline-none focus:border-accent-teal/50 transition-all placeholder:text-text-muted/40 shadow-2xl"
                        autoFocus
                    />
                    {analysis && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            <span className="px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-xs font-bold text-accent-teal uppercase tracking-wider">
                                {analysis.type}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <AnimatePresence mode="wait">
                {analysis && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
                    >
                        {/* 1. PRIMARY: Gematria Card (Span 4) */}
                        <motion.div variants={itemVariants} className="lg:col-span-4 glass-card p-8 border-t-4 border-t-accent-primary relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Sparkles size={100} />
                            </div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6 flex items-center gap-2">
                                <Sparkles size={14} /> Core Vibration
                            </h3>
                            <div className="flex flex-col items-center justify-center py-4">
                                <div className="text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-accent-primary drop-shadow-lg">
                                    {analysis.gematria?.reduction || 0}
                                </div>
                                <div className="text-sm font-bold text-accent-primary uppercase tracking-widest mt-2">{analysis.gematria?.sum} Total Sum</div>

                                {analysis.gematria?.isMaster && (
                                    <div className="mt-6 px-4 py-1 rounded-full bg-accent-gold/20 border border-accent-gold text-accent-gold text-xs font-bold uppercase tracking-widest animate-pulse">
                                        Master Number Detected
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* 2. PRIMARY: Aura / Energy (Span 4) */}
                        <motion.div variants={itemVariants} className="lg:col-span-4 glass-card p-8 border-t-4 border-t-accent-secondary">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6 flex items-center gap-2">
                                <Zap size={14} /> Energy Signature
                            </h3>

                            {analysis.aura ? (
                                <div className="flex flex-col items-center justify-center py-4 text-center">
                                    <div
                                        className="w-24 h-24 rounded-full blur-2xl opacity-60 mb-4"
                                        style={{ backgroundColor: analysis.aura.hex }}
                                    />
                                    <h4 className="text-2xl font-bold text-text-primary mb-1">{analysis.aura.trait}</h4>
                                    <p className="text-sm text-text-secondary w-2/3 mx-auto">
                                        Resonates with the {analysis.aura.color} Ray frequency.
                                    </p>
                                </div>
                            ) : (
                                <div className="text-center text-text-muted py-8">
                                    No specific energy signature detected.
                                </div>
                            )}
                        </motion.div>

                        {/* 3. PRIMARY: Tech/Data (Span 4) */}
                        <motion.div variants={itemVariants} className="lg:col-span-4 glass-card p-8 border-t-4 border-t-accent-teal">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6 flex items-center gap-2">
                                <Binary size={14} /> System Analysis
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-bg-secondary rounded-lg">
                                    <span className="text-xs text-text-muted uppercase">Length</span>
                                    <span className="font-mono text-text-primary">{analysis.length || 0} chars</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-bg-secondary rounded-lg">
                                    <span className="text-xs text-text-muted uppercase">Format</span>
                                    <span className="font-mono text-accent-teal">{analysis.isAlpha ? 'ALPHA' : analysis.isNumeric ? 'NUMERIC' : 'MIXED'}</span>
                                </div>
                                {analysis.tech?.ascii && (
                                    <div className="p-3 bg-bg-secondary rounded-lg">
                                        <div className="text-xs text-text-muted uppercase mb-1">ASCII Block (First 10)</div>
                                        <div className="font-mono text-xs text-text-secondary tracking-tighter break-all">
                                            {analysis.tech.ascii}
                                        </div>
                                    </div>
                                )}
                                {analysis.tech?.isHexColor && (
                                    <div className="flex items-center gap-4 p-2 rounded bg-bg-elevated">
                                        <div className="w-8 h-8 rounded border border-border-default" style={{ background: analysis.tech.hexPreview }} />
                                        <span className="font-mono text-sm">Color Detected</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* 4. COMPONENT BREAKDOWN (Full Width if exists) */}
                        {analysis.breakdown && (
                            <motion.div variants={itemVariants} className="lg:col-span-12 glass-card p-6 bg-bg-elevated/30">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">Structure Analysis</h3>
                                <div className="flex flex-wrap gap-4">
                                    {analysis.breakdown.map((item, idx) => (
                                        <div key={idx} className="flex-1 min-w-[150px] p-4 bg-bg-card rounded-lg border border-border-default">
                                            <div className="text-xs text-accent-teal uppercase tracking-wider mb-1">{item.label}</div>
                                            <div className="text-xl font-mono text-text-primary">{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}


                        {/* 5. PATTERN RECOGNITION (Span 6) */}
                        <motion.div variants={itemVariants} className="lg:col-span-6 glass-card p-6">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4 flex items-center gap-2">
                                <Layers size={14} /> Pattern Matrix
                            </h3>

                            <div className="space-y-3 min-h-[200px]">
                                {analysis.patterns.length > 0 ? (
                                    analysis.patterns.map((pat, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 bg-bg-secondary/50 rounded-lg border border-border-subtle hover:border-accent-teal/30 transition-colors">
                                            <div className="p-2 bg-accent-teal/10 rounded text-accent-teal">
                                                <Code size={16} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm text-text-primary">{pat.match}</div>
                                                <div className="text-xs text-text-secondary">{pat.meaning} <span className="opacity-50 mx-1">•</span> <span className="text-accent-teal">{pat.type}</span></div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-text-muted border border-dashed border-border-default rounded-lg">
                                        <Eye size={24} className="mb-2 opacity-30" />
                                        <span className="text-sm">No specific patterns detected</span>
                                    </div>
                                )}
                            </div>

                            {/* Anagrams Sub-section */}
                            {analysis.anagrams.length > 0 && (
                                <div className="mt-6 pt-4 border-t border-border-subtle">
                                    <h4 className="text-[10px] font-bold uppercase text-text-muted mb-3 flex gap-2 items-center">
                                        <Type size={12} /> Hidden Words Detected
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {analysis.anagrams.map((word, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-bg-elevated border border-border-default rounded text-xs font-mono text-accent-secondary">
                                                {word}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        {/* 6. MATHEMATICS (Span 6) */}
                        <motion.div variants={itemVariants} className="lg:col-span-6 glass-card p-6">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4 flex items-center gap-2">
                                <Hash size={14} /> Mathematical Properties
                            </h3>

                            {analysis.math ? (
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-3 bg-bg-elevated rounded-lg mb-4">
                                        <span className="text-xs text-text-muted uppercase">Analysis Target</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-accent-teal uppercase">{analysis.math.source}</span>
                                            <span className="font-mono font-bold">{analysis.math.value}</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className={`p-3 rounded border ${analysis.math.isPrime ? 'bg-accent-gold/10 border-accent-gold/30 text-accent-gold' : 'bg-bg-secondary border-border-subtle text-text-muted'}`}>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs font-bold uppercase">Prime</span>
                                                {analysis.math.isPrime && <Zap size={12} />}
                                            </div>
                                            <div className="text-lg font-mono">{analysis.math.isPrime ? 'YES' : 'NO'}</div>
                                        </div>
                                        <div className={`p-3 rounded border ${analysis.math.isFibonacci ? 'bg-accent-gold/10 border-accent-gold/30 text-accent-gold' : 'bg-bg-secondary border-border-subtle text-text-muted'}`}>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs font-bold uppercase">Fibonacci</span>
                                                {analysis.math.isFibonacci && <Zap size={12} />}
                                            </div>
                                            <div className="text-lg font-mono">{analysis.math.isFibonacci ? 'YES' : 'NO'}</div>
                                        </div>
                                        <div className="p-3 bg-bg-secondary rounded border border-border-subtle">
                                            <span className="text-xs text-text-muted uppercase">Digit Sum</span>
                                            <div className="text-lg font-mono text-text-primary">{analysis.math.sumOfDigits}</div>
                                        </div>
                                        <div className="p-3 bg-bg-secondary rounded border border-border-subtle">
                                            <span className="text-xs text-text-muted uppercase">Binary</span>
                                            <div className="text-xs font-mono text-text-secondary truncate pt-1">{analysis.representations.binary}</div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-text-muted border border-dashed border-border-default rounded-lg min-h-[200px]">
                                    <Hash size={24} className="mb-2 opacity-30" />
                                    <span className="text-sm">No mathematical data available</span>
                                </div>
                            )}
                        </motion.div>

                        {/* 7. FREQUENCY (Full Width) */}
                        <motion.div variants={itemVariants} className="lg:col-span-12 glass-card p-6">
                            <div className="flex justify-between items-end mb-4">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                                    <Repeat size={14} /> Frequency Distribution
                                </h3>
                                <div className="text-xs text-text-secondary">
                                    Most Common: <span className="text-accent-teal font-bold">{analysis.frequency.mostCommon.chars.join(', ')}</span> ({analysis.frequency.mostCommon.count})
                                </div>
                            </div>

                            <div className="flex items-end gap-1 h-24 w-full">
                                {Object.entries(analysis.frequency.counts)
                                    .sort(([, a], [, b]) => b - a)
                                    .slice(0, 24)
                                    .map(([char, count]) => (
                                        <div key={char} className="flex-1 flex flex-col items-center group">
                                            <div className="w-full bg-accent-teal/20 rounded-t-sm relative transition-all group-hover:bg-accent-teal/40" style={{ height: `${(count / analysis.frequency.mostCommon.count) * 100}%` }}>
                                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-bg-elevated text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border-default z-10">
                                                    {count}x
                                                </div>
                                            </div>
                                            <div className="text-[10px] text-text-muted mt-1 font-mono">{char}</div>
                                        </div>
                                    ))}
                            </div>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
