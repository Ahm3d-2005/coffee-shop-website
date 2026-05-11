import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf6f1',
          100: '#f5ede3',
          200: '#ead5c7',
          300: '#dfbdab',
          400: '#d4a58f',
          500: '#c98d73',
          600: '#b8705d',
          700: '#a0553c',
          800: '#734028',
          900: '#3d2417',
        },
        cream: '#fef5f0',
        espresso: '#1a1410',
      },
      backgroundImage: {
        'gradient-coffee': 'linear-gradient(135deg, #c98d73 0%, #a0553c 100%)',
        'gradient-neon': 'linear-gradient(90deg, #00d4ff 0%, #7c3aed 50%, #ec4899 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        shimmer: 'shimmer 2s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 3s linear infinite',
        bounce: 'bounce 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(201, 141, 115, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(201, 141, 115, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
