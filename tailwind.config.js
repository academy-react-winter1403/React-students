/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      '3x': '1450px',
      '2x': '1400px',
      'xl': '1200px',
      'lg': '1024px',
      'sm': '640px',
      'os': '500px',
      'ts': '300px'
    },
    extend: {
<<<<<<< HEAD
      // fontFamily: {
      //   Black: "Black1",
      //   Bold: "Bold1",
      //   DemiBold: "DemiBold1",
      //   ExtraBlack: "ExtraBlack1",
      //   ExtraBold: "ExtraBold1",
      //   Heavy: "Heavy1",
      //   Light: "Light1",
      //   Medium: "Medium1",
      //   Regular: "Regular1",
      //   Thin: "Thin1",
      //   UltraLight: "UltraLight1",
      //   Black2: "Black2",
      //   Bold2: "Bold2",
      //   DemiBold2: "DemiBold2",
      //   ExtraBlack2: "ExtraBlack2",
      //   ExtraBold2: "ExtraBold2",
      //   Heavy2: "Heavy2",
      //   Light2: "Light2",
      //   Medium2: "Medium2",
      //   Regular2: "Regular2",
      //   Thin2: "Thin2",
      //   UltraLight2: "UltraLight2",
      // }
=======
      backgroundImage: {
        'Dashboard': "url('./assets/Icons/Frame(1).svg')",
        'MyCourse': "url('./assets/Icons/Frame.svg')",
        'MyReserve': "url('./assets/Icons/Frame(2).svg')",
        'MyFavoriteCourse': "url('./assets/Icons/Frame(3).svg')",
        'MyFavoriteBlog': "url('./assets/Icons/Frame(4).svg')",
        'MyProfile': "url('./assets/Icons/Frame(5).svg')",
        'Count': "url('./assets/Icons/Frame(6).svg')",
        'LeftAccount': "url('./assets/Icons/Frame(7).svg')",
        'iconProfile': "url('./assets/Icons/Frame 45.svg')",
      },
      colors: {
        'them': '#F5F5F5',
        'box': '#FBF6F6',
        'listItem': '#8F8F8F',
        'login': '#A74DD0',
        'loginText':'#848484',
        'placeHolderLogin':'#8E8E8E',
        'forgetText':'#A74DD0',
        'forgetBg':'#F1D1FF',
      },
      height: {
        '340': '89rem',
      },
      spacing: {
        '264': '66rem',
      },
      fontFamily: {
        Iran: ['IranYekan'], 
      },
>>>>>>> 7b22063b3f379e17e7236f75766b11569e7708ad
    },
  },
  plugins: [],
  corePlugins: {
    textAlign:true,
  },
  rtl: true,
}

