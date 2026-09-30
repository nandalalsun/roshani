/**
 * ============================================================================
 * 💖 ROSHANI'S BIRTHDAY CONFIGURATION
 * ============================================================================
 * You can customize everything from this single file:
 * - Partner & Sender names
 * - Opening screen text
 * - Interactive Birthday Cake messages
 * - The 5 playful quiz questions
 * - Love notes for the constellation
 * - "Our Story" timeline milestones
 * - Photo gallery items & captions
 * - The complete love letter
 * - 20 reasons to smile
 * - Surprise gift box text
 * - Final cinematic conclusion
 * - Music file & Easter egg secret
 * ============================================================================
 */

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
    isCorrect?: boolean;
    funnyReaction?: string;
  }[];
  explanation: string;
}

export interface LoveNote {
  id: number;
  title: string;
  message: string;
  icon?: string;
  color?: string; // Tailwind color accent
}

export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  photoUrl: string;
  tag?: string;
}

export interface GalleryPhoto {
  id: number;
  url: string;
  caption: string;
  rotation?: string; // CSS rotation for polaroid effect e.g. '-rotate-2'
  date?: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export const BIRTHDAY_CONFIG = {
  // -------------------------------------------------------------
  // 1. NAMES & HERO HEADINGS
  // -------------------------------------------------------------
  recipientName: "Roshani",
  senderName: "Sunil",
  relationship: "wife",
  websiteTitle: "A Little World Made Just for Roshani ❤️",
  subtitle: "Every love story is special, but ours is my favorite.",

  // Opening screen sequence
  opening: {
    greeting: "Hey Roshani… ❤️",
    subheading: "I made a little something for you.",
    buttonText: "✨ Open Your Birthday Surprise ✨",
    warningText: "“Warning: You may smile a lot.” 😌❤️",
  },

  // -------------------------------------------------------------
  // 2. INTERACTIVE BIRTHDAY CAKE
  // -------------------------------------------------------------
  cake: {
    title: "Someone very special was born today.",
    subtitle: "And somehow, I got lucky enough to call her my wife. ❤️",
    candlesCount: 5,
    instruction: "Tap each glowing candle to blow it out 🎂",
    allBlownTitle: "Make a wish, Roshani…",
    allBlownMessage: "I hope every wish you make today finds its way to you.",
    buttonMakeWish: "✨ Make My Birthday Wish ✨",
  },

  // -------------------------------------------------------------
  // 3. MINI GAME: HOW WELL DO YOU KNOW YOUR HUSBAND?
  // -------------------------------------------------------------
  game: {
    badge: "Mini Game",
    title: "How Well Do You Know Your Husband? 👀",
    description: "A very serious, highly scientific test designed by your husband Sunil.",
    finalCongratulations: "Congratulations! You got the most important answer correct: I love you. ❤️",
    finalSubtext: "Score: 100% (Because you're my wife and you're always right anyway!)",
    questions: [
      {
        id: 1,
        question: "Who loves Roshani more?",
        options: [
          { key: 'A', text: "Me", isCorrect: true, funnyReaction: "Spot on! But wait, so are the others..." },
          { key: 'B', text: "Also me", isCorrect: true, funnyReaction: "Exactly true! 100% verified." },
          { key: 'C', text: "Obviously me ❤️", isCorrect: true, funnyReaction: "Bingooo! Always me." },
        ],
        explanation: "There is no wrong answer here — Sunil loves you with all his heart!",
      },
      {
        id: 2,
        question: "What is Sunil's absolute favorite view in the entire world?",
        options: [
          { key: 'A', text: "The Swiss Alps at sunrise", isCorrect: false, funnyReaction: "Nice mountains, but nah!" },
          { key: 'B', text: "Roshani laughing until her eyes crinkle ❤️", isCorrect: true, funnyReaction: "A million times YES! 🥰" },
          { key: 'C', text: "A fresh slice of warm pizza", isCorrect: false, funnyReaction: "Close second, but you still win!" },
        ],
        explanation: "Nothing in this world lights up my day like your laugh and bright smile.",
      },
      {
        id: 3,
        question: "When Roshani says 'I'm not even hungry', what does it actually mean?",
        options: [
          { key: 'A', text: "She genuinely is not hungry", isCorrect: false, funnyReaction: "Said no husband ever 😂" },
          { key: 'B', text: "She will eat 60% of Sunil's food as tax 🍟", isCorrect: true, funnyReaction: "Guilty as charged! Every single time." },
          { key: 'C', text: "She just wants a tiny sip of water", isCorrect: false, funnyReaction: "Nice try!" },
        ],
        explanation: "What is mine is yours, especially the fries, desserts, and snacks!",
      },
      {
        id: 4,
        question: "Who won the jackpot when we got married?",
        options: [
          { key: 'A', text: "Sunil (by a landslide! 🏆)", isCorrect: true, funnyReaction: "Undeniable mathematical fact." },
          { key: 'B', text: "Both of us (very sweet answer)", isCorrect: true, funnyReaction: "So wholesome, but I still got the better deal!" },
          { key: 'C', text: "Nobody, it was a draw", isCorrect: false, funnyReaction: "Never! I won the grand prize in life." },
        ],
        explanation: "Out of all 8 billion people on Earth, I got to hold your hand forever.",
      },
      {
        id: 5,
        question: "How long is Sunil going to love Roshani?",
        options: [
          { key: 'A', text: "As long as the stars shine ✨", isCorrect: true, funnyReaction: "And far beyond that." },
          { key: 'B', text: "Today, tomorrow, and every lifetime ♾️", isCorrect: true, funnyReaction: "Always and forever." },
          { key: 'C', text: "All of the above + infinite bonus love ❤️", isCorrect: true, funnyReaction: "The only truly complete answer!" },
        ],
        explanation: "Forever isn't even long enough, but it's a good place to start.",
      },
    ] as QuizQuestion[],
  },

  // -------------------------------------------------------------
  // 4. THINGS I LOVE ABOUT YOU (INTERACTIVE CONSTELLATION)
  // -------------------------------------------------------------
  thingsILove: {
    badge: "Constellation of Love",
    title: "A Few Things I Love About You…",
    subtitle: "Click each glowing star to unlock a whisper from my heart.",
    notes: [
      {
        id: 1,
        title: "Your infectious smile",
        message: "Your smile can completely change my mood. No matter how crazy the day has been, the moment you smile, everything feels calm.",
        icon: "Sparkles",
        color: "from-pink-400 to-rose-500",
      },
      {
        id: 2,
        title: "Making ordinary days magic",
        message: "I love the way you make ordinary days feel special. Even running groceries or sitting on the couch turns into a memory with you.",
        icon: "Heart",
        color: "from-purple-400 to-indigo-500",
      },
      {
        id: 3,
        title: "Laughing with you",
        message: "I love laughing with you until our stomachs ache. We have our own unspoken language that only the two of us understand.",
        icon: "Smile",
        color: "from-amber-400 to-pink-500",
      },
      {
        id: 4,
        title: "Your cute little habits",
        message: "I love your little habits — the way you tuck your hair, the cute faces you make when thinking, and your sweet quirks that make you uniquely you.",
        icon: "Sun",
        color: "from-rose-400 to-peach-400",
      },
      {
        id: 5,
        title: "Coming home to you",
        message: "I love coming home to you. You are my safe space, my comfort zone, and the place my soul always longs to return to.",
        icon: "Home",
        color: "from-fuchsia-400 to-rose-400",
      },
      {
        id: 6,
        title: "Calling you my wife",
        message: "I love that I get to call you my wife. Hearing that word roll off my tongue still gives me butterflies and fills me with immense pride.",
        icon: "Crown",
        color: "from-amber-300 to-yellow-500",
      },
      {
        id: 7,
        title: "Doing absolutely nothing with you",
        message: "I love doing absolutely nothing with you. Silence is never awkward with you — being in the same room is my favorite pastime.",
        icon: "Coffee",
        color: "from-teal-400 to-emerald-500",
      },
      {
        id: 8,
        title: "You make life feel like home",
        message: "I love the way you make life feel like home. Home isn't a four-walled building anymore — home is wherever you are.",
        icon: "Compass",
        color: "from-pink-500 to-lavender-400",
      },
      {
        id: 9,
        title: "Your huge, golden heart",
        message: "I love how deeply you care for people, how thoughtful you are, and the genuine kindness you radiate into the universe.",
        icon: "Flame",
        color: "from-orange-400 to-red-400",
      },
      {
        id: 10,
        title: "The way you believe in me",
        message: "Even on days when I doubt myself, your faith in me gives me wings. Having you in my corner makes me feel invincible.",
        icon: "Shield",
        color: "from-sky-400 to-blue-500",
      },
      {
        id: 11,
        title: "Our late-night chats",
        message: "Talking with you under the blankets about our wildest dreams, random funny thoughts, and everything in between.",
        icon: "Moon",
        color: "from-violet-400 to-purple-600",
      },
      {
        id: 12,
        title: "Simply everything about you",
        message: "From your radiant beauty to your brilliant mind, you are the greatest gift life has ever blessed me with.",
        icon: "Stars",
        color: "from-rose-400 to-amber-300",
      },
    ] as LoveNote[],
  },

  // -------------------------------------------------------------
  // 5. OUR STORY (INTERACTIVE TIMELINE)
  // -------------------------------------------------------------
  timeline: {
    badge: "Milestones & Memories",
    title: "Chapters of Our Story",
    subtitle: "A journey of two souls becoming best friends, partners, and lifelong lovers.",
    events: [
      {
        id: 1,
        date: "Chapter 1",
        title: "The day our story began",
        description: "The moment our paths crossed and fate decided our stories were meant to be written on the exact same page. The start of something magical.",
        photoUrl: "photos/memory1.jpg",
        tag: "First Encounter",
      },
      {
        id: 2,
        date: "Chapter 2",
        title: "The moment I knew you were special",
        description: "That one conversation where hours slipped by in what felt like seconds. I realized my heart was no longer mine alone.",
        photoUrl: "photos/memory2.jpg",
        tag: "Spark",
      },
      {
        id: 3,
        date: "Chapter 3",
        title: "One of my favorite memories",
        description: "An unforgettable day where the world faded into the background, leaving just the warmth of your laughter and the sparkle in your eyes.",
        photoUrl: "photos/memory3.jpg",
        tag: "Golden Memory",
      },
      {
        id: 4,
        date: "Chapter 4",
        title: "One of our funniest moments",
        description: "The time we couldn't stop laughing until tears rolled down our cheeks. When being silly together felt like the ultimate luxury.",
        photoUrl: "photos/memory4.jpg",
        tag: "Pure Joy",
      },
      {
        id: 5,
        date: "Chapter 5",
        title: "A place we'll never forget",
        description: "A destination etched in our hearts forever. Walking hand in hand, feeling like the luckiest man alive under the open sky.",
        photoUrl: "photos/memory5.jpg",
        tag: "Adventure",
      },
      {
        id: 6,
        date: "Chapter 6",
        title: "Where we are today",
        description: "Building our dream life hand in hand. Side by side through every high and low, stronger and more in love with each passing sunrise.",
        photoUrl: "photos/memory6.jpg",
        tag: "Today & Forever",
      },
      {
        id: 7,
        date: "Chapter 7",
        title: "Everything still waiting for us",
        description: "All the unwrapped adventures, future travels, quiet mornings, warm hugs, and dreams yet to unfold. The best is always yet to come.",
        photoUrl: "photos/memory7.jpg",
        tag: "Our Future",
      },
    ] as TimelineEvent[],
  },

  // -------------------------------------------------------------
  // 6. PHOTO GALLERY (MEMORY WALL)
  // -------------------------------------------------------------
  gallery: {
    badge: "Memory Wall",
    title: "Captured in Time",
    subtitle: "Little snapshots of the woman who stole my heart.",
    photos: [
      {
        id: 1,
        url: "photos/photo1.jpg",
        caption: "My favorite person ❤️",
        rotation: "-rotate-2",
        date: "Always",
        aspectRatio: "tall",
      },
      {
        id: 2,
        url: "photos/photo2.jpg",
        caption: "This smile.",
        rotation: "rotate-2",
        date: "Pure Magic",
        aspectRatio: "square",
      },
      {
        id: 3,
        url: "photos/photo3.jpg",
        caption: "Us.",
        rotation: "-rotate-1",
        date: "Together",
        aspectRatio: "wide",
      },
      {
        id: 4,
        url: "photos/photo4.jpg",
        caption: "One for the memories.",
        rotation: "rotate-3",
        date: "Unforgettable",
        aspectRatio: "tall",
      },
      {
        id: 5,
        url: "photos/photo5.jpg",
        caption: "The way you light up every room.",
        rotation: "-rotate-3",
        date: "Radiant",
        aspectRatio: "square",
      },
      {
        id: 6,
        url: "photos/photo6.jpg",
        caption: "Adventures are better with you.",
        rotation: "rotate-1",
        date: "Wanderlust",
        aspectRatio: "tall",
      },
      {
        id: 7,
        url: "photos/photo7.jpg",
        caption: "Pure, unfiltered happiness.",
        rotation: "-rotate-2",
        date: "Cherished",
        aspectRatio: "wide",
      },
      {
        id: 8,
        url: "photos/photo8.jpg",
        caption: "Forever my favorite view.",
        rotation: "rotate-2",
        date: "Endless Love",
        aspectRatio: "square",
      },
    ] as GalleryPhoto[],
  },

  // -------------------------------------------------------------
  // 7. LOVE LETTER (ANIMATED ENVELOPE)
  // -------------------------------------------------------------
  loveLetter: {
    envelopePrompt: "Roshani, you have one letter waiting for you.",
    buttonOpen: "💌 Open Letter",
    buttonClose: "Fold Letter Back",
    date: "On Your Special Day",
    salutation: "Happy Birthday, Roshani ❤️",
    paragraphs: [
      "Today isn't just a reminder that you were born.",
      "It's a reminder that my world became infinitely better because you became part of it.",
      "I don't always know how to put everything I feel into words, but I hope you know how incredibly grateful I am to have you beside me.",
      "Thank you for the laughter, the little moments, the crazy moments, the quiet moments, and all the memories we've created together.",
      "You are not just my wife.",
      "You are my favorite person, my home, my partner, and the person I want beside me for all the adventures still waiting for us.",
      "I hope this year brings you everything your heart is wishing for.",
      "More laughter.\nMore adventures.\nMore beautiful memories.\nMore reasons to smile.",
      "And selfishly…",
      "I hope I get to be beside you for all of them.",
      "Happy Birthday, my love. ❤️",
      "Here's to you.\nHere's to us.\nAnd here's to everything still to come.",
      "I love you.",
    ],
    signature: "Forever & Always,\nSunil ❤️",
  },

  // -------------------------------------------------------------
  // 8. 20 REASONS TO SMILE
  // -------------------------------------------------------------
  reasonsToSmile: {
    badge: "Instant Joy",
    title: "Need a reason to smile? ❤️",
    subtitle: "Tap whenever you need a reminder of just how wonderful you are.",
    buttonText: "Show Me Another Reason ✨",
    reasons: [
      "Because you're ridiculously beautiful — inside and out.",
      "Because someone is completely, utterly obsessed with you (spoiler: it's me).",
      "Because you make someone's world better just by existing in it.",
      "Because today is YOUR day, and the whole universe celebrates you!",
      "Because your smile is dangerous — it disarms me every single time.",
      "Because you deserve all the happiness, peace, and cake in the world.",
      "Because you have the kind of laugh that instantly brightens an entire room.",
      "Because you survived 100% of your hardest days and look stunning doing it.",
      "Because you're the queen of our castle and I'm honored to serve you snacks.",
      "Because you have the most beautiful soul I have ever known.",
      "Because no matter what happens, you will never have to face life alone.",
      "Because right at this very moment, your husband is smiling thinking about you.",
      "Because your kindness touches everyone lucky enough to know you.",
      "Because you look cute even when you're sleepy or cranky.",
      "Because good things, warm hugs, and exciting surprises are waiting for you.",
      "Because calories don't count on your birthday!",
      "Because your eyes sparkle brighter than any diamond on this planet.",
      "Because I'd choose you in every lifetime, in every parallel universe.",
      "Because you are my greatest blessing and favorite companion.",
      "Because you are Roshani — one of a kind, irreplaceable, and deeply adored.",
    ],
  },

  // -------------------------------------------------------------
  // 9. SURPRISE GIFT BOX
  // -------------------------------------------------------------
  surpriseGift: {
    badge: "Special Delivery",
    introText: "Okay… one last surprise.",
    buttonText: "🎁 Open It",
    revealedTitle: "My favorite gift isn't something I can wrap.",
    revealedHighlight: "It's you. ❤️",
    revealedEnding: "Happy Birthday, Roshani.",
    subtext: "Thank you for being the sweetest, most generous gift life could ever give me.",
  },

  // -------------------------------------------------------------
  // 10. FINAL CINEMATIC SCREEN
  // -------------------------------------------------------------
  finalCinematic: {
    bigTitle: "Happy Birthday, Roshani ❤️",
    wishText: "May this year be as beautiful, unexpected, crazy, and wonderful as you are.",
    animatedTextPart1: "And no matter where life takes us…",
    animatedTextPart2: "…I'll always choose you. ❤️",
    signature: "Forever yours,\nSunil ❤️",
    buttonReplay: "↻ Replay Our Story",
    buttonMusicToggle: "🎵 Toggle Music",
  },

  // -------------------------------------------------------------
  // 11. MUSIC SETTINGS
  // -------------------------------------------------------------
  music: {
    filename: "our-song.mp3",
    songTitle: "Our Favorite Melody",
    artist: "With Love, Sunil",
    fallbackEnabled: true, // Uses soft romantic WebAudio chime arpeggio if file is not found
  },

  // -------------------------------------------------------------
  // 12. SECRET EASTER EGG
  // -------------------------------------------------------------
  easterEgg: {
    clicksRequired: 5,
    title: "Psst… you found the secret ❤️",
    message: "I love you more than this website has enough words to explain.",
    closing: "Okay, now go enjoy your birthday. 😘",
  },
};
