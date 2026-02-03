import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './entrypoints/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Realistic Carbon Theme
        carbon: {
          50: '#f0f0f0',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#8c8c8c',
          400: '#595959',
          500: '#404040',
          600: '#2e2e2e', // Card highlight
          700: '#242424', // Card surface
          800: '#1c1c1c', // Elevated surface
          900: '#141414', // Main surface
          950: '#0c0c0c', // Deep void
        },
        // Neutral Text Palette
        platinum: '#e6e1d6',
        cream: '#d8ccb5',
        muted: '#9a948a',
        // Accent: Pulse Red-Orange
        pulse: {
          400: '#ff6b2f',
          500: '#ff4500',
          600: '#e63e00',
        },
        // Status Colors (Medical)
        status: {
          safe: '#22c55e',
          warning: '#f59e0b',
          critical: '#ef4444',
          info: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Geist', ...fontFamily.sans],
        mono: ['Geist Mono', 'monospace'],
      },
      boxShadow: {
        // Realistic Carbon Shadows - Multi-layer depth
        'carbon': '0 1px 1px rgba(0,0,0,0.3), 0 2px 2px rgba(0,0,0,0.25), 0 4px 4px rgba(0,0,0,0.2), 0 8px 8px rgba(0,0,0,0.15), 0 16px 16px rgba(0,0,0,0.1)',
        'carbon-sm': '0 1px 1px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.2), 0 4px 4px rgba(0,0,0,0.15)',
        'carbon-lg': '0 2px 2px rgba(0,0,0,0.3), 0 4px 4px rgba(0,0,0,0.25), 0 8px 8px rgba(0,0,0,0.2), 0 16px 16px rgba(0,0,0,0.15), 0 32px 32px rgba(0,0,0,0.1)',
        'carbon-inset': 'inset 0 2px 4px rgba(0,0,0,0.4), inset 0 -1px 2px rgba(255,255,255,0.03)',
        'carbon-pressed': 'inset 0 3px 6px rgba(0,0,0,0.5), inset 0 -1px 1px rgba(255,255,255,0.02)',
        'highlight': 'inset 0 1px 0 rgba(255,255,255,0.05)',
        'glow-pulse': '0 0 20px rgba(255,69,0,0.4), 0 0 40px rgba(255,69,0,0.2)',
      },
      backgroundImage: {
        // Realistic carbon gradients
        'carbon-surface': 'linear-gradient(145deg, #1f1f1f 0%, #181818 100%)',
        'carbon-card': 'linear-gradient(160deg, #262626 0%, #1a1a1a 100%)',
        'carbon-raised': 'linear-gradient(145deg, #2a2a2a 0%, #1e1e1e 50%, #1a1a1a 100%)',
        'carbon-pressed': 'linear-gradient(145deg, #151515 0%, #1a1a1a 100%)',
        'pulse-gradient': 'linear-gradient(135deg, #ff4500 0%, #ff6347 50%, #ff4500 100%)',
        'highlight-edge': 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
