import React, { useState } from 'react';
import { getNumberMeaning, getAllNumbers } from '../../data/numberMeanings';
import { getEsotericData } from '../../data/esotericData';
import { getLifePathProfile } from '../../data/lifePathProfiles';
import { getRotatedItems } from '../../utils/contentRotation';
import Accordion from '../ui/Accordion';

const NumberMeanings = () => {
    const numbers = getAllNumbers();
    const [expandedTabs, setExpandedTabs] = useState({});

    const setActiveTab = (numIdx, tab) => {
        setExpandedTabs(prev => ({ ...prev, [numIdx]: tab }));
    };

    return (
        <div className="space-y-4">
            <p className="text-text-muted mb-6 leading-relaxed text-sm">
                Each number from 1-9 and the Master Numbers (11, 22, 33) has unique meanings and characteristics.
                Click on any number to explore its full interpretation, including personality traits, career paths,
                relationships, and spiritual lessons.
            </p>

            <Accordion allowMultiple>
                {numbers.map((num, idx) => {
                    const meaning = getNumberMeaning(num);
                    const esoteric = getEsotericData(num);
                    const profile = getLifePathProfile(num);
                    const activeTab = expandedTabs[idx] || 'overview';

                    const tabs = [
                        { id: 'overview', label: 'Overview' },
                        { id: 'personality', label: 'Personality' },
                        { id: 'relationships', label: 'Relationships' },
                        { id: 'career', label: 'Career' },
                        { id: 'growth', label: 'Growth' },
                    ];

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
                                            {profile?.archetype || meaning.keywords[0]}
                                        </span>
                                        <span className="text-text-secondary text-sm">
                                            {meaning.keywords.join(' • ')}
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
                            {/* Tab Navigation */}
                            <div className="flex flex-wrap gap-1 mb-6 border-b border-white/10 pb-3">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(idx, tab.id)}
                                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${activeTab === tab.id
                                                ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30'
                                                : 'text-text-muted hover:text-text-secondary hover:bg-white/5'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="space-y-6">
                                {activeTab === 'overview' && (
                                    <>
                                        {/* Core Essence */}
                                        <p className="text-text-secondary leading-relaxed text-sm">
                                            {profile?.coreEssence || meaning.description}
                                        </p>

                                        {/* Keynote Wisdom */}
                                        {profile?.keynote && (
                                            <div className="bg-accent-primary/5 border border-accent-primary/20 rounded-xl p-4 space-y-3">
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-accent-primary">Keynote Wisdom</h5>
                                                <blockquote className="text-text-secondary text-sm italic border-l-2 border-accent-primary/40 pl-3">
                                                    "{profile.keynote.giftToWorld}"
                                                </blockquote>
                                                <p className="text-text-muted text-xs mt-2">
                                                    <strong className="text-text-secondary">Affirmation:</strong> {profile.keynote.affirmation}
                                                </p>
                                            </div>
                                        )}

                                        {/* Famous Examples */}
                                        {profile?.famousExamples && (
                                            <div>
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-accent-gold mb-3">Famous Examples</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {profile.famousExamples.map((ex, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1.5 bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-xs rounded-lg"
                                                            title={ex.context}
                                                        >
                                                            {ex.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

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
                                    </>
                                )}

                                {activeTab === 'personality' && (
                                    <>
                                        {/* Fundamental Traits */}
                                        {profile?.personality?.fundamental && (
                                            <div>
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-accent-teal mb-3">Core Traits</h5>
                                                <ul className="space-y-2">
                                                    {profile.personality.fundamental.map((trait, i) => (
                                                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                                                            <span className="text-accent-teal mt-1">•</span>
                                                            {trait}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Cognitive Style */}
                                        {profile?.personality?.cognitive && (
                                            <div>
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-blue-300 mb-3">Cognitive Style</h5>
                                                <ul className="space-y-2">
                                                    {profile.personality.cognitive.map((trait, i) => (
                                                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                                                            <span className="text-blue-300 mt-1">•</span>
                                                            {trait}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Shadow Aspects */}
                                        {profile?.personality?.shadow && (
                                            <div>
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-red-300 mb-3">Shadow Aspects</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {profile.personality.shadow.map((s, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-medium rounded-lg"
                                                        >
                                                            {s}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

                                {activeTab === 'relationships' && (
                                    <>
                                        {/* Romantic */}
                                        {profile?.relationships?.romantic && (
                                            <div>
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-pink-300 mb-3">Romantic Relationships</h5>
                                                <ul className="space-y-2 mb-4">
                                                    {profile.relationships.romantic.traits.map((trait, i) => (
                                                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                                                            <span className="text-pink-300 mt-1">♡</span>
                                                            {trait}
                                                        </li>
                                                    ))}
                                                </ul>
                                                {profile.relationships.romantic.bestWith && (
                                                    <p className="text-text-muted text-xs">
                                                        <strong>Best with:</strong> Life Paths {profile.relationships.romantic.bestWith.join(', ')}
                                                    </p>
                                                )}
                                                {profile.relationships.romantic.warning && (
                                                    <p className="text-red-300/70 text-xs mt-2 italic">
                                                        ⚠ {profile.relationships.romantic.warning}
                                                    </p>
                                                )}
                                            </div>
                                        )}

                                        {/* As Friend */}
                                        {profile?.relationships?.asFriend && (
                                            <div>
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-purple-300 mb-3">As a Friend</h5>
                                                <ul className="space-y-2">
                                                    {profile.relationships.asFriend.map((trait, i) => (
                                                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                                                            <span className="text-purple-300 mt-1">•</span>
                                                            {trait}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Compatibility */}
                                        {profile?.compatibility && (
                                            <div className="pt-4 border-t border-white/10">
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-accent-primary mb-3">Compatibility</h5>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3">
                                                        <div className="text-green-400 text-[10px] uppercase tracking-wide mb-2">Most Compatible</div>
                                                        {profile.compatibility.mostCompatible.map((c, i) => (
                                                            <div key={i} className="text-text-secondary text-xs mb-1">
                                                                <span className="text-green-400 font-bold">{c.number}</span> - {c.reason}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                                                        <div className="text-red-400 text-[10px] uppercase tracking-wide mb-2">Challenging</div>
                                                        {profile.compatibility.challenging.map((c, i) => (
                                                            <div key={i} className="text-text-secondary text-xs mb-1">
                                                                <span className="text-red-400 font-bold">{c.number}</span> - {c.reason}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
                                                        <div className="text-amber-400 text-[10px] uppercase tracking-wide mb-2">Complex</div>
                                                        {profile.compatibility.complex.map((c, i) => (
                                                            <div key={i} className="text-text-secondary text-xs mb-1">
                                                                <span className="text-amber-400 font-bold">{c.number}</span> - {c.reason}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

                                {activeTab === 'career' && (
                                    <>
                                        {/* Ideal Environments */}
                                        {profile?.career?.environments && (
                                            <div>
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-blue-300 mb-3">Ideal Environments</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {profile.career.environments.map((env, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 bg-blue-400/10 border border-blue-400/20 text-blue-300 text-xs font-medium rounded-lg"
                                                        >
                                                            {env}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Career Paths */}
                                        {profile?.career?.paths && (
                                            <div>
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-accent-teal mb-3">Career Paths</h5>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {profile.career.paths.map((path, i) => (
                                                        <div
                                                            key={i}
                                                            className="bg-accent-teal/5 border border-accent-teal/20 rounded-xl p-3"
                                                        >
                                                            <div className="text-accent-teal font-bold text-sm">{path.title}</div>
                                                            <div className="text-text-muted text-xs">{path.desc}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Work Style */}
                                        {profile?.career?.workStyle && (
                                            <div>
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-text-muted mb-3">Work Style</h5>
                                                <ul className="space-y-2">
                                                    {profile.career.workStyle.map((style, i) => (
                                                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                                                            <span className="text-accent-primary mt-1">•</span>
                                                            {style}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Money */}
                                        {profile?.career?.money && (
                                            <div className="pt-4 border-t border-white/10">
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-accent-gold mb-3">Financial Tendencies</h5>
                                                <ul className="space-y-2">
                                                    {profile.career.money.map((m, i) => (
                                                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                                                            <span className="text-accent-gold mt-1">$</span>
                                                            {m}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                )}

                                {activeTab === 'growth' && (
                                    <>
                                        {/* Primary Challenges */}
                                        {profile?.challenges?.primary && (
                                            <div>
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-red-300 mb-3">Life Challenges</h5>
                                                <ul className="space-y-2">
                                                    {profile.challenges.primary.map((c, i) => (
                                                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                                                            <span className="text-red-300 mt-1">⚡</span>
                                                            {c}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Growth Path */}
                                        {profile?.challenges?.growthPath && (
                                            <div>
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-accent-teal mb-3">Growth Path</h5>
                                                <ul className="space-y-2">
                                                    {profile.challenges.growthPath.map((p, i) => (
                                                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                                                            <span className="text-accent-teal mt-1">↑</span>
                                                            {p}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Spiritual Lessons */}
                                        {profile?.challenges?.spiritualLessons && (
                                            <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-4">
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-purple-300 mb-3">Spiritual Lessons</h5>
                                                <ul className="space-y-2">
                                                    {profile.challenges.spiritualLessons.map((l, i) => (
                                                        <li key={i} className="text-text-secondary text-sm italic">
                                                            "{l}"
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Health Recommendations */}
                                        {profile?.health?.recommendations && (
                                            <div className="pt-4 border-t border-white/10">
                                                <h5 className="font-bold text-xs uppercase tracking-widest text-green-400 mb-3">Wellness Recommendations</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {profile.health.recommendations.map((r, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium rounded-lg"
                                                        >
                                                            {r}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default NumberMeanings;
