/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    backgroundImage: {
        'hero': "url('./images/hero1.jpg')",
        'signin': "url('./images/signin.jpg')",
        'progress': "url('./images/progress.jpg')",
      },


    extend: {
      colors: {
        'primcol': '#004282',
        'seccol': '#F59E0B',
        'tetcol': '#2B076E',
        'faded-white': 'rgba(255, 255, 255, 0.05)',
        'faded-white': 'rgba(255, 255, 255, 0.05)',
      },
      gridTemplateColumns: {
        
        '2': '1fr  2fr',
      },

      
    },
  },
  plugins: [],
}
