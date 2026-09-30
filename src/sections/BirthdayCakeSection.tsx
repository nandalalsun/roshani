import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, RotateCcw, Wind } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../data/birthdayConfig';
import { fireCelebration } from '../utils/confetti';

export const BirthdayCakeSection: React.FC = () => {
  const totalCandles = BIRTHDAY_CONFIG.cake.candlesCount || 5;
  const [extinguished, setExtinguished] = useState<Set<number>>(new Set());
  const [wishMade, setWishMade] = useState<boolean>(false);

  const isAllBlown = extinguished.size === totalCandles;

  const handleCandleClick = (index: number) => {
    if (extinguished.has(index)) return;

    const next = new Set(extinguished);
    next.add(index);
    setExtinguished(next);

    if (next.size === totalCandles) {
      setTimeout(() => {
        setWishMade(true);
        fireCelebration();
      }, 500);
    }
  };

  const handleBlowAll = () => {
    const all = new Set<number>();
    for (let i = 0; i < totalCandles; i++) all.add(i);
    setExtinguished(all);
    setTimeout(() => {
      setWishMade(true);
      fireCelebration();
    }, 500);
  };

  const handleRelight = () => {
    setExtinguished(new Set());
    setWishMade(false);
  };

  return (
    <section id="cake" className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center">
      {/* Background glow behind cake */}
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-romantic-500/20 via-gold-400/15 to-lavender-400/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full text-center space-y-8 z-10">
        {/* Header Texts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-gold-300/30 text-xs sm:text-sm text-gold-200">
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            <span>A Moment of Celebration</span>
          </div>

          {/* “Someone very special was born today.” */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            {BIRTHDAY_CONFIG.cake.title}
          </h2>

          {/* “And somehow, I got lucky enough to call her my wife. ❤️” */}
          <p className="font-sans text-lg sm:text-2xl text-romantic-200/90 font-light max-w-xl mx-auto">
            {BIRTHDAY_CONFIG.cake.subtitle}
          </p>
        </motion.div>

        {/* The Animated Interactive Cake */}
        <div className="relative pt-12 pb-6 flex flex-col items-center justify-center">
          {/* Candles Container */}
          <div className="relative flex justify-center items-end gap-5 sm:gap-8 z-20 mb-[-6px]">
            {Array.from({ length: totalCandles }).map((_, index) => {
              const isExtinguished = extinguished.has(index);
              return (
                <div
                  key={index}
                  onClick={() => handleCandleClick(index)}
                  className="group flex flex-col items-center cursor-pointer select-none transition-transform hover:scale-110 active:scale-95"
                  title={isExtinguished ? "Blown out!" : "Click to blow candle!"}
                >
                  {/* Flame or Smoke */}
                  <div className="h-8 flex items-end justify-center">
                    {!isExtinguished ? (
                      <div className="flame group-hover:scale-125 transition-transform" />
                    ) : (
                      <div className="smoke-puff text-cream-300/60 text-xs select-none">
                        💨
                      </div>
                    )}
                  </div>

                  {/* Candle Stick */}
                  <div className="relative w-3.5 sm:w-4 h-16 sm:h-20 rounded-t-sm shadow-md overflow-hidden bg-gradient-to-b from-cream-100 via-pink-200 to-romantic-300 border-x border-t border-white/40">
                    {/* Candle spiral stripes */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(242,84,119,0.35)_6px,rgba(242,84,119,0.35)_12px)]" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Multi-Tier Cake Body */}
          <div className="relative flex flex-col items-center z-10 w-full max-w-xs sm:max-w-md">
            {/* Top Tier */}
            <div className="w-48 sm:w-60 h-20 sm:h-24 rounded-t-3xl bg-gradient-to-r from-pink-200 via-romantic-200 to-peach-100 shadow-xl border-t-4 border-white/60 relative overflow-hidden flex items-center justify-center">
              {/* Frosting Drips */}
              <div className="absolute top-0 inset-x-0 h-4 bg-white/70 rounded-b-xl shadow-sm" />
              <div className="flex gap-4">
                <span className="text-xl">🍓</span>
                <span className="text-xl">✨</span>
                <span className="text-xl">🍓</span>
              </div>
            </div>

            {/* Middle Tier */}
            <div className="w-64 sm:w-80 h-22 sm:h-28 rounded-t-3xl bg-gradient-to-r from-romantic-300 via-pink-300 to-rose-200 shadow-2xl border-t-4 border-white/70 relative overflow-hidden flex items-center justify-center">
              {/* Frosting beads */}
              <div className="absolute top-0 inset-x-0 flex justify-around px-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className="w-3 h-3 bg-white/90 rounded-full shadow-sm" />
                ))}
              </div>
              <p className="font-serif italic font-bold text-velvet-900/80 text-sm sm:text-base tracking-widest uppercase">
                Happy Birthday {BIRTHDAY_CONFIG.recipientName}
              </p>
            </div>

            {/* Bottom Tier */}
            <div className="w-80 sm:w-96 h-24 sm:h-32 rounded-t-3xl bg-gradient-to-r from-rose-400 via-romantic-400 to-pink-400 shadow-2xl border-t-4 border-white/80 relative overflow-hidden flex items-center justify-center">
              <div className="absolute top-0 inset-x-0 h-4 bg-white/80 rounded-b-2xl shadow" />
              <div className="flex items-center gap-6">
                <Heart className="w-5 h-5 text-white/90 fill-white" />
                <span className="font-serif font-semibold text-white/90 tracking-wide text-xs sm:text-sm">
                  Made With Love ❤️ Sunil
                </span>
                <Heart className="w-5 h-5 text-white/90 fill-white" />
              </div>
            </div>

            {/* Luxurious Golden Cake Stand */}
            <div className="w-[340px] sm:w-[420px] h-6 rounded-full bg-gradient-to-r from-gold-500 via-gold-200 to-gold-600 shadow-glass border-b-2 border-gold-600" />
            <div className="w-28 sm:w-36 h-10 bg-gradient-to-b from-gold-400 to-gold-600 rounded-b-2xl shadow-lg border-t border-gold-200" />
          </div>

          {/* Candle Blow Status / Instruction */}
          <div className="mt-8 flex flex-col items-center gap-3">
            {!isAllBlown ? (
              <>
                <p className="text-sm sm:text-base text-cream-200/80 font-sans flex items-center gap-2">
                  <Wind className="w-4 h-4 text-romantic-300 animate-pulse" />
                  <span>{BIRTHDAY_CONFIG.cake.instruction}</span>
                  <span className="font-semibold text-gold-300">
                    ({extinguished.size}/{totalCandles})
                  </span>
                </p>

                <button
                  onClick={handleBlowAll}
                  className="px-5 py-2 rounded-full glass-card text-xs sm:text-sm text-romantic-200 hover:text-white hover:border-romantic-400/50 transition-colors flex items-center gap-2"
                >
                  <Wind className="w-3.5 h-3.5" />
                  <span>Blow all candles at once</span>
                </button>
              </>
            ) : (
              <button
                onClick={handleRelight}
                className="px-4 py-1.5 rounded-full glass-card text-xs text-cream-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Light candles again</span>
              </button>
            )}
          </div>
        </div>

        {/* Wish Revealed Card */}
        <AnimatePresence>
          {wishMade && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="p-8 sm:p-10 rounded-3xl glass-panel border border-gold-300/40 shadow-glow-gold space-y-4 max-w-xl mx-auto"
            >
              <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-300/60 mx-auto flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-gold-300 animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              {/* “Make a wish, Roshani…” */}
              <h3 className="font-serif text-2xl sm:text-4xl font-bold gold-gradient-text">
                {BIRTHDAY_CONFIG.cake.allBlownTitle}
              </h3>

              {/* “I hope every wish you make today finds its way to you.” */}
              <p className="font-sans text-base sm:text-xl text-cream-100 font-light leading-relaxed">
                {BIRTHDAY_CONFIG.cake.allBlownMessage}
              </p>

              <div className="pt-2 flex justify-center items-center gap-2 text-romantic-300 text-sm font-medium">
                <Heart className="w-4 h-4 fill-romantic-500 text-romantic-500" />
                <span>Your wish has been sent to the stars</span>
                <Heart className="w-4 h-4 fill-romantic-500 text-romantic-500" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
