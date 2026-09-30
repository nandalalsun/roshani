import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Heart } from 'lucide-react';
import { BIRTHDAY_CONFIG, TimelineEvent } from '../data/birthdayConfig';
import { getAssetUrl } from '../utils/assetPath';

export const OurStorySection: React.FC = () => {
  const events: TimelineEvent[] = BIRTHDAY_CONFIG.timeline.events;

  return (
    <section id="story" className="relative min-h-screen py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto w-full z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-gold-300/30 text-xs sm:text-sm text-gold-200">
            <Compass className="w-3.5 h-3.5 text-gold-300" />
            <span>{BIRTHDAY_CONFIG.timeline.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {BIRTHDAY_CONFIG.timeline.title}
          </h2>

          <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-lg mx-auto">
            {BIRTHDAY_CONFIG.timeline.subtitle}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central glowing vertical spine line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-romantic-500 via-gold-400 to-lavender-500 opacity-30 pointer-events-none" />

          <div className="space-y-12 sm:space-y-16">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-velvet-950 border-2 border-romantic-400 flex items-center justify-center shadow-glow-pink">
                      <Heart className="w-3.5 h-3.5 text-romantic-400 fill-romantic-400" />
                    </div>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Timeline Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="group rounded-3xl glass-card p-6 sm:p-7 space-y-4 hover:border-romantic-400/50 transition-all duration-300">
                      {/* Chapter Date & Tag */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-romantic-500/15 border border-romantic-400/30 text-xs font-semibold text-romantic-200">
                          <Calendar className="w-3 h-3 text-romantic-300" />
                          <span>{event.date}</span>
                        </div>
                        {event.tag && (
                          <span className="text-[11px] font-mono uppercase tracking-wider text-gold-300/80 px-2 py-0.5 rounded-md bg-gold-400/10 border border-gold-300/20">
                            {event.tag}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-romantic-200 transition-colors">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-sm sm:text-base text-cream-200/90 font-light leading-relaxed">
                        {event.description}
                      </p>

                      {/* Photo Thumbnail */}
                      {event.photoUrl && (
                        <div className="relative pt-2 rounded-2xl overflow-hidden">
                          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-romantic-400/30 transition-all">
                            <img
                              src={getAssetUrl(event.photoUrl)}
                              alt={event.title}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                // Graceful fallback if custom image is missing
                                (e.currentTarget as HTMLImageElement).src = getAssetUrl('photos/photo1.jpg');
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
