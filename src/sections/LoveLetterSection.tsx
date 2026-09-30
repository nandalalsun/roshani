import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, X } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../data/birthdayConfig';
import { fireHearts } from '../utils/confetti';

export const LoveLetterSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const letter = BIRTHDAY_CONFIG.loveLetter;

  const handleOpen = () => {
    setIsOpen(true);
    fireHearts();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section id="letter" className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center">
      {/* Background soft glow */}
      <div className="absolute w-[500px] h-[500px] bg-romantic-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full z-10 space-y-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-rose-300/30 text-xs sm:text-sm text-rose-200">
            <Mail className="w-3.5 h-3.5 text-romantic-400" />
            <span>Special Delivery</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {letter.envelopePrompt}
          </h2>

          <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-md mx-auto">
            Written from the deepest corner of my heart, sealed just for you.
          </p>
        </motion.div>

        {/* Envelope Container */}
        <div className="relative flex justify-center items-center py-6">
          {!isOpen ? (
            <motion.div
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="relative w-80 sm:w-96 cursor-pointer group"
              onClick={handleOpen}
            >
              {/* Envelope Body */}
              <div className="relative h-56 sm:h-64 rounded-3xl bg-gradient-to-br from-romantic-800 via-rose-900 to-velvet-900 border-2 border-romantic-400/30 shadow-2xl envelope-shadow p-6 flex flex-col justify-between overflow-hidden">
                {/* Envelope Flap Lines */}
                <div className="absolute -top-1 inset-x-0 h-28 bg-gradient-to-b from-romantic-700/60 to-transparent clip-path-triangle pointer-events-none" />
                
                {/* Subtle Postage Stamp */}
                <div className="self-end w-14 h-16 rounded-lg bg-pink-100/10 border-2 border-dashed border-romantic-300/40 p-1 flex flex-col items-center justify-center">
                  <span className="text-xl">💌</span>
                  <span className="text-[9px] font-mono text-romantic-200 uppercase mt-0.5">ROSHANI</span>
                </div>

                {/* Wax Seal in Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-romantic-600 via-rose-500 to-red-600 shadow-glow-pink flex items-center justify-center border-2 border-gold-300/60 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-gold-200 fill-gold-200" />
                </div>

                {/* Recipient Address */}
                <div className="text-left font-serif text-cream-200 space-y-0.5">
                  <p className="text-xs uppercase tracking-widest text-gold-300/80 font-mono">To My Beautiful Wife:</p>
                  <p className="text-xl font-bold text-white font-handwriting">{BIRTHDAY_CONFIG.recipientName}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <button
                  onClick={handleOpen}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-romantic-500 to-peach-500 text-white font-semibold text-base shadow-glow-pink hover:shadow-glow-pink-lg transition-all flex items-center gap-2.5 mx-auto"
                >
                  <Sparkles className="w-4 h-4 text-gold-200" />
                  <span>{letter.buttonOpen}</span>
                  <Sparkles className="w-4 h-4 text-gold-200" />
                </button>
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>

      {/* Unfolded Love Letter Modal / Parchment */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="relative w-full max-w-2xl my-auto rounded-3xl bg-gradient-to-b from-[#251530] to-[#170E21] border-2 border-romantic-400/40 p-6 sm:p-12 shadow-glow-pink text-left"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 p-2 rounded-full text-cream-300 hover:text-white bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close letter"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Letter Header */}
              <div className="border-b border-romantic-400/20 pb-5 mb-6 flex justify-between items-end flex-wrap gap-2">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-300 font-mono">
                    {letter.date}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold romantic-gradient-text mt-1">
                    {letter.salutation}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-romantic-400">
                  <Heart className="w-5 h-5 fill-romantic-500" />
                  <Heart className="w-4 h-4 fill-romantic-400" />
                  <Heart className="w-3 h-3 fill-romantic-300" />
                </div>
              </div>

              {/* Letter Body */}
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-3 font-sans text-cream-100 text-base sm:text-lg leading-relaxed font-light">
                {letter.paragraphs.map((p, idx) => (
                  <p key={idx} className="whitespace-pre-line text-cream-100/90">
                    {p}
                  </p>
                ))}
              </div>

              {/* Letter Footer Signature */}
              <div className="border-t border-romantic-400/20 pt-6 mt-6 flex justify-between items-center flex-wrap gap-4">
                <div className="font-handwriting text-3xl sm:text-4xl text-romantic-300 font-bold whitespace-pre-line">
                  {letter.signature}
                </div>

                <button
                  onClick={handleClose}
                  className="px-5 py-2 rounded-full glass-card text-xs sm:text-sm text-cream-200 hover:text-white transition-colors"
                >
                  {letter.buttonClose}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
