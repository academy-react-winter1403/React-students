/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      '2x': '1450px',
      'xx': '1400px',
      'xl': '1200px',
      'lg': '1024px',
      'sm': '640px',
      'os': '500px',
      'ts': '300px'
    },
    extend: {
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
        'arrowLeft': "url('./assets/Icon/arrow-left-01.svg')"
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
    },
  },
  plugins: [],
  corePlugins: {
    textAlign:true,
  },
  rtl: true,
}

