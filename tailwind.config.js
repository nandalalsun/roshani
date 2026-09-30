/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        romantic: {
          50: '#FFF5F7',
          100: '#FFE9EE',
          200: '#FFD3DC',
          300: '#FFB1C0',
          400: '#FA849C',
          500: '#F25477',
          600: '#DE2E58',
          700: '#BA1C41',
          800: '#9A1B3A',
          900: '#821B35',
        },
        peach: {
          50: '#FFF9F5',
          100: '#FFF0E6',
          200: '#FFE0CC',
          300: '#FFC49F',
          400: '#FFA36E',
          500: '#F98042',
        },
        cream: {
          50: '#FCFAF7',
          100: '#F7F3EB',
          200: '#EEE6D7',
          300: '#E1D3BD',
        },
        lavender: {
          50: '#FAF7FF',
          100: '#F3ECFF',
          200: '#E5D6FF',
          300: '#D1B8FF',
          400: '#B690FF',
          500: '#9C68FF',
        },
        gold: {
          50: '#FCFBF5',
          100: '#FAF5E3',
          200: '#F4E8BD',
          300: '#EED58D',
          400: '#E4BE5A',
          500: '#D4A42E',
          600: '#B8851F',
        },
        velvet: {
          950: '#0F0814',
          900: '#180E21',
          850: '#21132E',
          800: '#2B1A3B',
          700: '#3D2554',
        }
      },
      fontFamily: {
        sans: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
        cinematic: ['"Cinzel"', '"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'glow-pink': '0 0 30px rgba(242, 84, 119, 0.35)',
        'glow-pink-lg': '0 0 50px rgba(242, 84, 119, 0.5)',
        'glow-gold': '0 0 30px rgba(228, 190, 90, 0.4)',
        'glow-gold-lg': '0 0 55px rgba(228, 190, 90, 0.6)',
        'glow-lavender': '0 0 30px rgba(182, 144, 255, 0.35)',
        'glass': '0 8px 32px 0 rgba(31, 10, 38, 0.37)',
        'glass-light': '0 8px 32px 0 rgba(255, 180, 200, 0.18)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 2.5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        twinkle: {
          '0%': { opacity: '0.2', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
