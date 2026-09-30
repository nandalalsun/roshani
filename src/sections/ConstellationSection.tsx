import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Heart, Smile, Sun, Home, Crown, Coffee, 
  Compass, Flame, Shield, Moon, Stars, X, Check 
} from 'lucide-react';
import { BIRTHDAY_CONFIG, LoveNote } from '../data/birthdayConfig';
import { fireHearts } from '../utils/confetti';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Smile: <Smile className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  Crown: <Crown className="w-5 h-5" />,
  Coffee: <Coffee className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Moon: <Moon className="w-5 h-5" />,
  Stars: <Stars className="w-5 h-5" />,
};

export const ConstellationSection: React.FC = () => {
  const notes: LoveNote[] = BIRTHDAY_CONFIG.thingsILove.notes;
  const [selectedNote, setSelectedNote] = useState<LoveNote | null>(null);
  const [discoveredIds, setDiscoveredIds] = useState<Set<number>>(new Set());

  const handleOpenNote = (note: LoveNote) => {
    setSelectedNote(note);
    if (!discoveredIds.has(note.id)) {
      const next = new Set(discoveredIds);
      next.add(note.id);
      setDiscoveredIds(next);
      fireHearts();
    }
  };

  return (
    <section id="constellation" className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center">
      {/* Subtle celestial lines / background ambient */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-romantic-500/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto w-full z-10 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-lavender-300/30 text-xs sm:text-sm text-lavender-200">
            <Sparkles className="w-3.5 h-3.5 text-lavender-300" />
            <span>{BIRTHDAY_CONFIG.thingsILove.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {BIRTHDAY_CONFIG.thingsILove.title}
          </h2>

          <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-lg mx-auto">
            {BIRTHDAY_CONFIG.thingsILove.subtitle}
          </p>

          {/* Discovery Counter */}
          <div className="inline-flex items-center gap-2 pt-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-romantic-200">
            <span>Discovered:</span>
            <span className="font-semibold text-gold-300">{discoveredIds.size}</span>
            <span>of {notes.length} Love Notes</span>
            {discoveredIds.size === notes.length && (
              <span className="text-gold-300 font-bold ml-1">✨ All Found! ✨</span>
            )}
          </div>
        </motion.div>

        {/* Constellation Grid of Floating Hearts/Stars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {notes.map((note, index) => {
            const isDiscovered = discoveredIds.has(note.id);
            return (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <button
                  onClick={() => handleOpenNote(note)}
                  className={`w-full h-full text-left p-5 rounded-3xl glass-card transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                    isDiscovered
                      ? 'border-romantic-400/40 bg-romantic-950/40'
                      : 'hover:border-gold-300/50'
                  }`}
                >
                  {/* Top Status & Icon */}
                  <div className="flex items-center justify-between w-full mb-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-md ${
                      isDiscovered
                        ? 'bg-romantic-500/25 text-romantic-300 border border-romantic-400/30'
                        : 'bg-white/10 text-cream-300 group-hover:bg-gold-400/20 group-hover:text-gold-200'
                    }`}>
                      {iconMap[note.icon || 'Heart'] || <Heart className="w-5 h-5" />}
                    </div>

                    {isDiscovered ? (
                      <span className="w-5 h-5 rounded-full bg-romantic-500/20 text-romantic-300 flex items-center justify-center text-xs">
                        <Check className="w-3 h-3" />
                      </span>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-gold-400/80 animate-ping" />
                    )}
                  </div>

                  {/* Title Preview */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-romantic-200 transition-colors line-clamp-1">
                      {note.title}
                    </h3>
                    <p className="text-xs text-cream-300/60 font-sans line-clamp-2">
                      {isDiscovered ? note.message : "Tap to reveal this whisper..."}
                    </p>
                  </div>

                  {/* Gentle hover shimmer */}
                  <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-romantic-300/80 font-medium">
                    <span>{isDiscovered ? "Read again" : "Unlock"}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Love Note Modal Reveal */}
      <AnimatePresence>
        {selectedNote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg p-6 sm:p-10 rounded-3xl glass-panel border border-romantic-400/40 shadow-glow-pink space-y-6"
            >
              <button
                onClick={() => setSelectedNote(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-cream-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-romantic-500 to-peach-500 flex items-center justify-center text-white shadow-glow-pink">
                  {iconMap[selectedNote.icon || 'Heart'] || <Heart className="w-7 h-7" />}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-romantic-300 font-mono font-semibold">
                    Note #{selectedNote.id}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {selectedNote.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="font-sans text-base sm:text-lg text-cream-100 font-light leading-relaxed">
                  “{selectedNote.message}”
                </p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-romantic-300 italic">Forever cherished by Sunil ❤️</span>
                <button
                  onClick={() => setSelectedNote(null)}
                  className="px-5 py-2 rounded-full bg-romantic-500 hover:bg-romantic-600 text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  Close & Explore More
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
