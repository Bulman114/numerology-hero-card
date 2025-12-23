import React from 'react';

const MethodsGuide = () => {
    return (
        <div className="space-y-8">
            <p className="text-text-secondary mb-6 leading-relaxed">
                There are two primary systems for converting letters to numbers in numerology.
                Understanding the differences can help you choose which resonates with you.
            </p>

            {/* Pythagorean */}
            <section className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                    Pythagorean System
                </h3>
                <p className="text-text-muted mb-6 text-sm">
                    The most common Western numerology system, named after the Greek philosopher Pythagoras.
                    It uses a sequential 1-9 pattern that repeats through the alphabet.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr className="bg-accent-teal/20 text-accent-teal">
                                <th className="px-3 py-2 border border-white/5">1</th>
                                <th className="px-3 py-2 border border-white/5">2</th>
                                <th className="px-3 py-2 border border-white/5">3</th>
                                <th className="px-3 py-2 border border-white/5">4</th>
                                <th className="px-3 py-2 border border-white/5">5</th>
                                <th className="px-3 py-2 border border-white/5">6</th>
                                <th className="px-3 py-2 border border-white/5">7</th>
                                <th className="px-3 py-2 border border-white/5">8</th>
                                <th className="px-3 py-2 border border-white/5">9</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">A</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">B</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">C</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">D</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">E</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">F</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">G</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">H</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">I</td>
                            </tr>
                            <tr>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">J</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">K</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">L</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">M</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">N</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">O</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">P</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">Q</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">R</td>
                            </tr>
                            <tr>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">S</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">T</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">U</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">V</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">W</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">X</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">Y</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">Z</td>
                                <td className="px-3 py-2 border border-white/5 text-text-muted">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 p-4 bg-accent-teal/5 border border-accent-teal/10 rounded-xl">
                    <h4 className="font-bold text-accent-teal mb-1 text-sm uppercase tracking-wide">Best For:</h4>
                    <p className="text-text-secondary text-sm">
                        Western practitioners, beginners, and those seeking a straightforward approach.
                        Most numerology books and resources use this system.
                    </p>
                </div>
            </section>

            {/* Chaldean */}
            <section className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-display font-bold text-accent-primary mb-3">
                    Chaldean System
                </h3>
                <p className="text-text-muted mb-6 text-sm">
                    An older system from ancient Babylon. It assigns numbers based on the vibrational
                    energy of each letter rather than alphabetical order. Note: the number 9 is sacred
                    and not assigned to any letter.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr className="bg-accent-primary/20 text-accent-primary">
                                <th className="px-3 py-2 border border-white/5">1</th>
                                <th className="px-3 py-2 border border-white/5">2</th>
                                <th className="px-3 py-2 border border-white/5">3</th>
                                <th className="px-3 py-2 border border-white/5">4</th>
                                <th className="px-3 py-2 border border-white/5">5</th>
                                <th className="px-3 py-2 border border-white/5">6</th>
                                <th className="px-3 py-2 border border-white/5">7</th>
                                <th className="px-3 py-2 border border-white/5">8</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">A, I, J, Q, Y</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">B, K, R</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">C, G, L, S</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">D, M, T</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">E, H, N, X</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">U, V, W</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">O, Z</td>
                                <td className="px-3 py-2 border border-white/5 font-mono text-text-secondary">F, P</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 p-4 bg-accent-primary/5 border border-accent-primary/10 rounded-xl">
                    <h4 className="font-bold text-accent-primary mb-1 text-sm uppercase tracking-wide">Best For:</h4>
                    <p className="text-text-secondary text-sm">
                        Those interested in ancient mysticism, advanced practitioners, or anyone
                        wanting a deeper esoteric analysis. Often considered more accurate for
                        prediction work.
                    </p>
                </div>
            </section>

            {/* Comparison */}
            <section className="bg-bg-elevated/30 p-6 rounded-2xl border border-white/5">
                <h3 className="text-xl font-display font-bold mb-4 text-text-primary">Key Differences</h3>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <span className="text-xl">📊</span>
                        <div>
                            <h4 className="font-bold text-sm text-text-primary">Calculation Method</h4>
                            <p className="text-sm text-text-muted">
                                Pythagorean follows alphabetical order. Chaldean uses vibrational energy.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-xl">9️⃣</span>
                        <div>
                            <h4 className="font-bold text-sm text-text-primary">Number 9</h4>
                            <p className="text-sm text-text-muted">
                                Pythagorean assigns letters to 9. Chaldean considers 9 sacred and omits it.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-xl">🔢</span>
                        <div>
                            <h4 className="font-bold text-sm text-text-primary">Results</h4>
                            <p className="text-sm text-text-muted">
                                The same name will often produce different numbers in each system.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MethodsGuide;
