import React, { useState } from 'react';
import { Download, FileImage, FileText, FileJson, Share2 } from 'lucide-react';
import Modal from '../ui/Modal';
import ShareButtons from './ShareButtons';
import { exportToPNG, exportToPDF, exportToJSON } from '../../utils/export';

const ExportModal = ({ isOpen, onClose, profile, cardRef }) => {
    const [isExporting, setIsExporting] = useState(false);
    const [exportType, setExportType] = useState(null);
    const [activeTab, setActiveTab] = useState('export'); // 'export' or 'share'

    if (!profile) return null;

    const filename = `${profile.firstName}-${profile.lastName}-hero-card`;

    const handleExport = async (type) => {
        setIsExporting(true);
        setExportType(type);

        try {
            switch (type) {
                case 'png':
                    if (cardRef?.current) {
                        await exportToPNG(cardRef.current, `${filename}.png`);
                    }
                    break;
                case 'pdf':
                    if (cardRef?.current) {
                        await exportToPDF(cardRef.current, `${filename}.pdf`);
                    }
                    break;
                case 'json':
                    exportToJSON([profile], `${filename}.json`);
                    break;
            }
        } catch (error) {
            console.error('Export failed:', error);
        }

        setIsExporting(false);
        setExportType(null);
    };

    const exportOptions = [
        {
            type: 'png',
            label: 'PNG Image',
            description: 'High-resolution image for sharing',
            icon: FileImage,
            color: 'text-accent-teal',
        },
        {
            type: 'pdf',
            label: 'PDF Document',
            description: 'Printable document format',
            icon: FileText,
            color: 'text-accent-primary',
        },
        {
            type: 'json',
            label: 'JSON Data',
            description: 'Backup profile data',
            icon: FileJson,
            color: 'text-accent-gold',
        },
    ];

    const tabs = [
        { id: 'export', label: 'Download', icon: Download },
        { id: 'share', label: 'Share', icon: Share2 },
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Export & Share">
            <div className="space-y-6">
                {/* Tab Navigation */}
                <div className="flex gap-2 p-1 bg-bg-secondary rounded-xl">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg
                                font-display text-sm font-medium transition-all
                                ${activeTab === tab.id
                                    ? 'bg-bg-elevated text-text-primary shadow-md'
                                    : 'text-text-muted hover:text-text-secondary'
                                }
                            `}
                        >
                            <tab.icon size={16} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Export Tab */}
                {activeTab === 'export' && (
                    <div className="space-y-3">
                        {exportOptions.map((option) => (
                            <button
                                key={option.type}
                                onClick={() => handleExport(option.type)}
                                disabled={isExporting}
                                className={`
                                    w-full flex items-center gap-4 p-4 rounded-xl
                                    bg-bg-secondary border border-border-default
                                    hover:border-accent-teal/50 hover:bg-bg-elevated
                                    transition-all text-left
                                    ${isExporting && exportType === option.type ? 'bg-bg-elevated' : ''}
                                `}
                            >
                                <option.icon className={`w-8 h-8 ${option.color}`} />
                                <div className="flex-1">
                                    <div className="font-display font-medium text-text-primary">
                                        {option.label}
                                    </div>
                                    <div className="text-sm text-text-muted">
                                        {option.description}
                                    </div>
                                </div>
                                {isExporting && exportType === option.type ? (
                                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-accent-teal border-t-transparent" />
                                ) : (
                                    <Download className="w-5 h-5 text-text-muted" />
                                )}
                            </button>
                        ))}
                    </div>
                )}

                {/* Share Tab */}
                {activeTab === 'share' && (
                    <ShareButtons profile={profile} onClose={onClose} />
                )}
            </div>
        </Modal>
    );
};

export default ExportModal;
