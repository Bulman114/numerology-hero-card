import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Library, PlusCircle, Heart, Book, Calculator, Scale, Binary, Menu, X } from 'lucide-react';
import useProfileStore from './store/useProfileStore';
import InputForm from './components/input/InputForm';
import HeroCard from './components/card/HeroCard';
import ProfileLibrary from './components/profiles/ProfileLibrary';
import ProfileComparison from './components/profiles/ProfileComparison';
import CalculationTree from './components/calculations/CalculationTree';
import CompatibilityChecker from './components/compatibility/CompatibilityChecker';
import ReferenceLibrary from './components/reference/ReferenceLibrary';
import UniversalDecoder from './components/decoder/UniversalDecoder';
import './index.css';

function Navigation() {
  const { profiles } = useProfileStore();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", icon: PlusCircle, label: "New" },
    { to: "/profiles", icon: Library, label: `Library (${profiles.length})` },
    { to: "/compatibility", icon: Heart, label: "Compatibility" },
    { to: "/comparison", icon: Scale, label: "Compare" },
    { to: "/decoder", icon: Binary, label: "Decoder" },
    { to: "/reference", icon: Book, label: "Learn" },
  ];

  return (
    <nav className="bg-bg-secondary/80 backdrop-blur-xl border-b border-border-subtle text-text-primary px-6 py-4 sticky top-0 z-50 no-print">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-display flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-accent-primary/20 blur-md rounded-full group-hover:bg-accent-primary/40 transition-all duration-500" />
            <img src="/logo.png" alt="Numerology Hero Card Logo" className="w-full h-full object-contain relative z-10 mix-blend-screen" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary group-hover:to-accent-teal transition-all duration-500">
            Numerology Hero Card
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-1 hover:opacity-100 transition-all ${location.pathname === link.to ? 'text-accent-teal opacity-100' : 'opacity-70'
                }`}
            >
              <link.icon size={16} />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-text-primary hover:text-accent-teal transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-white/5 mt-4"
          >
            <div className="flex flex-col gap-2 py-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors ${location.pathname === link.to ? 'text-accent-teal bg-white/5' : 'text-text-secondary'
                    }`}
                >
                  <link.icon size={20} />
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
          <Route path="/comparison" element={<ProfileComparison />} />
          <Route path="/decoder" element={<UniversalDecoder />} />
          <Route path="/reference" element={<ReferenceLibrary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
