import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { calculateAllNumbers } from '../utils/numerology';

const useProfileStore = create(
    persist(
        (set, get) => ({
            // State
            profiles: [],
            activeProfileId: null,
            calculationMethod: 'pythagorean',

            // Computed getter
            getActiveProfile: () => {
                const { profiles, activeProfileId } = get();
                return profiles.find(p => p.id === activeProfileId) || null;
            },

            // Actions
            addProfile: (profileData) => {
                const newProfile = {
                    ...profileData,
                    id: crypto.randomUUID(),
                    numbers: calculateAllNumbers(profileData),
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                };

                set(state => ({
                    profiles: [...state.profiles, newProfile],
                    activeProfileId: newProfile.id,
                }));

                return newProfile.id;
            },

            updateProfile: (id, updates) => {
                set(state => ({
                    profiles: state.profiles.map(p =>
                        p.id === id
                            ? {
                                ...p,
                                ...updates,
                                numbers: calculateAllNumbers({ ...p, ...updates }),
                                updatedAt: new Date().toISOString()
                            }
                            : p
                    ),
                }));
            },

            deleteProfile: (id) => {
                set(state => ({
                    profiles: state.profiles.filter(p => p.id !== id),
                    activeProfileId: state.activeProfileId === id ? null : state.activeProfileId,
                }));
            },

            setActiveProfile: (id) => {
                set({ activeProfileId: id });
            },

            setCalculationMethod: (method) => {
                set({ calculationMethod: method });
                // Recalculate all profiles with new method
                const { profiles } = get();
                set({
                    profiles: profiles.map(p => ({
                        ...p,
                        calculationMethod: method,
                        numbers: calculateAllNumbers({ ...p, calculationMethod: method }),
                    })),
                });
            },

            importProfiles: (profilesData) => {
                set({ profiles: profilesData });
            },

            clearAllProfiles: () => {
                set({ profiles: [], activeProfileId: null });
            },
        }),
        {
            name: 'numerology-profiles', // localStorage key
            version: 1,
        }
    )
);

export default useProfileStore;
