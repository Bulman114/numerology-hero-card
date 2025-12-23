import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import { Library, PlusCircle, Heart, Book, Calculator } from 'lucide-react';
import useProfileStore from './store/useProfileStore';
import InputForm from './components/input/InputForm';
import HeroCard from './components/card/HeroCard';
import ProfileLibrary from './components/profiles/ProfileLibrary';
import CalculationTree from './components/calculations/CalculationTree';
import CompatibilityChecker from './components/compatibility/CompatibilityChecker';
import ReferenceLibrary from './components/reference/ReferenceLibrary';
import './index.css';

function Navigation() {
  const { profiles } = useProfileStore();

  return (
    <nav className="bg-bg-secondary/80 backdrop-blur-xl border-b border-border-subtle text-text-primary px-6 py-4 sticky top-0 z-50 no-print">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-display flex items-center gap-2">
          🔢 Numerology Hero Card
        </Link>
        <div className="flex gap-4 text-sm">
          <Link
            to="/"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <PlusCircle size={16} />
            New
          </Link>
          <Link
            to="/profiles"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <Library size={16} />
            Library ({profiles.length})
          </Link>
          <Link
            to="/compatibility"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <Heart size={16} />
            Compare
          </Link>
          <Link
            to="/reference"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <Book size={16} />
            Learn
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  const navigate = useNavigate();

  const handleFormSubmit = (profileId) => {
    navigate(`/card/${profileId}`);
  };

  return (
    <div className="min-h-screen py-8">
      <InputForm onSubmit={handleFormSubmit} />
    </div>
  );
}

function CardPage() {
  const navigate = useNavigate();
  const { getActiveProfile } = useProfileStore();
  const profile = getActiveProfile();

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">No profile selected</p>
          <button onClick={() => navigate('/')} className="btn-primary">
            Create Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <HeroCard profile={profile} />
      {/* View Breakdown Link */}
      <div className="max-w-4xl mx-auto px-6 mt-4 text-center no-print">
        <Link
          to={`/breakdown/${profile.id}`}
          className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors"
        >
          <Calculator size={18} />
          View Calculation Breakdown
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/card/:profileId" element={<CardPage />} />
          <Route path="/profiles" element={<ProfileLibrary />} />
          <Route path="/breakdown/:profileId" element={<CalculationTree />} />
          <Route path="/compatibility" element={<CompatibilityChecker />} />
          <Route path="/reference" element={<ReferenceLibrary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
