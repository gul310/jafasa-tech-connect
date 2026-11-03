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
          navy: '#102A43',
          darkNavy: '#071B35',
          darkerNavy: '#04101E',
          orange: '#FF7900',
          orangeHover: '#E56D00',
          lightGrey: '#F5F7FA',
          cyan: '#0284C7',
          cyanLight: '#38BDF8',
          slate: '#486581',
          muted: '#829AB1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 121, 0, 0.3)',
        'glow-navy': '0 10px 30px -10px rgba(16, 42, 67, 0.4)',
        'card': '0 4px 20px -2px rgba(16, 42, 67, 0.08)',
        'card-hover': '0 20px 30px -10px rgba(16, 42, 67, 0.16)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right bottom, #071B35, #102A43, #04101E)',
      }
    },
  },
  plugins: [],
}
