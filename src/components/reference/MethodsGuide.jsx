import React from 'react';

const MethodsGuide = () => {
    return (
        <div className="space-y-8">
            <p className="text-gray-600">
                There are two primary systems for converting letters to numbers in numerology.
                Understanding the differences can help you choose which resonates with you.
            </p>

            {/* Pythagorean */}
            <section className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-display font-bold text-lifepath-7 mb-3">
                    Pythagorean System
                </h3>
                <p className="text-gray-700 mb-4">
                    The most common Western numerology system, named after the Greek philosopher Pythagoras.
                    It uses a sequential 1-9 pattern that repeats through the alphabet.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr className="bg-lifepath-7 text-white">
                                <th className="px-3 py-2 border">1</th>
                                <th className="px-3 py-2 border">2</th>
                                <th className="px-3 py-2 border">3</th>
                                <th className="px-3 py-2 border">4</th>
                                <th className="px-3 py-2 border">5</th>
                                <th className="px-3 py-2 border">6</th>
                                <th className="px-3 py-2 border">7</th>
                                <th className="px-3 py-2 border">8</th>
                                <th className="px-3 py-2 border">9</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-3 py-2 border font-mono">A</td>
                                <td className="px-3 py-2 border font-mono">B</td>
                                <td className="px-3 py-2 border font-mono">C</td>
                                <td className="px-3 py-2 border font-mono">D</td>
                                <td className="px-3 py-2 border font-mono">E</td>
                                <td className="px-3 py-2 border font-mono">F</td>
                                <td className="px-3 py-2 border font-mono">G</td>
                                <td className="px-3 py-2 border font-mono">H</td>
                                <td className="px-3 py-2 border font-mono">I</td>
                            </tr>
                            <tr>
                                <td className="px-3 py-2 border font-mono">J</td>
                                <td className="px-3 py-2 border font-mono">K</td>
                                <td className="px-3 py-2 border font-mono">L</td>
                                <td className="px-3 py-2 border font-mono">M</td>
                                <td className="px-3 py-2 border font-mono">N</td>
                                <td className="px-3 py-2 border font-mono">O</td>
                                <td className="px-3 py-2 border font-mono">P</td>
                                <td className="px-3 py-2 border font-mono">Q</td>
                                <td className="px-3 py-2 border font-mono">R</td>
                            </tr>
                            <tr>
                                <td className="px-3 py-2 border font-mono">S</td>
                                <td className="px-3 py-2 border font-mono">T</td>
                                <td className="px-3 py-2 border font-mono">U</td>
                                <td className="px-3 py-2 border font-mono">V</td>
                                <td className="px-3 py-2 border font-mono">W</td>
                                <td className="px-3 py-2 border font-mono">X</td>
                                <td className="px-3 py-2 border font-mono">Y</td>
                                <td className="px-3 py-2 border font-mono">Z</td>
                                <td className="px-3 py-2 border text-gray-400">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-1">Best For:</h4>
                    <p className="text-blue-700 text-sm">
                        Western practitioners, beginners, and those seeking a straightforward approach.
                        Most numerology books and resources use this system.
                    </p>
                </div>
            </section>

            {/* Chaldean */}
            <section className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-display font-bold text-purple-700 mb-3">
                    Chaldean System
                </h3>
                <p className="text-gray-700 mb-4">
                    An older system from ancient Babylon. It assigns numbers based on the vibrational
                    energy of each letter rather than alphabetical order. Note: the number 9 is sacred
                    and not assigned to any letter.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr className="bg-purple-700 text-white">
                                <th className="px-3 py-2 border">1</th>
                                <th className="px-3 py-2 border">2</th>
                                <th className="px-3 py-2 border">3</th>
                                <th className="px-3 py-2 border">4</th>
                                <th className="px-3 py-2 border">5</th>
                                <th className="px-3 py-2 border">6</th>
                                <th className="px-3 py-2 border">7</th>
                                <th className="px-3 py-2 border">8</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-3 py-2 border font-mono">A, I, J, Q, Y</td>
                                <td className="px-3 py-2 border font-mono">B, K, R</td>
                                <td className="px-3 py-2 border font-mono">C, G, L, S</td>
                                <td className="px-3 py-2 border font-mono">D, M, T</td>
                                <td className="px-3 py-2 border font-mono">E, H, N, X</td>
                                <td className="px-3 py-2 border font-mono">U, V, W</td>
                                <td className="px-3 py-2 border font-mono">O, Z</td>
                                <td className="px-3 py-2 border font-mono">F, P</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-1">Best For:</h4>
                    <p className="text-purple-700 text-sm">
                        Those interested in ancient mysticism, advanced practitioners, or anyone
                        wanting a deeper esoteric analysis. Often considered more accurate for
                        prediction work.
                    </p>
                </div>
            </section>

            {/* Comparison */}
            <section className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-display font-bold mb-4">Key Differences</h3>
                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <span className="text-xl">📊</span>
                        <div>
                            <h4 className="font-semibold">Calculation Method</h4>
                            <p className="text-sm text-gray-600">
                                Pythagorean follows alphabetical order. Chaldean uses vibrational energy.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-xl">9️⃣</span>
                        <div>
                            <h4 className="font-semibold">Number 9</h4>
                            <p className="text-sm text-gray-600">
                                Pythagorean assigns letters to 9. Chaldean considers 9 sacred and omits it.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-xl">🔢</span>
                        <div>
                            <h4 className="font-semibold">Results</h4>
                            <p className="text-sm text-gray-600">
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
