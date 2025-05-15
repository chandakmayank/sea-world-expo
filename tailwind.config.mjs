/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ocean': {
          '50': '#f0f8ff',
          '100': '#e0effe',
          '200': '#bae0fd',
          '300': '#7dc7fc',
          '400': '#38abf8',
          '500': '#0e90e9',
          '600': '#0276cf',
          '700': '#035aa1',
          '800': '#074d85',
          '900': '#0c416e',
          '950': '#082949',
        },
        'coral': {
          '50': '#f0f8ff',
          '100': '#e0effe',
          '200': '#bae0fd',
          '300': '#7dc7fc',
          '400': '#38abf8',
          '500': '#0e90e9',
          '600': '#0276cf',
          '700': '#035aa1',
          '800': '#074d85',
          '900': '#0c416e',
          '950': '#082949',
        },
        'teal': {
          '50': '#f0f8ff',
          '100': '#e0effe',
          '200': '#bae0fd',
          '300': '#7dc7fc',
          '400': '#38abf8',
          '500': '#0e90e9',
          '600': '#0276cf',
          '700': '#035aa1',
          '800': '#074d85',
          '900': '#0c416e',
          '950': '#082949',
        }
      },
      fontFamily: {
        'sans': ['Brandon Grotesque', 'system-ui', 'sans-serif'],
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