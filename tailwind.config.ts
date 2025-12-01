import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import { dark } from "daisyui/src/theming/themes";
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
        }
      },
      animation: {
        "back-blur-in": "back-blur-in 2s ease-out 1s forwards"
      },
    },
  },
  plugins: [daisyui, typography],
  daisyui: {
    themes: [
      {
        dark: {
          ...dark,
          "primary": "#ED5126",
          "secondary": "#382E38",
          "accent": "#02DEE5",
          "neutral": "#1A3752",
          "base-100": "#0F1A29",
          "base-200": "#08131F",
          "base-300": "#020C15",
        }
      }
    ]
  }
} as Config;

