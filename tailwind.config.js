module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#D9F1E6', 
        secondary:'#FCBCB8'
      },
      backgroundImage: {
        'guy-image': "url('../src/assets/guy.jpg')",
        'bike-engine': "url('../src/assets/motocycle.jpg')",
      }
    },
  },
  plugins: [],
};
