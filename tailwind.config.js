/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B4A',
          pink: '#F43F5E',
          purple: '#8B5CF6'
        }
      },
      backgroundImage: {
        'brand-gradient': 'var(--brand-gradient)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui')
  ],
  daisyui: {
    themes: ["light"],
  }
}
