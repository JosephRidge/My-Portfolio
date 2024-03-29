module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#D9F1E6', 
        secondary:'#FCBCB8',
        primaryBlue:'#195EC7',
        secondaryLightBlue:'#D9F1FF',
        secondaryLighterBlue:'#3372D2',//set opacity
        primaryGray:'#EEEEEE',
        secondaryLightGray:'#3C3C3C',
        darkGray:"#3C3D3C",
        greenShade:"#B0D6CE",
        brownShade:"#FDF0DC",
        pinkShade:"#FCE1E1",
        purpleShade:"#EBE0FF"
      },
      backgroundImage: {
        'blue-art': "url('src/assets/Buebakcground.svg')",
        'bike-engine': "url('../src/assets/motocycle.jpg')",
        'rectangle': "url('../src/assets/rectangle.svg')",
      },
    fontFamily: {
      roboto: ['Roboto', ],
      nunito: ['Nunito', ],     
    }
    },
  },
  plugins: [],
};
