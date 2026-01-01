import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      keyframes: {
        "back-blur-in": {
          "0%": { backdropFilter: "blur(0)" },
          "100%": { backdropFilter: "blur(2px)" }
        },
        "blur-out": {
          "0%": { filter: "blur(20px)" },
          "100%": { filter: "blur(0)" }
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          }
        },
        "jump-pulse": {
          "0%, 90%, 100%": {
            transform: "scale(1)",
          },
          "93%": {
            transform: "scale(1.05, 0.95)",
          },
          "96%": {
            transform: "scale(0.95, 1.05)",
          }
        }
      },
      animation: {
        "back-blur-in": "back-blur-in 2s ease-out 1s forwards",
        "blur-out": "blur-out 2s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "jump-pulse": "jump-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [daisyui, typography],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#ED5126",
          "secondary": "#382E38",
          "accent": "#02DEE5",
          "neutral": "#1A3752",
          "base-100": "#0F1A29"
        }
      }
    ]
  }
} as Config;

