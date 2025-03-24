/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xx': '1400px',
      'xl': '1200px',
      'lg': '1024px',
      'sm': '640px',
      'os': '500px',
      'ts': '300px'
    },
    extend: {
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
    },
  },
  plugins: [],
}