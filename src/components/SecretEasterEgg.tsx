import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../data/birthdayConfig';
import { fireHearts } from '../utils/confetti';

export const SecretEasterEgg: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const targetClicks = BIRTHDAY_CONFIG.easterEgg.clicksRequired || 5;

  const handleHeartClick = () => {
    const next = clickCount + 1;
    setClickCount(next);

    if (next >= targetClicks) {
      setIsOpen(true);
      setClickCount(0);
      fireHearts();
    }
  };

  return (
    <>
      {/* Discreet secret heart placed peacefully in the corner/footer area */}
      <button
        onClick={handleHeartClick}
        title="Just a tiny heart..."
        aria-label="Secret romantic easter egg"
        className="relative group p-2 rounded-full opacity-60 hover:opacity-100 transition-all focus:outline-none"
      >
        <Heart
          className={`w-4 h-4 text-romantic-400/50 group-hover:text-romantic-400 group-hover:scale-125 transition-transform duration-300 ${
            clickCount > 0 ? 'scale-110 text-romantic-400 animate-pulse' : ''
          }`}
          fill="currentColor"
        />
        {/* Subtle dot counter indicator for clicks */}
        {clickCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
        )}
      </button>

      {/* Secret Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl glass-panel border border-romantic-400/40 text-center shadow-glow-pink"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-cream-300 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mx-auto w-16 h-16 rounded-full bg-romantic-500/20 border border-romantic-400/50 flex items-center justify-center mb-5 shadow-glow-pink">
                <Sparkles className="w-8 h-8 text-romantic-400 animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold romantic-gradient-text mb-4">
                {BIRTHDAY_CONFIG.easterEgg.title}
              </h3>

              <div className="space-y-4 text-cream-100 text-base sm:text-lg leading-relaxed font-sans">
                <p className="font-medium text-pink-100">
                  {BIRTHDAY_CONFIG.easterEgg.message}
                </p>
                <p className="text-sm text-gold-200/90 font-light italic">
                  {BIRTHDAY_CONFIG.easterEgg.closing}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-romantic-500 to-peach-500 text-white font-medium text-sm hover:shadow-glow-pink transition-shadow"
                >
                  I Love You Too ❤️
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
