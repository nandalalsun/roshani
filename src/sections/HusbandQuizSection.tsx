import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, Heart, Award, ArrowRight, RotateCcw } from 'lucide-react';
import { BIRTHDAY_CONFIG, QuizQuestion } from '../data/birthdayConfig';
import { fireHearts } from '../utils/confetti';

export const HusbandQuizSection: React.FC = () => {
  const questions: QuizQuestion[] = BIRTHDAY_CONFIG.game.questions;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (key: string) => {
    if (selectedKey !== null) return;
    setSelectedKey(key);
    fireHearts();
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedKey(null);
    } else {
      setIsCompleted(true);
      fireHearts();
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedKey(null);
    setIsCompleted(false);
  };

  const currentOption = selectedKey ? currentQ.options.find(o => o.key === selectedKey) : null;

  return (
    <section id="quiz" className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto w-full z-10 space-y-8">
        {/* Section Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-pink-300/30 text-xs sm:text-sm text-pink-200">
            <HelpCircle className="w-3.5 h-3.5 text-romantic-400" />
            <span>{BIRTHDAY_CONFIG.game.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            {BIRTHDAY_CONFIG.game.title}
          </h2>

          <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-md mx-auto">
            {BIRTHDAY_CONFIG.game.description}
          </p>
        </motion.div>

        {!isCompleted ? (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/15 shadow-glass space-y-6"
          >
            {/* Progress Bar & Question Counter */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-cream-300/80">
                <span className="font-medium text-romantic-300">
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <span>Husband Loyalty Score: 100% 💖</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-romantic-500 to-peach-400 transition-all duration-500"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="pt-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((opt) => {
                const isSelected = selectedKey === opt.key;
                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt.key)}
                    disabled={selectedKey !== null}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-romantic-600/30 border-romantic-400 text-white shadow-glow-pink scale-[1.01]'
                        : selectedKey !== null
                        ? 'bg-white/5 border-white/10 text-cream-300/50'
                        : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-romantic-400/40 text-cream-100 hover:scale-[1.01]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                        isSelected
                          ? 'bg-romantic-500 text-white shadow-glow-pink'
                          : 'bg-white/10 text-cream-300 group-hover:bg-romantic-500/20 group-hover:text-romantic-300'
                      }`}>
                        {opt.key}
                      </span>
                      <span className="text-sm sm:text-base font-medium">
                        {opt.text}
                      </span>
                    </div>

                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-romantic-400 shrink-0 animate-bounce" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Funny reaction & explanation reveal */}
            <AnimatePresence>
              {selectedKey && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3 pt-2"
                >
                  {currentOption?.funnyReaction && (
                    <div className="p-3.5 rounded-xl bg-romantic-500/15 border border-romantic-400/30 text-romantic-200 text-sm font-medium flex items-center gap-2">
                      <span className="text-lg">💬</span>
                      <span>{currentOption.funnyReaction}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-cream-300/80 italic pl-1">
                    “{currentQ.explanation}”
                  </p>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-romantic-500 to-peach-500 text-white font-medium text-sm shadow-glow-pink hover:opacity-95 transition-opacity"
                    >
                      <span>{currentIndex + 1 === questions.length ? "Finish Quiz 🏆" : "Next Question"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Quiz Results Completion Card */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 sm:p-10 rounded-3xl glass-panel border border-gold-300/40 text-center space-y-6 shadow-glow-gold"
          >
            <div className="w-20 h-20 rounded-full bg-gold-400/20 border-2 border-gold-300 mx-auto flex items-center justify-center shadow-glow-gold">
              <Award className="w-10 h-10 text-gold-300 animate-pulse" />
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-gold-300 font-mono font-semibold">
                Perfect Score! 100/100
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold romantic-gradient-text">
                {BIRTHDAY_CONFIG.game.finalCongratulations}
              </h3>
              <p className="text-sm sm:text-base text-cream-200 font-light max-w-md mx-auto">
                {BIRTHDAY_CONFIG.game.finalSubtext}
              </p>
            </div>

            <div className="pt-4 flex justify-center items-center gap-4">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 rounded-full glass-card text-xs sm:text-sm text-cream-200 hover:text-white flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Play Again</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('constellation');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-full bg-romantic-500 text-white font-medium text-xs sm:text-sm hover:bg-romantic-600 transition-colors flex items-center gap-2 shadow-glow-pink"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>See What I Love About You</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
