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
        <div className="space-y-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-display font-medium text-center text-text-primary">{title}</h4>

            {/* Initial Components */}
            {/* Initial Components */}
            <div className="flex items-center justify-center gap-3 flex-wrap p-6 bg-black/20 rounded-2xl border border-white/5">
                {components.map((item, idx) => (
                    <React.Fragment key={idx}>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="w-12 h-12 flex items-center justify-center text-2xl font-mono font-bold bg-white/10 border border-white/10 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.05)] text-text-primary"
                        >
                            {item}
                        </motion.div>
                        {idx < components.length - 1 && (
                            <span className="text-xl text-text-muted opacity-50">+</span>
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
                        <div className="text-accent-teal/50 text-xl my-2">↓</div>
                        <div
                            className={`
                inline-block text-4xl font-bold font-display px-6 py-3 rounded-2xl
                transition-all duration-300
                ${idx === currentStep
                                    ? 'bg-accent-teal text-bg-charcoal shadow-[0_0_20px_rgba(115,210,222,0.4)]'
                                    : idx < currentStep
                                        ? 'bg-white/10 text-text-muted border border-white/5'
                                        : 'bg-white/5 text-text-muted/50 border border-white/5'
                                }
              `}
                        >
                            {step}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Final Result */}
            {/* Final Result */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                    scale: currentStep === steps.length - 1 ? 1.1 : 0.9,
                    opacity: currentStep === steps.length - 1 ? 1 : 0.5,
                }}
                className="text-center pt-8 border-t border-white/10 mt-8"
            >
                <div className="text-sm font-bold uppercase tracking-widest text-text-muted mb-3">Final Result</div>
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
