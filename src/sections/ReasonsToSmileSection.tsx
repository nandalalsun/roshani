import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, Sparkles, Heart, Shuffle } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../data/birthdayConfig';
import { fireHearts } from '../utils/confetti';

export const ReasonsToSmileSection: React.FC = () => {
  const reasons = BIRTHDAY_CONFIG.reasonsToSmile.reasons;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [smileCounter, setSmileCounter] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleNextReason = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let nextIndex = Math.floor(Math.random() * reasons.length);
    // Avoid immediate repeat if there's more than 1 reason
    if (nextIndex === currentIndex && reasons.length > 1) {
      nextIndex = (currentIndex + 1) % reasons.length;
    }

    setCurrentIndex(nextIndex);
    setSmileCounter(prev => prev + 1);
    fireHearts();

    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  return (
    <section id="smiles" className="relative min-h-[80vh] py-24 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto w-full z-10 space-y-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-gold-300/30 text-xs sm:text-sm text-gold-200">
            <Smile className="w-3.5 h-3.5 text-gold-300" />
            <span>{BIRTHDAY_CONFIG.reasonsToSmile.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {BIRTHDAY_CONFIG.reasonsToSmile.title}
          </h2>

          <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-md mx-auto">
            {BIRTHDAY_CONFIG.reasonsToSmile.subtitle}
          </p>
        </motion.div>

        {/* Reason Card Display */}
        <div className="relative min-h-[220px] sm:min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.85, rotateX: -20, y: 15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotateX: 20, y: -15 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="w-full p-8 sm:p-10 rounded-3xl glass-panel border border-romantic-400/30 shadow-glow-pink flex flex-col items-center justify-center space-y-4"
            >
              <div className="flex items-center gap-2 text-romantic-300 text-xs uppercase tracking-widest font-mono">
                <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                <span>Reason #{currentIndex + 1} of {reasons.length}</span>
                <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              </div>

              <p className="font-serif text-xl sm:text-3xl text-white font-semibold leading-relaxed">
                “{reasons[currentIndex]}”
              </p>

              <div className="flex items-center gap-1.5 text-romantic-400 text-sm pt-2">
                <Heart className="w-4 h-4 fill-romantic-500" />
                <span className="text-xs text-cream-200/70 font-sans">Guaranteed to make you smile</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Button & Smile Counter */}
        <div className="space-y-4">
          <button
            onClick={handleNextReason}
            disabled={isAnimating}
            className="group px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-romantic-500 via-rose-500 to-peach-500 text-white font-semibold text-base sm:text-lg shadow-glow-pink hover:shadow-glow-pink-lg transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-3 border border-white/20"
          >
            <Shuffle className="w-5 h-5 text-gold-200 group-hover:rotate-180 transition-transform duration-500" />
            <span>{BIRTHDAY_CONFIG.reasonsToSmile.buttonText}</span>
            <Sparkles className="w-5 h-5 text-gold-200 animate-spin" style={{ animationDuration: '4s' }} />
          </button>

          <p className="text-xs text-cream-300/60 font-sans">
            Smiles delivered today: <span className="font-bold text-gold-300">{smileCounter}</span> 😊
          </p>
        </div>
      </div>
    </section>
  );
};
