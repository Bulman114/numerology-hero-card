import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Hash, Cpu, Code, Binary, Zap, Type, Repeat, Eye, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { analyzeInput } from '../../utils/decoder';

export default function UniversalDecoder() {
    const [input, setInput] = useState('');
    const [analysis, setAnalysis] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

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
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Eye },
        { id: 'patterns', label: 'Patterns & Words', icon: Layers },
        { id: 'math', label: 'Mathematics', icon: Hash },
        { id: 'numerology', label: 'Esoteric', icon: Sparkles },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6 min-h-screen">
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-2 tracking-tight">
                    Universal <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-primary">Decoder</span>
                </h1>
                <p className="text-text-secondary text-sm max-w-xl mx-auto">
                    Advanced pattern recognition engine. Detects structure, mathematical properties, hidden anagrams, and esoteric resonance.
                </p>
            </div>

            {/* Input Console */}
            <div className="max-w-3xl mx-auto mb-8 relative group">
                <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-transparent via-accent-teal to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity" />
                <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Search className="text-accent-teal" size={20} />
                    </div>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter sequence (e.g. 1337, dates, text)..."
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-bg-card border border-border-default text-xl font-mono text-text-primary focus:outline-none focus:border-accent-teal/50 transition-all placeholder:text-text-muted/40 shadow-inner"
                        autoFocus
                    />
                    {analysis && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-xs font-bold text-accent-teal uppercase tracking-wider">
                                {analysis.type}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Analysis Dashboard */}
            <AnimatePresence mode="wait">
                {analysis && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="space-y-6"
                    >
                        {/* Tab Navigation */}
                        <div className="flex justify-center gap-2 mb-6 overflow-x-auto pb-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap
                                        ${activeTab === tab.id
                                            ? 'bg-bg-elevated text-accent-teal shadow-lg border border-accent-teal/20'
                                            : 'text-text-muted hover:text-text-primary hover:bg-bg-elevated/50'}
                                    `}
                                >
                                    <tab.icon size={16} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* CONTENT AREA */}
                        <div className="min-h-[400px]">

                            {/* OVERVIEW TAB */}
                            {activeTab === 'overview' && (
                                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Primary Stats */}
                                    <motion.div variants={itemVariants} className="glass-card p-6 border-t-4 border-t-accent-primary lg:col-span-2">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4 flex items-center gap-2">
                                            <Cpu size={16} /> Signal Analysis
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div className="p-3 bg-bg-secondary rounded-lg">
                                                <div className="text-[10px] text-text-muted uppercase">Length</div>
                                                <div className="text-xl font-mono text-text-primary">{analysis.length}</div>
                                            </div>
                                            <div className="p-3 bg-bg-secondary rounded-lg">
                                                <div className="text-[10px] text-text-muted uppercase">Alpha / Numeric</div>
                                                <div className="text-xl font-mono text-text-primary">
                                                    {analysis.isAlpha ? 'Alpha' : analysis.isNumeric ? 'Numeric' : 'Mixed'}
                                                </div>
                                            </div>
                                            <div className="p-3 bg-bg-secondary rounded-lg">
                                                <div className="text-[10px] text-text-muted uppercase">Cleaned</div>
                                                <div className="text-lg font-mono text-accent-primary truncate" title={analysis.clean}>
                                                    {analysis.clean || '-'}
                                                </div>
                                            </div>
                                            <div className="p-3 bg-bg-secondary rounded-lg">
                                                <div className="text-[10px] text-text-muted uppercase">Root Sum</div>
                                                <div className="text-xl font-mono text-accent-teal">{analysis.gematria?.reduction}</div>
                                            </div>
                                        </div>

                                        {/* Breakdown Display */}
                                        {analysis.breakdown && (
                                            <div className="mt-6 pt-6 border-t border-border-subtle">
                                                <h4 className="text-xs font-bold uppercase text-text-muted mb-3">Component Breakdown</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {analysis.breakdown.map((item, idx) => (
                                                        <div key={idx} className="flex flex-col px-4 py-2 bg-bg-elevated rounded-lg border border-border-default">
                                                            <span className="text-[10px] text-accent-teal uppercase tracking-wider">{item.label}</span>
                                                            <span className="font-mono text-lg text-text-primary">{item.value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Quick Math/Props */}
                                    <motion.div variants={itemVariants} className="glass-card p-6 border-t-4 border-t-accent-gold">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4 flex items-center gap-2">
                                            <ShieldCheck size={16} /> Properties
                                        </h3>
                                        <div className="space-y-2">
                                            {analysis.math && (
                                                <>
                                                    <div className={`flex justify-between items-center p-2 rounded ${analysis.math.isPrime ? 'bg-accent-gold/10 text-accent-gold' : 'text-text-muted'}`}>
                                                        <span>Prime Number</span>
                                                        {analysis.math.isPrime && <Zap size={14} />}
                                                    </div>
                                                    <div className={`flex justify-between items-center p-2 rounded ${analysis.math.isFibonacci ? 'bg-accent-gold/10 text-accent-gold' : 'text-text-muted'}`}>
                                                        <span>Fibonacci Sequence</span>
                                                        {analysis.math.isFibonacci && <Zap size={14} />}
                                                    </div>
                                                </>
                                            )}
                                            {analysis.patterns.length > 0 && (
                                                <div className="p-2 bg-accent-teal/10 text-accent-teal rounded flex justify-between items-center">
                                                    <span>{analysis.patterns.length} Pattern(s) Detected</span>
                                                    <Eye size={14} />
                                                </div>
                                            )}
                                            {analysis.anagrams.length > 0 && (
                                                <div className="p-2 bg-accent-primary/10 text-accent-primary rounded flex justify-between items-center">
                                                    <span>{analysis.anagrams.length} Hidden Word(s)</span>
                                                    <Type size={14} />
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* PATTERNS & WORDS TAB */}
                            {activeTab === 'patterns' && (
                                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Pattern List */}
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted">Detected Patterns</h3>
                                        {analysis.patterns.length === 0 ? (
                                            <div className="p-8 text-center border border-dashed border-border-default rounded-xl text-text-muted">
                                                No specific patterns detected.
                                            </div>
                                        ) : (
                                            analysis.patterns.map((pat, idx) => (
                                                <motion.div key={idx} variants={itemVariants} className="p-4 bg-bg-card rounded-xl border border-border-default flex gap-4 items-start">
                                                    <div className="p-2 bg-accent-teal/10 rounded-lg text-accent-teal">
                                                        <Code size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-text-primary">{pat.match}</div>
                                                        <div className="text-xs text-accent-teal uppercase tracking-wide mb-1">{pat.type}</div>
                                                        <div className="text-sm text-text-secondary">{pat.meaning}</div>
                                                    </div>
                                                </motion.div>
                                            ))
                                        )}
                                    </div>

                                    {/* Anagrams / Hidden Words */}
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted">Hidden Words (Anagrams)</h3>
                                        {analysis.anagrams.length === 0 ? (
                                            <div className="p-8 text-center border border-dashed border-border-default rounded-xl text-text-muted">
                                                No hidden power words found in this sequence.
                                            </div>
                                        ) : (
                                            <div className="flex flex-wrap gap-2">
                                                {analysis.anagrams.map((word, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        variants={itemVariants}
                                                        className="px-3 py-1 bg-bg-elevated border border-border-accent rounded-full text-accent-primary font-bold text-sm"
                                                    >
                                                        {word}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Frequency Chart */}
                                        <div className="mt-8">
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4">Signal Frequency</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {Object.entries(analysis.frequency.counts)
                                                    .sort(([, a], [, b]) => b - a)
                                                    .slice(0, 10)
                                                    .map(([char, count]) => (
                                                        <div key={char} className="flex flex-col items-center p-2 rounded bg-bg-secondary w-12 border border-border-subtle">
                                                            <span className="font-bold">{char}</span>
                                                            <span className="text-xs text-text-muted">{count}</span>
                                                            <div className="w-full h-1 bg-accent-teal/20 mt-1 rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full bg-accent-teal"
                                                                    style={{ width: `${Math.min(100, (count / analysis.frequency.mostCommon.count) * 100)}%` }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* MATH TAB */}
                            {activeTab === 'math' && (
                                <motion.div variants={containerVariants} className="space-y-6">
                                    {!analysis.math ? (
                                        <div className="p-12 text-center text-text-muted">
                                            Enter a numeric value to see mathematical analysis.
                                        </div>
                                    ) : (
                                        <>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                <div className="p-4 bg-bg-card rounded-xl border border-border-default">
                                                    <div className="text-xs text-text-muted uppercase">Parity</div>
                                                    <div className="text-xl font-mono text-text-primary">{analysis.math.parity}</div>
                                                </div>
                                                <div className="p-4 bg-bg-card rounded-xl border border-border-default">
                                                    <div className="text-xs text-text-muted uppercase">Sum of Digits</div>
                                                    <div className="text-xl font-mono text-text-primary">{analysis.math.sumOfDigits}</div>
                                                </div>
                                                <div className="p-4 bg-bg-card rounded-xl border border-border-default">
                                                    <div className="text-xs text-text-muted uppercase">Product</div>
                                                    <div className="text-xl font-mono text-text-primary truncate" title={analysis.math.productOfDigits}>
                                                        {analysis.math.productOfDigits || 'Overflow'}
                                                    </div>
                                                </div>
                                                <div className="p-4 bg-bg-card rounded-xl border border-border-default">
                                                    <div className="text-xs text-text-muted uppercase">Binary Bits</div>
                                                    <div className="text-xl font-mono text-text-primary">{analysis.representations.binary.length}</div>
                                                </div>
                                            </div>

                                            <div className="glass-card p-6">
                                                <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4">Representations</h3>
                                                <div className="space-y-4 font-mono text-sm">
                                                    <div className="grid grid-cols-[80px_1fr] gap-4 items-center">
                                                        <span className="text-text-secondary text-right">BINARY</span>
                                                        <div className="p-3 bg-bg-primary rounded-lg text-accent-teal break-all">{analysis.representations.binary}</div>
                                                    </div>
                                                    <div className="grid grid-cols-[80px_1fr] gap-4 items-center">
                                                        <span className="text-text-secondary text-right">HEX</span>
                                                        <div className="p-3 bg-bg-primary rounded-lg text-accent-primary break-all">{analysis.representations.hex}</div>
                                                    </div>
                                                    <div className="grid grid-cols-[80px_1fr] gap-4 items-center">
                                                        <span className="text-text-secondary text-right">OCTAL</span>
                                                        <div className="p-3 bg-bg-primary rounded-lg text-text-primary break-all">{analysis.representations.octal}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            )}

                            {/* NUMEROLOGY TAB */}
                            {activeTab === 'numerology' && (
                                <motion.div variants={containerVariants} className="text-center py-8">
                                    <div className="inline-block relative">
                                        <div className="absolute inset-0 bg-accent-primary/20 blur-3xl rounded-full" />
                                        <div className="relative text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-accent-primary drop-shadow-2xl">
                                            {analysis.gematria?.reduction || 0}
                                        </div>
                                    </div>

                                    <div className="mt-8 max-w-md mx-auto grid grid-cols-2 gap-8 text-left">
                                        <div className="p-4 bg-bg-card rounded-xl border border-border-default">
                                            <div className="text-xs text-text-muted uppercase mb-1">Gematria Sum</div>
                                            <div className="text-2xl font-mono font-bold text-text-primary">{analysis.gematria?.sum}</div>
                                            <div className="text-xs text-text-secondary mt-2">Total value of all characters</div>
                                        </div>
                                        <div className="p-4 bg-bg-card rounded-xl border border-border-default">
                                            <div className="text-xs text-text-muted uppercase mb-1">Root Vibrations</div>
                                            <div className="text-2xl font-mono font-bold text-accent-primary">{analysis.gematria?.reduction}</div>
                                            <div className="text-xs text-text-secondary mt-2">Reduction to single digit</div>
                                        </div>
                                    </div>

                                    {analysis.gematria?.isMaster && (
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="mt-8 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent-gold/20 border border-accent-gold text-accent-gold font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,209,102,0.3)]"
                                        >
                                            <Sparkles size={16} />
                                            Master Number Detected
                                        </motion.div>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
