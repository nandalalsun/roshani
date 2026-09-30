import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, RotateCcw, Music } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../data/birthdayConfig';
import { romanticAudio } from '../utils/audioPlayer';
import { SecretEasterEgg } from '../components/SecretEasterEgg';
import { fireCelebration, fireHearts } from '../utils/confetti';

interface FinalCinematicSectionProps {
  onReplay: () => void;
}

export const FinalCinematicSection: React.FC<FinalCinematicSectionProps> = ({ onReplay }) => {
  const [showPartTwo, setShowPartTwo] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const final = BIRTHDAY_CONFIG.finalCinematic;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPartTwo(true);
    }, 2800);

    const unsubscribe = romanticAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, []);

  const handleToggleMusic = async () => {
    await romanticAudio.toggle();
  };

  const handleReplayClick = () => {
    fireHearts();
    onReplay();
  };

  const handleBurstHearts = () => {
    fireCelebration();
  };

  return (
    <section id="final" className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-between text-center overflow-hidden">
      {/* Background ambient radiance */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-romantic-500/15 via-gold-400/10 to-lavender-500/15 blur-[160px] animate-pulse-slow" />
      </div>

      <div className="w-full" />

      {/* Main Cinematic Content */}
      <div className="max-w-3xl mx-auto w-full z-10 space-y-10 my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          {/* Decorative Crown/Sparkle */}
          <div className="flex justify-center items-center gap-2">
            <Sparkles className="w-6 h-6 text-gold-300 animate-spin" style={{ animationDuration: '10s' }} />
            <button
              onClick={handleBurstHearts}
              title="Click for love!"
              aria-label="Click for love!"
              className="p-1 rounded-full focus:outline-none"
            >
              <Heart 
                className="w-10 h-10 text-romantic-500 fill-romantic-500 animate-pulse hover:scale-125 transition-transform" 
              />
            </button>
            <Sparkles className="w-6 h-6 text-gold-300 animate-spin" style={{ animationDuration: '10s' }} />
          </div>

          {/* Large: “Happy Birthday, Roshani ❤️” */}
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            <span className="romantic-gradient-text">{final.bigTitle}</span>
          </h2>

          {/* “May this year be as beautiful, unexpected, crazy, and wonderful as you are.” */}
          <p className="font-sans text-lg sm:text-2xl text-cream-100 font-light leading-relaxed max-w-2xl mx-auto">
            “{final.wishText}”
          </p>
        </motion.div>

        {/* Animated text with pause */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-romantic-400/30 shadow-glass space-y-4 max-w-xl mx-auto">
          {/* “And no matter where life takes us…” */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-xl sm:text-2xl text-cream-200/90 italic"
          >
            {final.animatedTextPart1}
          </motion.p>

          {/* Pause -> “…I'll always choose you.” ❤️ */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={showPartTwo ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold romantic-gradient-text"
          >
            {final.animatedTextPart2}
          </motion.p>

          {/* “Forever yours, Sunil ❤️” */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={showPartTwo ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-4 border-t border-white/10"
          >
            <p className="font-handwriting text-3xl sm:text-4xl text-romantic-300 font-bold whitespace-pre-line">
              {final.signature}
            </p>
          </motion.div>
        </div>

        {/* Buttons: Replay & Music */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={handleReplayClick}
            className="px-6 sm:px-8 py-3.5 rounded-full glass-card hover:bg-white/10 text-cream-100 font-medium text-sm sm:text-base border border-white/20 transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4 text-romantic-300" />
            <span>{final.buttonReplay}</span>
          </button>

          <button
            onClick={handleToggleMusic}
            className="px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-romantic-500 to-peach-500 text-white font-medium text-sm sm:text-base shadow-glow-pink hover:shadow-glow-pink-lg transition-all flex items-center gap-2"
          >
            <Music className="w-4 h-4 text-white" />
            <span>{isPlaying ? 'Pause Music' : '🎵 Play Music'}</span>
          </button>
        </motion.div>
      </div>

      {/* Footer Area with subtle secret heart */}
      <footer className="w-full z-10 pt-16 pb-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/60 font-sans">
        <div className="flex items-center gap-2">
          <span>Crafted with endless love by {BIRTHDAY_CONFIG.senderName} for {BIRTHDAY_CONFIG.recipientName}</span>
          <span>❤️</span>
        </div>

        {/* Secret Easter Egg placed subtly here */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] opacity-40">Tap the tiny heart for a secret:</span>
          <SecretEasterEgg />
        </div>
      </footer>
    </section>
  );
};
