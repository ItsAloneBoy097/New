/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#07070F',
        card:    'rgba(255,255,255,0.03)',
        border:  'rgba(255,255,255,0.08)',
        primary: '#5865F2',
        violet:  '#7B3FEF',
        roblox:  '#E8222F',
        muted:   '#8890A4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 9s ease-in-out infinite',
        'glow-pulse':  'glowPulse 3s ease-in-out infinite',
        'fade-up':     'fadeUp 0.7s ease-out forwards',
        'fade-in':     'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.4' },
          '50%':     { opacity: '0.8' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
