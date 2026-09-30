import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../data/birthdayConfig';
import { fireHearts, fireSparkleRain } from '../utils/confetti';

interface HeroSectionProps {
  onStartExperience: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartExperience }) => {
  const handleOpenSurprise = () => {
    fireHearts();
    fireSparkleRain();
    onStartExperience();

    const cakeElement = document.getElementById('cake');
    if (cakeElement) {
      cakeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden py-16"
    >
      {/* Decorative celestial background rings */}
      <div className="absolute w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full border border-romantic-400/10 pointer-events-none animate-pulse-slow" />
      <div className="absolute w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] rounded-full border border-gold-300/10 pointer-events-none" />

      <div className="max-w-3xl mx-auto z-10 space-y-8">
        {/* Subtle romantic badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-romantic-300/20 text-xs sm:text-sm text-romantic-200 shadow-glass"
        >
          <Sparkles className="w-4 h-4 text-gold-300 animate-spin" style={{ animationDuration: '8s' }} />
          <span>A special day for my special woman</span>
          <Heart className="w-3.5 h-3.5 text-romantic-400 fill-romantic-400" />
        </motion.div>

        {/* Cinematic Opening Text: “Hey Roshani… ❤️” */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-4"
        >
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(242,84,119,0.35)]">
            <span className="romantic-gradient-text">{BIRTHDAY_CONFIG.opening.greeting}</span>
          </h1>

          {/* “I made a little something for you.” */}
          <p className="font-sans text-xl sm:text-2xl md:text-3xl text-cream-200/90 font-light tracking-wide max-w-xl mx-auto">
            {BIRTHDAY_CONFIG.opening.subheading}
          </p>
        </motion.div>

        {/* Animated Button & Playful Warning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="pt-4 space-y-4 flex flex-col items-center"
        >
          <button
            onClick={handleOpenSurprise}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-romantic-500 via-rose-500 to-peach-500 text-white font-medium text-base sm:text-lg shadow-glow-pink hover:shadow-glow-pink-lg transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-white/25 overflow-hidden"
          >
            {/* Shimmer light effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <Sparkles className="w-5 h-5 text-gold-200 animate-bounce" />
            <span className="font-semibold tracking-wide">{BIRTHDAY_CONFIG.opening.buttonText}</span>
            <Sparkles className="w-5 h-5 text-gold-200 animate-bounce" />
          </button>

          {/* Small playful text: “Warning: You may smile a lot.” 😌❤️ */}
          <p className="text-xs sm:text-sm text-romantic-200/70 font-sans tracking-wide italic">
            {BIRTHDAY_CONFIG.opening.warningText}
          </p>
        </motion.div>
      </div>

      {/* Down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cream-300/60 cursor-pointer hover:text-romantic-300 transition-colors"
        onClick={() => {
          const el = document.getElementById('cake');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll or Tap</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
};
