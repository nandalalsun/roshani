import confetti from 'canvas-confetti';

/**
 * Fires a gorgeous heart-shaped & romantic burst
 */
export function fireHearts() {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0.8,
    decay: 0.94,
    startVelocity: 30,
    colors: ['#F25477', '#FFA066', '#B690FF', '#FFE9ED', '#E4BE5A'],
  };

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 1.2,
    shapes: ['circle'],
    origin: { y: 0.6 },
  });

  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 2,
    shapes: ['star'],
    origin: { y: 0.6 },
  });
}

/**
 * Big celebratory explosion for cake wishes, quiz completion & gift opening
 */
export function fireCelebration() {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const colors = ['#F25477', '#E4BE5A', '#FFB1C0', '#B690FF', '#FFF'];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  })();
}

/**
 * Romantic sparkle rain from top
 */
export function fireSparkleRain() {
  confetti({
    particleCount: 40,
    angle: 90,
    spread: 120,
    startVelocity: 15,
    decay: 0.92,
    gravity: 0.6,
    origin: { y: 0, x: 0.5 },
    colors: ['#FFE9ED', '#FA849C', '#F4E8BD', '#D1B8FF'],
  });
}
