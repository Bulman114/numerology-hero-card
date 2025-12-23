import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Book, Hash, Info } from 'lucide-react';
import Button from '../ui/Button';
import Tabs from '../ui/Tabs';
import NumberMeanings from './NumberMeanings';
import MethodsGuide from './MethodsGuide';

const ReferenceLibrary = () => {
    const navigate = useNavigate();

    const tabs = [
        {
            label: 'Number Meanings',
            icon: Hash,
            content: <NumberMeanings />,
        },
        {
            label: 'Methods Guide',
            icon: Info,
            content: <MethodsGuide />,
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-6">
                <Button onClick={() => navigate(-1)} variant="ghost" icon={ArrowLeft}>
                    Back
                </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-bg-charcoal text-bg-cream px-6 py-4">
                    <h1 className="text-2xl font-display flex items-center gap-2">
                        <Book className="w-6 h-6" />
                        Reference Library
                    </h1>
                    <p className="text-sm opacity-80 mt-1">
                        Learn about numerology meanings, methods, and interpretations
                    </p>
                </div>

                <div className="p-6">
                    <Tabs tabs={tabs} />
                </div>
            </div>
        </div>
    );
};

export default ReferenceLibrary;
