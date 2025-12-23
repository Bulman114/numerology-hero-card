import React from 'react';
import { getNumberMeaning, getAllNumbers } from '../../data/numberMeanings';
import { getEsotericData } from '../../data/esotericData';
import Accordion from '../ui/Accordion';

const NumberMeanings = () => {
    const numbers = getAllNumbers();

    return (
        <div className="space-y-4">
            <p className="text-text-muted mb-6 leading-relaxed text-sm">
                Each number from 1-9 and the Master Numbers (11, 22, 33) has unique meanings and characteristics.
                Click on any number to explore its full interpretation.
            </p>

            <Accordion allowMultiple>
                {numbers.map((num, idx) => {
                    const meaning = getNumberMeaning(num);
                    const esoteric = getEsotericData(num);

                    return (
                        <Accordion.Item
                            key={num}
                            index={idx}
                            title={
                                <span className="flex items-center gap-4">
                                    <span
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                        style={{ backgroundColor: esoteric.color, textShadow: '0 0 5px rgba(0,0,0,0.5)' }}
                                    >
                                        {num}
                                    </span>
                                    <span className="flex-1">
                                        <span className="block text-accent-primary text-xs font-bold uppercase tracking-widest mb-0.5">
                                            {meaning.keywords[0]}
                                        </span>
                                        <span className="text-text-secondary text-sm">
                                            {meaning.keywords.slice(1).join(', ')}
                                        </span>
                                    </span>
                                    {meaning.isMaster && (
                                        <span className="hidden sm:inline-block ml-2 text-[10px] font-bold px-2 py-0.5 bg-accent-gold/20 text-accent-gold border border-accent-gold/30 rounded uppercase tracking-wider">
                                            Master
                                        </span>
                                    )}
                                </span>
                            }
                        >
                            <div className="space-y-6">
                                {/* Description */}
                                <p className="text-text-secondary leading-relaxed text-sm">{meaning.description}</p>

                                {/* Life Purpose */}
                                <div>
                                    <h5 className="font-bold text-xs uppercase tracking-widest text-text-muted mb-2">Life Purpose</h5>
                                    <p className="text-text-primary text-sm">{meaning.lifePurpose}</p>
                                </div>

                                {/* Strengths */}
                                <div>
                                    <h5 className="font-bold text-xs uppercase tracking-widest text-accent-teal mb-3">Strengths</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {meaning.strengths.map((s, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-medium rounded-lg"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Challenges */}
                                <div>
                                    <h5 className="font-bold text-xs uppercase tracking-widest text-red-300 mb-3">Challenges</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {meaning.challenges.map((c, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-medium rounded-lg"
                                            >
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Shadow Side */}
                                <div>
                                    <h5 className="font-bold text-xs uppercase tracking-widest text-text-muted mb-2">Shadow Side</h5>
                                    <p className="text-text-secondary text-sm italic border-l-2 border-white/10 pl-3">{meaning.shadowSide}</p>
                                </div>

                                {/* Careers */}
                                <div>
                                    <h5 className="font-bold text-xs uppercase tracking-widest text-blue-300 mb-3">Ideal Careers</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {meaning.careers.map((c, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-blue-400/10 border border-blue-400/20 text-blue-300 text-xs font-medium rounded-lg"
                                            >
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Esoteric */}
                                <div className="pt-4 border-t border-white/10">
                                    <h5 className="font-bold text-xs uppercase tracking-widest text-accent-primary mb-3">Esoteric Correspondences</h5>
                                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                                        <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-text-muted">Tarot</span> <span className="text-text-primary text-right">{esoteric.tarot}</span></div>
                                        <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-text-muted">Planet</span> <span className="text-text-primary text-right">{esoteric.planet}</span></div>
                                        <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-text-muted">Element</span> <span className="text-text-primary text-right">{esoteric.element}</span></div>
                                        <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-text-muted">Gemstone</span> <span className="text-text-primary text-right">{esoteric.gemstone}</span></div>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default NumberMeanings;
