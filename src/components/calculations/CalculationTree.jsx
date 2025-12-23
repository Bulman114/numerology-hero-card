import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, User, Heart, Sparkles } from 'lucide-react';
import useProfileStore from '../../store/useProfileStore';
import Tabs from '../ui/Tabs';
import Button from '../ui/Button';
import StepByStep from './StepByStep';
import ReductionPath from './ReductionPath';

const CalculationTree = () => {
    const { profileId } = useParams();
    const navigate = useNavigate();
    const { profiles, setActiveProfile } = useProfileStore();

    const profile = profiles.find(p => p.id === profileId);

    if (!profile) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <p className="text-xl mb-4">Profile not found</p>
                <Button onClick={() => navigate('/profiles')} variant="primary">
                    Go to Library
                </Button>
            </div>
        );
    }

    // Set as active profile
    React.useEffect(() => {
        setActiveProfile(profileId);
    }, [profileId, setActiveProfile]);

    const { numbers, birthdate, firstName, middleName, lastName } = profile;

    // Life Path components
    const lifePathComponents = [
        birthdate.month,
        birthdate.day,
        ...birthdate.year.toString().split('').map(Number),
    ];

    const tabs = [
        {
            label: 'Life Path',
            icon: Calculator,
            content: (
                <StepByStep
                    title="Life Path Calculation"
                    components={lifePathComponents}
                    steps={numbers.lifePath.steps}
                    final={numbers.lifePath.value}
                    isMaster={numbers.lifePath.isMaster}
                />
            ),
        },
        {
            label: 'Expression',
            icon: User,
            content: (
                <div className="space-y-8">
                    <ReductionPath
                        title={`First Name: ${firstName}`}
                        letterValues={numbers.expression.breakdown.firstName.letterValues}
                        sum={numbers.expression.breakdown.firstName.sum}
                        final={numbers.expression.breakdown.firstName.value}
                        isMaster={numbers.expression.breakdown.firstName.isMaster}
                    />
                    {middleName && (
                        <ReductionPath
                            title={`Middle Name: ${middleName}`}
                            letterValues={numbers.expression.breakdown.middleName.letterValues}
                            sum={numbers.expression.breakdown.middleName.sum}
                            final={numbers.expression.breakdown.middleName.value}
                            isMaster={numbers.expression.breakdown.middleName.isMaster}
                        />
                    )}
                    <ReductionPath
                        title={`Last Name: ${lastName}`}
                        letterValues={numbers.expression.breakdown.lastName.letterValues}
                        sum={numbers.expression.breakdown.lastName.sum}
                        final={numbers.expression.breakdown.lastName.value}
                        isMaster={numbers.expression.breakdown.lastName.isMaster}
                    />
                    <div className="text-center pt-8 border-t border-white/10 mt-8">
                        <div className="text-text-muted mb-3 text-sm uppercase tracking-widest font-bold">Combined Expression Number</div>
                        <div className="text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-lg">
                            {numbers.expression.value}
                            {numbers.expression.isMaster && <span className="text-4xl ml-2 text-accent-gold align-top">⚡</span>}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            label: 'Soul Urge',
            icon: Heart,
            content: (
                <ReductionPath
                    title="Soul Urge (Vowels Only)"
                    letterValues={numbers.soulUrge.letterValues}
                    sum={numbers.soulUrge.sum}
                    final={numbers.soulUrge.value}
                    isMaster={numbers.soulUrge.isMaster}
                />
            ),
        },
        {
            label: 'Personality',
            icon: Sparkles,
            content: (
                <ReductionPath
                    title="Personality (Consonants Only)"
                    letterValues={numbers.personality.letterValues}
                    sum={numbers.personality.sum}
                    final={numbers.personality.value}
                    isMaster={numbers.personality.isMaster}
                />
            ),
        },
    ];

    const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

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
                        <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                            <Calculator size={24} />
                        </div>
                        Calculation Breakdown
                    </h1>
                    <p className="text-text-muted mt-2 ml-14 text-sm font-mono tracking-wide">
                        {fullName}
                    </p>
                </div>

                <div className="p-6 md:p-8">
                    <Tabs tabs={tabs} />
                </div>
            </div>
        </div>
    );
};

export default CalculationTree;
