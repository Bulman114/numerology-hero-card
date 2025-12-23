import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AccordionContext = createContext();

const Accordion = ({ children, allowMultiple = false, defaultOpen = [] }) => {
    const [openItems, setOpenItems] = useState(new Set(defaultOpen));

    const toggleItem = (index) => {
        setOpenItems((prev) => {
            const newSet = new Set(allowMultiple ? prev : []);
            if (prev.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem }}>
            <div className="space-y-2">
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child, { index })
                )}
            </div>
        </AccordionContext.Provider>
    );
};

const AccordionItem = ({ title, children, index, icon }) => {
    const { openItems, toggleItem } = useContext(AccordionContext);
    const isOpen = openItems.has(index);

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 transition-colors hover:border-white/20">
            <button
                onClick={() => toggleItem(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left group"
                aria-expanded={isOpen}
            >
                <span className="font-medium flex items-center gap-3 text-text-primary text-sm tracking-wide">
                    {icon && <span className="text-accent-teal">{icon}</span>}
                    {title}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-5 h-5 text-text-muted group-hover:text-accent-teal transition-colors" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden bg-black/20 border-t border-white/5"
                    >
                        <div className="px-5 py-4">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

Accordion.Item = AccordionItem;

export default Accordion;
