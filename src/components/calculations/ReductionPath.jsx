import React from 'react';
import { motion } from 'framer-motion';

const ReductionPath = ({ letterValues, sum, final, isMaster, title = 'Name Breakdown' }) => {
    if (!letterValues || letterValues.length === 0) {
        return <div className="text-gray-500 text-center">No data available</div>;
    }

    return (
        <div className="space-y-6">
            <h4 className="text-lg font-semibold text-center">{title}</h4>

            {/* Letter-Value Grid */}
            <div className="overflow-x-auto">
                <table className="mx-auto border-collapse">
                    <thead>
                        <tr>
                            {letterValues.map((lv, idx) => (
                                <motion.th
                                    key={idx}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="px-3 py-2 text-2xl font-mono uppercase bg-gray-100 border"
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
                                    className="px-3 py-2 text-xl font-mono text-center border text-lifepath-7 font-bold"
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
                className="text-center"
            >
                <div className="text-gray-500">Sum of all values:</div>
                <div className="text-3xl font-mono font-bold">
                    {letterValues.map(lv => lv.value).join(' + ')} = {sum}
                </div>
            </motion.div>

            {/* Reduction Arrow */}
            <div className="text-center text-2xl text-gray-400">↓</div>

            {/* Final Result */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
            >
                <div className="text-sm text-gray-600 mb-2">Reduced to:</div>
                <div className="text-6xl font-bold text-lifepath-7">
                    {final}
                    {isMaster && <span className="text-3xl ml-2">⚡</span>}
                </div>
                {isMaster && (
                    <div className="text-sm text-purple-600 mt-2 font-medium">
                        Master Number
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default ReductionPath;
