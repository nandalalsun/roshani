import { BIRTHDAY_CONFIG } from '../data/birthdayConfig';
import { getAssetUrl } from './assetPath';

/**
 * Romantic Audio Engine:
 * - Plays local MP3 if available (/music/our-song.mp3)
 * - Has an elegant built-in Web Audio romantic music box synthesizer fallback
 *   so the website sounds magical even before the user puts their mp3 file in!
 */
class RomanticAudioManager {
  private audio: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;
  private isSynthesizing = false;
  private synthInterval: number | null = null;
  private isPlaying = false;
  private listeners: ((playing: boolean) => void)[] = [];

  constructor() {
    // Setup audio element for MP3
    if (typeof window !== 'undefined') {
      const musicPath = getAssetUrl(`music/${BIRTHDAY_CONFIG.music.filename}`);
      this.audio = new Audio(musicPath);
      this.audio.loop = true;
      this.audio.volume = 0.7;

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });
    }
  }

  public subscribe(listener: (playing: boolean) => void) {
    this.listeners.push(listener);
    listener(this.isPlaying);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l(this.isPlaying));
  }

  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      return await this.play();
    }
  }

  public async play(): Promise<boolean> {
    if (!this.audio) return false;

    try {
      // Try playing MP3
      await this.audio.play();
      this.isPlaying = true;
      this.notify();
      return true;
    } catch {
      // If MP3 fails (e.g. 404 placeholder), use Web Audio music box melody
      if (BIRTHDAY_CONFIG.music.fallbackEnabled) {
        this.startMusicBoxSynth();
        this.isPlaying = true;
        this.notify();
        return true;
      }
      this.isPlaying = false;
      this.notify();
      return false;
    }
  }

  public pause() {
    if (this.audio) {
      this.audio.pause();
    }
    this.stopMusicBoxSynth();
    this.isPlaying = false;
    this.notify();
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  // --- Romantic Pentatonic Music Box Synthesizer Fallback ---
  private startMusicBoxSynth() {
    if (this.isSynthesizing) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      this.audioCtx = new AudioContextClass();
      this.isSynthesizing = true;

      // Pentatonic warm romantic notes (C4, D4, E4, G4, A4, C5, D5, E5) in Hz
      const notes = [
        261.63, 293.66, 329.63, 392.00, 440.00, 
        523.25, 587.33, 659.25, 783.99, 880.00
      ];

      // A sweet music box pattern
      const pattern = [0, 2, 4, 7, 5, 4, 2, 1, 3, 5, 8, 7, 5, 3, 4, 2];
      let step = 0;

      const playTone = (freq: number) => {
        if (!this.audioCtx || this.audioCtx.state === 'closed') return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        // Music box timbre: sine with soft bell harmonics
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        // Gentle pluck envelope
        const now = this.audioCtx.currentTime;
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 1.8);
      };

      this.synthInterval = window.setInterval(() => {
        if (!this.isSynthesizing) return;
        const noteIndex = pattern[step % pattern.length];
        const freq = notes[noteIndex % notes.length];
        playTone(freq);

        // Occasionally play a soft low harmony bass note
        if (step % 4 === 0) {
          playTone(notes[0] / 2);
        }

        step++;
      }, 420);
    } catch {
      // AudioContext not allowed without gesture or disabled
    }
  }

  private stopMusicBoxSynth() {
    this.isSynthesizing = false;
    if (this.synthInterval !== null) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
    if (this.audioCtx) {
      try {
        this.audioCtx.close();
      } catch {
        // ignore
      }
      this.audioCtx = null;
    }
  }
}

export const romanticAudio = new RomanticAudioManager();
