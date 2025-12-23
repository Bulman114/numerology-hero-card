import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import { Library, PlusCircle } from 'lucide-react';
import useProfileStore from './store/useProfileStore';
import InputForm from './components/input/InputForm';
import HeroCard from './components/card/HeroCard';
import ProfileLibrary from './components/profiles/ProfileLibrary';
import './index.css';

function Navigation() {
  const { profiles } = useProfileStore();

  return (
    <nav className="bg-bg-charcoal text-bg-cream px-6 py-4 no-print">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-display flex items-center gap-2">
          🔢 Numerology Hero Card
        </Link>
        <div className="flex gap-4">
          <Link
            to="/"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <PlusCircle size={18} />
            New
          </Link>
          <Link
            to="/profiles"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <Library size={18} />
            Library ({profiles.length})
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
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-cream">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/card/:profileId" element={<CardPage />} />
          <Route path="/profiles" element={<ProfileLibrary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
