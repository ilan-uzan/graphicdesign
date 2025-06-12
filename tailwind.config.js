/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        glass: {
          white: 'rgba(255, 255, 255, 0.08)',
          dark: 'rgba(0, 0, 0, 0.08)',
        },
        apple: {
          blue: '#007AFF',
          indigo: '#5856D6',
          purple: '#AF52DE',
          pink: '#FF2D92',
          orange: '#FF9500',
          gray: {
            50: '#F2F2F7',
            100: '#E5E5EA',
            200: '#D1D1D6',
            300: '#C7C7CC',
            400: '#AEAEB2',
            500: '#8E8E93',
            600: '#636366',
            700: '#48484A',
            800: '#3A3A3C',
            900: '#1C1C1E',
          }
        },
        accent: {
          primary: '#007AFF',
          secondary: '#5856D6', 
          tertiary: '#AF52DE',
          success: '#30D158',
          warning: '#FF9500',
          danger: '#FF3B30',
        }
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
        '5xl': '96px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'gradient': 'gradient 20s ease infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '300% 300%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '300% 300%',
            'background-position': 'right center'
          },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 20px rgba(0, 122, 255, 0.3)' },
          '100%': { 'box-shadow': '0 0 40px rgba(0, 122, 255, 0.6)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        }
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
} 