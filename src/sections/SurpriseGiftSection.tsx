import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, Sparkles, RotateCcw } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../data/birthdayConfig';
import { fireCelebration, fireHearts } from '../utils/confetti';

export const SurpriseGiftSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const gift = BIRTHDAY_CONFIG.surpriseGift;

  const handleOpenGift = () => {
    setIsOpen(true);
    fireCelebration();
    fireHearts();
  };

  const handleResetGift = () => {
    setIsOpen(false);
  };

  return (
    <section id="gift" className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center">
      {/* Background glow transforms when opened */}
      <div className={`absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${
        isOpen ? 'bg-gradient-to-tr from-gold-400/25 via-romantic-500/30 to-pink-500/20 scale-125' : 'bg-romantic-500/10'
      }`} />

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
            <Gift className="w-3.5 h-3.5 text-gold-300" />
            <span>{gift.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {gift.introText}
          </h2>

          <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-md mx-auto">
            {isOpen ? "A truth that will remain constant forever." : "There is one more package addressed to you."}
          </p>
        </motion.div>

        {/* Gift Box Container */}
        <div className="relative py-6 flex flex-col items-center justify-center">
          {!isOpen ? (
            <motion.div
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="relative cursor-pointer group flex flex-col items-center"
              onClick={handleOpenGift}
            >
              {/* Gift Box Ribbon Bow */}
              <div className="relative z-20 flex justify-center -mb-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 shadow-glow-gold flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-white animate-spin" style={{ animationDuration: '8s' }} />
                </div>
              </div>

              {/* Gift Box Lid */}
              <div className="relative z-10 w-48 sm:w-56 h-12 rounded-2xl bg-gradient-to-r from-romantic-600 via-rose-500 to-pink-600 shadow-xl border-t border-white/40 flex items-center justify-center">
                {/* Vertical Ribbon */}
                <div className="w-8 h-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 shadow-md" />
              </div>

              {/* Gift Box Body */}
              <div className="relative w-44 sm:w-52 h-40 sm:h-48 rounded-b-3xl bg-gradient-to-b from-romantic-700 via-romantic-800 to-velvet-900 shadow-2xl border-x border-b border-romantic-400/40 flex items-center justify-center overflow-hidden">
                {/* Vertical Ribbon */}
                <div className="w-8 h-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 shadow-md" />
                {/* Horizontal Ribbon */}
                <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-gold-300 via-gold-400 to-gold-500 shadow-md" />
                
                {/* Sparkle badge */}
                <div className="absolute bottom-4 z-10 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-gold-300/30 text-[11px] text-gold-200 font-mono">
                  Tap To Open 🎁
                </div>
              </div>

              {/* Button */}
              <div className="mt-8">
                <button
                  onClick={handleOpenGift}
                  className="px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-velvet-950 font-bold text-base sm:text-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2.5"
                >
                  <Gift className="w-5 h-5 text-velvet-950" />
                  <span>{gift.buttonText}</span>
                  <Sparkles className="w-5 h-5 text-velvet-950" />
                </button>
              </div>
            </motion.div>
          ) : (
            /* Revealed Gift Card */
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', damping: 25, stiffness: 280 }}
                className="w-full p-8 sm:p-12 rounded-3xl glass-panel border-2 border-gold-300/50 shadow-glow-gold space-y-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-romantic-500 via-peach-500 to-gold-400 mx-auto flex items-center justify-center shadow-glow-pink">
                  <Heart className="w-10 h-10 text-white fill-white animate-pulse" />
                </div>

                <div className="space-y-4">
                  {/* “My favorite gift isn't something I can wrap.” */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-cream-100 font-light leading-relaxed">
                    “{gift.revealedTitle}”
                  </h3>

                  {/* “It's you.” ❤️ */}
                  <p className="font-serif text-4xl sm:text-6xl font-bold romantic-gradient-text tracking-wide py-2">
                    {gift.revealedHighlight}
                  </p>

                  {/* “Happy Birthday, Roshani.” */}
                  <p className="font-serif text-2xl sm:text-3xl gold-gradient-text font-bold">
                    {gift.revealedEnding}
                  </p>

                  <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-md mx-auto pt-2">
                    {gift.subtext}
                  </p>
                </div>

                <div className="pt-4 flex justify-center items-center gap-3">
                  <button
                    onClick={handleResetGift}
                    className="px-5 py-2 rounded-full glass-card text-xs text-cream-300 hover:text-white flex items-center gap-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Wrap Box Again</span>
                  </button>

                  <button
                    onClick={() => {
                      const el = document.getElementById('final');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-2 rounded-full bg-romantic-500 text-white text-xs sm:text-sm font-medium hover:bg-romantic-600 transition-colors shadow-glow-pink"
                  >
                    Read Final Message ❤️
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};
