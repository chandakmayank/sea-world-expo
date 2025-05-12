/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ocean': {
          50: '#a9e1e5',
          100: '#a9e1e5',
          200: '#68b8c4',
          300: '#68b8c4',
          400: '#3a7fa1',
          500: '#3a7fa1',
          600: '#1f4e7a',
          700: '#1f4e7a',
          800: '#0d2d59',
          900: '#0d2d59',
          950: '#0d2d59',
        },
        'coral': {
          50: '#a9e1e5',
          100: '#a9e1e5',
          200: '#68b8c4',
          300: '#68b8c4',
          400: '#3a7fa1',
          500: '#3a7fa1',
          600: '#1f4e7a',
          700: '#1f4e7a',
          800: '#0d2d59',
          900: '#0d2d59',
          950: '#0d2d59',
        },
        'teal': {
          50: '#a9e1e5',
          100: '#a9e1e5',
          200: '#68b8c4',
          300: '#68b8c4',
          400: '#3a7fa1',
          500: '#3a7fa1',
          600: '#1f4e7a',
          700: '#1f4e7a',
          800: '#0d2d59',
          900: '#0d2d59',
          950: '#0d2d59',
        }
      },
      fontFamily: {
        'sans': ['Josefin Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 3s ease-in-out infinite',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(to right, #0d2d59, #1f4e7a, #3a7fa1)',
        'hero-pattern': 'url("https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
      }
    },
  },
  plugins: [],
}