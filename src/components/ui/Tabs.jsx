import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ tabs, defaultTab = 0, onChange }) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleTabChange = (index) => {
        setActiveTab(index);
        if (onChange) {
            onChange(index);
        }
    };

    return (
        <div className="space-y-4">
            {/* Tab Headers */}
            <div className="flex gap-1 border-b border-white/10 overflow-x-auto scroller-none" role="tablist">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        role="tab"
                        aria-selected={activeTab === idx}
                        aria-controls={`tabpanel-${idx}`}
                        onClick={() => handleTabChange(idx)}
                        className={`
              relative px-6 py-3 font-medium transition-all whitespace-nowrap text-sm tracking-wide
              ${activeTab === idx
                                ? 'text-accent-teal'
                                : 'text-text-muted hover:text-text-primary'
                            }
            `}
                    >
                        <span className="flex items-center gap-2">
                            {tab.icon && <tab.icon size={16} className={activeTab === idx ? "text-accent-teal" : "opacity-70 group-hover:opacity-100"} />}
                            {tab.label}
                        </span>

                        {activeTab === idx && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-teal shadow-[0_0_10px_rgba(115,210,222,0.5)]"
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <motion.div
                key={activeTab}
                role="tabpanel"
                id={`tabpanel-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            >
                {tabs[activeTab].content}
            </motion.div>
        </div>
    );
};

export default Tabs;
