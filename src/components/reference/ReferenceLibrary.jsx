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

            <div className="bg-bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="bg-black/20 border-b border-white/5 px-8 py-6">
                    <h1 className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-accent-teal/10 text-accent-teal">
                            <Book size={24} />
                        </div>
                        Reference Library
                    </h1>
                    <p className="text-text-muted mt-2 ml-14 text-sm font-light tracking-wide">
                        Explore the deeper meanings, ancient methods, and esoteric correspondences
                    </p>
                </div>

                <div className="p-6 md:p-8">
                    <Tabs tabs={tabs} />
                </div>
            </div>
        </div>
    );
};

export default ReferenceLibrary;
