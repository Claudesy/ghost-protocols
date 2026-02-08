import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./entrypoints/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Realistic Carbon Theme - BRIGHTENED (+16-18 total)
        carbon: {
          50: '#f0f0f0',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#8c8c8c',
          400: '#595959',
          500: '#505056', // was #4a4a4a (+6)
          600: '#3e3e44', // was #383838 (+6) - Card highlight
          700: '#343438', // was #2e2e32 (+6) - Card surface
          800: '#2c2c2e', // was #262628 (+6) - Elevated surface
          900: '#242428', // was #1e1e22 (+6) - Main surface
          950: '#1e1e21', // was #18181b (+6) - Deep void
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
        carbon:
          '0 1px 1px rgba(0,0,0,0.3), 0 2px 2px rgba(0,0,0,0.25), 0 4px 4px rgba(0,0,0,0.2), 0 8px 8px rgba(0,0,0,0.15), 0 16px 16px rgba(0,0,0,0.1)',
        'carbon-sm':
          '0 1px 1px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.2), 0 4px 4px rgba(0,0,0,0.15)',
        'carbon-lg':
          '0 2px 2px rgba(0,0,0,0.3), 0 4px 4px rgba(0,0,0,0.25), 0 8px 8px rgba(0,0,0,0.2), 0 16px 16px rgba(0,0,0,0.15), 0 32px 32px rgba(0,0,0,0.1)',
        'carbon-inset': 'inset 0 2px 4px rgba(0,0,0,0.4), inset 0 -1px 2px rgba(255,255,255,0.03)',
        'carbon-pressed':
          'inset 0 3px 6px rgba(0,0,0,0.5), inset 0 -1px 1px rgba(255,255,255,0.02)',
        highlight: 'inset 0 1px 0 rgba(255,255,255,0.05)',
        'glow-pulse': '0 0 20px rgba(255,69,0,0.4), 0 0 40px rgba(255,69,0,0.2)',
      },
      backgroundImage: {
        // Realistic carbon gradients - BRIGHTENED (+16-18 total)
        'carbon-surface': 'linear-gradient(145deg, #2f2f36 0%, #282830 100%)',
        'carbon-card': 'linear-gradient(160deg, #36363c 0%, #2b2b2e 100%)',
        'carbon-raised': 'linear-gradient(145deg, #3a3a3e 0%, #2e2e36 50%, #2b2b2e 100%)',
        'carbon-pressed': 'linear-gradient(145deg, #262628 0%, #2b2b2e 100%)',
        'pulse-gradient': 'linear-gradient(135deg, #ff4500 0%, #ff6347 50%, #ff4500 100%)',
        'highlight-edge': 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
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
