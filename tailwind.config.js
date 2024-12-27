/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#165927',
        'soft-green': '#7A8C72',
        'cream': '#F2F1DF',
        'orange': '#F29B30',
        'orange-hover': '#F28A2E',
      },
      fontFamily: {
        'bralink': ['Bralink', 'serif'],
        'gill-sans': ['Gill Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')",
      },
    },
  },
  plugins: [],
}