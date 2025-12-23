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
            <div className="flex gap-1 border-b border-gray-200 overflow-x-auto" role="tablist">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        role="tab"
                        aria-selected={activeTab === idx}
                        aria-controls={`tabpanel-${idx}`}
                        onClick={() => handleTabChange(idx)}
                        className={`
              relative px-4 py-2 font-medium transition-colors whitespace-nowrap
              ${activeTab === idx
                                ? 'text-lifepath-7'
                                : 'text-gray-600 hover:text-gray-900'
                            }
            `}
                    >
                        <span className="flex items-center gap-2">
                            {tab.icon && <tab.icon size={18} />}
                            {tab.label}
                        </span>

                        {activeTab === idx && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-lifepath-7"
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
