# 💖 A Little World Made Just for Roshani

An interactive, romantic, cinematic birthday website created with love by **Sunil** for his wife **Roshani**.

Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, designed specifically to run 100% in the browser and deploy effortlessly to **GitHub Pages** with zero backend, zero databases, and zero external paid services.

---

## ✨ Features & Interactive Experiences

1. **Cinematic Hero Opening**: Fullscreen atmospheric greeting with *"Hey Roshani… ❤️"*, playful warning, and the animated *"✨ Open Your Birthday Surprise ✨"* button that bursts with confetti and hearts.
2. **Interactive Birthday Cake**: Realistic flickering candles that Roshani can tap individually (or blow all at once) to extinguish. Triggers the heartfelt wish: *"Make a wish, Roshani… I hope every wish you make today finds its way to you."*
3. **Husband Quiz ("How Well Do You Know Your Husband? 👀")**: 5 playful, hilarious multiple-choice questions with funny reaction messages, live score tracking, and a 100% guaranteed celebration score.
4. **Constellation of Love ("A Few Things I Love About You…")**: Interactive celestial star and heart constellation where tapping each star reveals a romantic whisper from Sunil's heart.
5. **Chapters of Our Story**: Elegant vertical timeline tracing the journey of your love from first encounter to future adventures with photos and milestone tags.
6. **Polaroid Memory Wall**: Rotated polaroid photo frames with washi tape, handwritten captions, and a fullscreen lightbox modal with next/prev controls.
7. **Wax-Sealed Love Letter**: 3D envelope with golden wax seal that unfolds into a parchment letter with handwritten calligraphy.
8. **20 Reasons to Smile**: Instant mood booster button generating randomized sweet reasons to smile with 3D card-flip animations.
9. **Surprise Virtual Gift**: 3D animated gift box with golden ribbon that pops open with an explosion of hearts revealing: *"My favorite gift isn't something I can wrap. It's you. ❤️"*
10. **Final Cinematic Screen**: Emotional closing promise, *"↻ Replay Our Story"* button, and music controls.
11. **Secret Easter Egg**: A tiny hidden heart in the footer that reveals an intimate secret message after 5 playful taps.
12. **Floating Audio Player**: Glassmorphism music pill with animated equalizer bars. Plays your custom song or a built-in soothing Web Audio romantic music box melody.

---

## 🚀 Quick Start (Run Locally)

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Open your browser at:
# http://localhost:5173
```

To test the production build locally:

```bash
npm run build
npm run preview
```

---

## 🎨 How to Customize Everything

Everything you need to customize is located in **one single file**:

📁 [`src/data/birthdayConfig.ts`](file:///Users/sunil/.gemini/antigravity-ide/scratch/roshani/src/data/birthdayConfig.ts)

### 1. Change Roshani's Name
In `src/data/birthdayConfig.ts`, update:
```ts
recipientName: "Roshani",
```

### 2. Change Your Name
In `src/data/birthdayConfig.ts`, update:
```ts
senderName: "Sunil",
```

### 3. Change the Love Letter
In `src/data/birthdayConfig.ts`, scroll down to `loveLetter`:
```ts
loveLetter: {
  envelopePrompt: "Roshani, you have one letter waiting for you.",
  salutation: "Happy Birthday, Roshani ❤️",
  paragraphs: [
    "Today isn't just a reminder that you were born.",
    "It's a reminder that my world became infinitely better because you became part of it.",
    // Add or modify any paragraphs here!
  ],
  signature: "Forever & Always,\nSunil ❤️",
}
```

### 4. Add Your Own Photos
1. Copy your photos into the `public/photos/` folder:
   - `public/photos/photo1.jpg`
   - `public/photos/photo2.jpg`
   - ...up to `photo8.jpg` (or any custom names).
2. If your files have different names or formats (`.png`, `.webp`), simply update their filenames in `src/data/birthdayConfig.ts` under `gallery.photos` and `timeline.events`.

### 5. Change Photo Captions
In `src/data/birthdayConfig.ts`, update the `caption` and `date` for any photo:
```ts
gallery: {
  photos: [
    {
      id: 1,
      url: "photos/photo1.jpg",
      caption: "My favorite person ❤️",
      date: "Always",
      rotation: "-rotate-2",
    },
    // ...
  ]
}
```

### 6. Add or Edit Timeline Memories
In `src/data/birthdayConfig.ts`, customize the `timeline.events` array:
```ts
timeline: {
  events: [
    {
      id: 1,
      date: "Chapter 1",
      title: "The day our story began",
      description: "The moment our paths crossed...",
      photoUrl: "photos/memory1.jpg",
      tag: "First Encounter",
    },
    // ...
  ]
}
```

### 7. Change Game Questions & Answers
In `src/data/birthdayConfig.ts`, edit the 5 questions under `game.questions`:
```ts
game: {
  questions: [
    {
      id: 1,
      question: "Who loves Roshani more?",
      options: [
        { key: 'A', text: "Me", isCorrect: true, funnyReaction: "Spot on!" },
        { key: 'B', text: "Also me", isCorrect: true, funnyReaction: "100% verified." },
        { key: 'C', text: "Obviously me ❤️", isCorrect: true, funnyReaction: "Always me." },
      ],
      explanation: "Sunil loves you with all his heart!",
    },
    // ...
  ]
}
```

### 8. Change Reasons-to-Smile Messages
In `src/data/birthdayConfig.ts`, add or edit items in `reasonsToSmile.reasons`:
```ts
reasonsToSmile: {
  reasons: [
    "Because you're ridiculously beautiful — inside and out.",
    "Because someone is completely obsessed with you.",
    // Add your own inside jokes or sweet compliments!
  ]
}
```

### 9. Add Your Favorite Song (Music)
1. Place your audio file in `public/music/` and name it `our-song.mp3`.
2. If you use a different filename, change `music.filename` in `src/data/birthdayConfig.ts`:
   ```ts
   music: {
     filename: "our-song.mp3",
     songTitle: "Our Favorite Melody",
     artist: "With Love, Sunil",
   }
   ```
3. *Note*: The player will **never autoplay** (browsers block autoplay and it respects the user's choice). When clicked, it plays your MP3. If the file is not found, an ambient romantic music-box melody is generated automatically via Web Audio so it always works!

---

## 🌐 GitHub Pages Deployment Guide

This project is fully configured for automated GitHub Actions deployment.

### Step 1: Verify Base Repository Name
In [`vite.config.ts`](file:///Users/sunil/.gemini/antigravity-ide/scratch/roshani/vite.config.ts), verify that `REPOSITORY_NAME` matches your repository name:
```ts
const REPOSITORY_NAME = 'roshani';
```
*(If your repository is named something else, e.g. `roshani-birthday`, change this string accordingly).*

### Step 2: Push to GitHub
Commit and push your files to your GitHub repository:
```bash
git add .
git commit -m "feat: complete interactive birthday website for Roshani"
git push origin main
```

### Step 3: Enable GitHub Pages via GitHub Actions
1. Open your repository on GitHub: `https://github.com/nandalalsun/roshani`
2. Click **Settings** (top navigation tab)
3. In the left sidebar, click **Pages** (under "Code and automation")
4. Under **Build and deployment → Source**, change the dropdown from *Deploy from a branch* to:
   👉 **GitHub Actions**
5. Go to the **Actions** tab in your repository — you will see the `Deploy to GitHub Pages` workflow running.
6. Once the checkmark turns green (usually 1–2 minutes), your website will be live at:
   👉 **`https://nandalalsun.github.io/roshani/`**

---

## 📱 Mobile First Design

Optimized and verified across all viewport sizes:
- iPhone SE / Mini (375px)
- iPhone 12 / 13 / 14 / 15 (390px, 430px)
- iPads & Android Tablets (768px+)
- Desktop & Mac screens (1024px, 1440px+)

No horizontal scroll, large comfortable touch targets, smooth 60fps animations, and respects `prefers-reduced-motion`.

---

## ❤️ Made with Love

Crafted with all the love in the universe by **Sunil** for **Roshani**. Happy Birthday! 🎂✨
