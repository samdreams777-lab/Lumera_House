/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lumera: {
          black: "#121110",
          dark: "#1C1B19",
          card: "#242220",
          cream: "#FAF8F5",
          sand: "#F2EDE6",
          taupe: "#E3DDD3",
          gold: "#C6A15B",
          "gold-hover": "#C9A96E",
          "gold-muted": "#B08D57",
          "gold-aged": "#A88955",
          "gold-metallic": "#D4AF72",
          terracotta: "#B85A3A",
          stone: "#7C7772",
          lightstone: "#A8A29C",
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
