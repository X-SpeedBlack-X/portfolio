/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        linearBg: 'linear-gradient(to right, #1b1429, #140f23)',
        instagramBg:
          'linear-gradient(to top, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(9deg)' },
        },

        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },

      animation: {
        wave: 'wiggle 1s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      },

      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
          600: '#0e76a8 ',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        violet: {
          800: '#1b1429',
          900: '#140f23',
        },
        purple: {
          200: '#cd5ff8',
          800: '#654384',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
          1000: '#202024',
        },
        black: {
          200: '#171515',
        },
      },
    },
  },

  plugins: [],
};
