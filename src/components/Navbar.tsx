import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Cake, Compass, Camera, Mail, Gift, HelpCircle, Smile } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../data/birthdayConfig';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { id: 'cake', label: 'Cake', icon: <Cake className="w-3.5 h-3.5" /> },
    { id: 'quiz', label: 'Quiz', icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { id: 'constellation', label: 'Love', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'story', label: 'Story', icon: <Compass className="w-3.5 h-3.5" /> },
    { id: 'gallery', label: 'Photos', icon: <Camera className="w-3.5 h-3.5" /> },
    { id: 'letter', label: 'Letter', icon: <Mail className="w-3.5 h-3.5" /> },
    { id: 'smiles', label: 'Smile', icon: <Smile className="w-3.5 h-3.5" /> },
    { id: 'gift', label: 'Gift', icon: <Gift className="w-3.5 h-3.5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);

      const sections = ['hero', 'cake', 'quiz', 'constellation', 'story', 'gallery', 'letter', 'smiles', 'gift', 'final'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!scrolled) return null;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] sm:max-w-max transition-all duration-500 animate-fadeIn">
      <div className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel shadow-glass border border-white/10 text-xs text-cream-200">
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full text-romantic-300 hover:text-white transition-colors"
          title="Top"
        >
          <Heart className="w-3.5 h-3.5 fill-romantic-500 text-romantic-500 animate-pulse" />
          <span className="hidden md:inline font-serif font-semibold">{BIRTHDAY_CONFIG.recipientName}</span>
        </button>

        <div className="h-3 w-px bg-white/15 mx-0.5" />

        <div className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar py-0.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs transition-all whitespace-nowrap ${
                activeSection === item.id
                  ? 'bg-romantic-500/30 text-white font-medium shadow-glow-pink border border-romantic-400/40'
                  : 'text-cream-300/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
