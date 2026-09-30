import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { romanticAudio } from '../utils/audioPlayer';
import { BIRTHDAY_CONFIG } from '../data/birthdayConfig';

export const FloatingMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = romanticAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = async () => {
    setHasInteracted(true);
    await romanticAudio.toggle();
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      {/* Gentle floating tooltip when music is paused */}
      {!isPlaying && !hasInteracted && (
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-velvet-900/90 border border-romantic-400/30 text-romantic-200 text-xs shadow-glass backdrop-blur-md animate-bounce">
          <Music className="w-3.5 h-3.5 text-romantic-400" />
          <span>Play our song? 🎵</span>
        </div>
      )}

      {/* Music Action Pill */}
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-glass ${
          isPlaying
            ? 'bg-romantic-600/40 border-romantic-400/60 text-white shadow-glow-pink'
            : 'bg-velvet-900/80 border-white/15 text-cream-200 hover:border-romantic-400/40 hover:bg-velvet-850/90'
        }`}
      >
        {/* Animated Sound Wave Bars when playing */}
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-4 w-4">
            <span className="w-1 bg-romantic-300 rounded-full animate-[musicBar_0.8s_ease-in-out_infinite_alternate]" style={{ height: '60%' }} />
            <span className="w-1 bg-gold-300 rounded-full animate-[musicBar_1.1s_ease-in-out_infinite_alternate]" style={{ height: '100%' }} />
            <span className="w-1 bg-pink-300 rounded-full animate-[musicBar_0.6s_ease-in-out_infinite_alternate]" style={{ height: '40%' }} />
          </div>
        ) : (
          <VolumeX className="w-4 h-4 text-cream-300/70 group-hover:text-romantic-300 transition-colors" />
        )}

        <div className="flex flex-col text-left">
          <span className="text-xs font-semibold tracking-wide">
            {isPlaying ? BIRTHDAY_CONFIG.music.songTitle : 'Play Music'}
          </span>
          {isPlaying && (
            <span className="text-[10px] text-romantic-200/80 font-normal leading-none">
              {BIRTHDAY_CONFIG.music.artist}
            </span>
          )}
        </div>

        {isPlaying && (
          <Volume2 className="w-3.5 h-3.5 text-romantic-300 animate-pulse ml-0.5" />
        )}
      </button>

      <style>{`
        @keyframes musicBar {
          0% { height: 25%; }
          100% { height: 100%; }
        }
      `}</style>
    </div>
  );
};
