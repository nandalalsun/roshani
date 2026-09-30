import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  type: 'heart' | 'star' | 'circle';
  delay: number;
}

export const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate gentle background ambient particles
    const count = 35;
    const newParticles: Particle[] = [];
    const types: ('heart' | 'star' | 'circle')[] = ['heart', 'star', 'circle', 'heart', 'star'];

    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // percentage
        y: Math.random() * 100,
        size: Math.random() * 14 + 10,
        speed: Math.random() * 15 + 18, // seconds
        opacity: Math.random() * 0.45 + 0.15,
        type: types[Math.floor(Math.random() * types.length)],
        delay: Math.random() * 10,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Soft Romantic Ambient Light Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-romantic-500/15 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-lavender-400/15 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-400/10 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Floating Elements */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute select-none will-change-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `floatUp ${p.speed}s linear infinite`,
            animationDelay: `-${p.delay}s`,
          }}
        >
          {p.type === 'heart' && <span className="text-romantic-400/80 drop-shadow-[0_0_8px_rgba(242,84,119,0.4)]">♥</span>}
          {p.type === 'star' && <span className="text-gold-200/90 drop-shadow-[0_0_8px_rgba(228,190,90,0.5)]">✦</span>}
          {p.type === 'circle' && (
            <div
              className="rounded-full bg-lavender-300/40 blur-[1px]"
              style={{ width: `${p.size / 2}px`, height: `${p.size / 2}px` }}
            />
          )}
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 0.6;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-15vh) rotate(360deg) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
