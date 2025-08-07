import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import themes from "daisyui/src/theming/themes";
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
          ...themes["dark"],
          "base-content": "rgb(229 229 229)"
        }
      }
    ]
  }
} as Config;

