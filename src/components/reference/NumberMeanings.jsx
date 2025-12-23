import React from 'react';
import { getNumberMeaning, getAllNumbers } from '../../data/numberMeanings';
import { getEsotericData } from '../../data/esotericData';
import Accordion from '../ui/Accordion';

const NumberMeanings = () => {
    const numbers = getAllNumbers();

    return (
        <div className="space-y-4">
            <p className="text-gray-600 mb-6">
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
                                <span className="flex items-center gap-3">
                                    <span
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                                        style={{ backgroundColor: esoteric.color }}
                                    >
                                        {num}
                                    </span>
                                    <span>
                                        {meaning.keywords.join(', ')}
                                        {meaning.isMaster && (
                                            <span className="ml-2 text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded">
                                                Master
                                            </span>
                                        )}
                                    </span>
                                </span>
                            }
                        >
                            <div className="space-y-4">
                                {/* Description */}
                                <p className="text-gray-700">{meaning.description}</p>

                                {/* Life Purpose */}
                                <div>
                                    <h5 className="font-semibold text-sm text-gray-600 mb-1">Life Purpose</h5>
                                    <p className="text-gray-800">{meaning.lifePurpose}</p>
                                </div>

                                {/* Strengths */}
                                <div>
                                    <h5 className="font-semibold text-sm text-green-700 mb-1">Strengths</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {meaning.strengths.map((s, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-green-50 text-green-700 text-sm rounded"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Challenges */}
                                <div>
                                    <h5 className="font-semibold text-sm text-orange-700 mb-1">Challenges</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {meaning.challenges.map((c, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-orange-50 text-orange-700 text-sm rounded"
                                            >
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Shadow Side */}
                                <div>
                                    <h5 className="font-semibold text-sm text-gray-600 mb-1">Shadow Side</h5>
                                    <p className="text-gray-700 italic">{meaning.shadowSide}</p>
                                </div>

                                {/* Careers */}
                                <div>
                                    <h5 className="font-semibold text-sm text-blue-700 mb-1">Ideal Careers</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {meaning.careers.map((c, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded"
                                            >
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Esoteric */}
                                <div className="pt-3 border-t">
                                    <h5 className="font-semibold text-sm text-purple-700 mb-2">Esoteric Correspondences</h5>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div><span className="text-gray-500">Tarot:</span> {esoteric.tarot}</div>
                                        <div><span className="text-gray-500">Planet:</span> {esoteric.planet}</div>
                                        <div><span className="text-gray-500">Element:</span> {esoteric.element}</div>
                                        <div><span className="text-gray-500">Gemstone:</span> {esoteric.gemstone}</div>
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
