/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'bg-transparent',
    'border-primary',
    'hover:border-secondary',
    'hover:text-secondary',
    'text-primary',
    'border-textprimary',
    'hover:border-primary',
    'hover:text-primary',
    'text-textprimary',
    'border-backgroundsecondary',
    'hover:border-secondary',
    'hover:text-secondary',
    'text-backgroundsecondary',
    'bg-primary',
    'hover:bg-secondary',
    'hover:border-secondary',
    'hover:text-textprimary',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C4FA2F',
        secondary: '#329F5B',
        backgroundprimary: '#38423B',
        backgroundsecondary: '#2F2F2F',
        textprimary: '#FCFCFC',
        textsecondary: '#1E3A8A',
        texttertiary: '#3B82F6',
        valid: '#00C853',
        error: '#E57373',
        textbackground: '#353535'
      },
      fontFamily: {
        anton: ['Anton-Regular', 'sans-serif'],
        dm_sans: ['DMSans-Regular', 'sans-serif']
      },
    },
  },
  plugins: [],
}

