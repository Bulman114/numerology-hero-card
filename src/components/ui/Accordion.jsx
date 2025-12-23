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
        <div className="border border-gray-200 rounded-md overflow-hidden">
            <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                aria-expanded={isOpen}
            >
                <span className="font-medium flex items-center gap-2">
                    {icon && <span>{icon}</span>}
                    {title}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 py-3 bg-white border-t border-gray-100">
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
