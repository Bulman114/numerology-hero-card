import React, { useState } from 'react';
import { Download, FileImage, FileText, FileJson, Link as LinkIcon, Check, Copy } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { exportToPNG, exportToPDF, exportToJSON } from '../../utils/export';

const ExportModal = ({ isOpen, onClose, profile, cardRef }) => {
    const [isExporting, setIsExporting] = useState(false);
    const [copied, setCopied] = useState(false);
    const [exportType, setExportType] = useState(null);

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

    const handleCopyLink = async () => {
        // Create shareable link with minimal profile data
        const shareData = {
            fn: profile.firstName,
            ln: profile.lastName,
            m: profile.birthdate.month,
            d: profile.birthdate.day,
            y: profile.birthdate.year,
        };

        const encoded = btoa(JSON.stringify(shareData));
        const shareUrl = `${window.location.origin}/?share=${encoded}`;

        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const exportOptions = [
        {
            type: 'png',
            label: 'PNG Image',
            description: 'High-resolution image for sharing',
            icon: FileImage,
            color: 'text-blue-600',
        },
        {
            type: 'pdf',
            label: 'PDF Document',
            description: 'Printable document format',
            icon: FileText,
            color: 'text-red-600',
        },
        {
            type: 'json',
            label: 'JSON Data',
            description: 'Backup profile data',
            icon: FileJson,
            color: 'text-green-600',
        },
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Export Card">
            <div className="space-y-6">
                {/* Export Options */}
                <div className="space-y-3">
                    <h4 className="font-semibold text-gray-700">Download As</h4>
                    {exportOptions.map((option) => (
                        <button
                            key={option.type}
                            onClick={() => handleExport(option.type)}
                            disabled={isExporting}
                            className={`
                w-full flex items-center gap-4 p-4 border rounded-lg
                hover:bg-gray-50 transition-colors text-left
                ${isExporting && exportType === option.type ? 'bg-gray-50' : ''}
              `}
                        >
                            <option.icon className={`w-8 h-8 ${option.color}`} />
                            <div className="flex-1">
                                <div className="font-medium">{option.label}</div>
                                <div className="text-sm text-gray-500">{option.description}</div>
                            </div>
                            {isExporting && exportType === option.type ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600" />
                            ) : (
                                <Download className="w-5 h-5 text-gray-400" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Share Link */}
                <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-700 mb-3">Quick Share</h4>
                    <Button
                        onClick={handleCopyLink}
                        variant="secondary"
                        fullWidth
                        icon={copied ? Check : copied ? Check : LinkIcon}
                    >
                        {copied ? 'Link Copied!' : 'Copy Shareable Link'}
                    </Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                        The link contains basic profile data for recreation
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default ExportModal;
