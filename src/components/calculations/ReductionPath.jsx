import React from 'react';
import { motion } from 'framer-motion';

const ReductionPath = ({ letterValues, sum, final, isMaster, title = 'Name Breakdown' }) => {
    if (!letterValues || letterValues.length === 0) {
        return <div className="text-gray-500 text-center">No data available</div>;
    }

    return (
        <div className="space-y-8">
            <h4 className="text-lg font-display font-medium text-center text-text-primary">{title}</h4>

            {/* Letter-Value Grid */}
            <div className="overflow-x-auto scroller-none">
                <table className="mx-auto border-separate border-spacing-2">
                    <thead>
                        <tr>
                            {letterValues.map((lv, idx) => (
                                <motion.th
                                    key={idx}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="px-4 py-3 text-xl font-mono uppercase bg-white/5 border border-white/5 rounded-t-lg text-text-secondary"
                                >
                                    {lv.letter}
                                </motion.th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {letterValues.map((lv, idx) => (
                                <motion.td
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 + 0.2 }}
                                    className="px-4 py-3 text-xl font-mono text-center bg-black/20 border border-white/5 rounded-b-lg text-accent-teal font-bold shadow-inner"
                                >
                                    {lv.value}
                                </motion.td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Sum Display */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center p-4 bg-accent-primary/5 rounded-xl border border-accent-primary/10 max-w-md mx-auto"
            >
                <div className="text-text-muted text-xs uppercase tracking-widest mb-1">Sum of all values</div>
                <div className="text-2xl font-mono font-bold text-text-primary">
                    {letterValues.map(lv => lv.value).join(' + ')} = <span className="text-accent-primary">{sum}</span>
                </div>
            </motion.div>

            {/* Reduction Arrow */}
            <div className="text-center text-2xl text-text-muted/50 my-2">↓</div>

            {/* Final Result */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
            >
                <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Reduced to</div>
                <div className="text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-2xl">
                    {final}
                    {isMaster && <span className="text-4xl ml-2 text-accent-gold align-top">⚡</span>}
                </div>
                {isMaster && (
                    <div className="text-xs text-accent-gold mt-2 font-bold uppercase tracking-widest border border-accent-gold/20 bg-accent-gold/10 inline-block px-3 py-1 rounded-full">
                        Master Number
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default ReductionPath;
