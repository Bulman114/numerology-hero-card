import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw } from 'lucide-react';
import Button from '../ui/Button';

const StepByStep = ({ components, steps, final, isMaster, title = 'Calculation' }) => {
    const [currentStep, setCurrentStep] = useState(-1);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setCurrentStep(-1);
        setIsAnimating(false);
    }, [components, steps]);

    const animate = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentStep(-1);

        let step = -1;
        const interval = setInterval(() => {
            step++;
            if (step >= steps.length) {
                clearInterval(interval);
                setIsAnimating(false);
                setCurrentStep(steps.length - 1);
                return;
            }
            setCurrentStep(step);
        }, 800);
    };

    const reset = () => {
        setCurrentStep(-1);
        setIsAnimating(false);
    };

    return (
        <div className="space-y-6">
            <h4 className="text-lg font-semibold text-center">{title}</h4>

            {/* Initial Components */}
            <div className="flex items-center justify-center gap-2 flex-wrap p-4 bg-gray-50 rounded-lg">
                {components.map((item, idx) => (
                    <React.Fragment key={idx}>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-2xl font-mono font-bold bg-white px-3 py-2 rounded shadow-sm"
                        >
                            {item}
                        </motion.div>
                        {idx < components.length - 1 && (
                            <span className="text-xl text-gray-400">+</span>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Reduction Steps */}
            <div className="space-y-3">
                {steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0.3, x: -10 }}
                        animate={{
                            opacity: idx <= currentStep ? 1 : 0.3,
                            x: 0,
                            scale: idx === currentStep ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                    >
                        <div className="text-gray-400 text-lg">↓</div>
                        <div
                            className={`
                inline-block text-3xl font-bold font-mono px-4 py-2 rounded-lg
                transition-all duration-300
                ${idx === currentStep
                                    ? 'bg-lifepath-7 text-white shadow-lg'
                                    : idx < currentStep
                                        ? 'bg-gray-100 text-gray-600'
                                        : 'bg-gray-50 text-gray-400'
                                }
              `}
                        >
                            {step}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Final Result */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                    scale: currentStep === steps.length - 1 ? 1.1 : 0.9,
                    opacity: currentStep === steps.length - 1 ? 1 : 0.5,
                }}
                className="text-center pt-6 border-t-2"
            >
                <div className="text-sm text-gray-600 mb-2">Final Result:</div>
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

            {/* Animation Controls */}
            <div className="flex justify-center gap-3 pt-4">
                <Button
                    onClick={animate}
                    disabled={isAnimating}
                    variant="primary"
                    icon={Play}
                >
                    {isAnimating ? 'Animating...' : 'Play'}
                </Button>
                <Button
                    onClick={reset}
                    disabled={isAnimating}
                    variant="secondary"
                    icon={RotateCcw}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default StepByStep;
