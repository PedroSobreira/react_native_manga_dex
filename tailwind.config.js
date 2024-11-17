/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          primary: "#161622",
          secondary: {
            DEFAULT: "#FF9C01",
            100: "#FF9001",
            200: "#FF8E01",
          },
          black: {
            DEFAULT: "#000",
            100: "#1E1E2D",
            200: "#232533",
          },

          gray: "#5D5D5D",
          grayDark: "#4D4D4D",
          grayLightFaded: "#858585",
          grayLight: "#F0F1F2",

          orange: "#FF6740",


          redStatus: "#FF0000",
          greenStatus: "#04d000",
          blueStatus: "#00c9f5",
          orangeStatus: "#FF5733",

          textColor: "#363636"
        },
        fontFamily: {
        //   pthin: ["Poppins-Thin", "sans-serif"],
        //   pextralight: ["Poppins-ExtraLight", "sans-serif"],
        //   plight: ["Poppins-Light", "sans-serif"],
        //   pregular: ["Poppins-Regular", "sans-serif"],
        //   pmedium: ["Poppins-Medium", "sans-serif"],
        //   psemibold: ["Poppins-SemiBold", "sans-serif"],
        //   pbold: ["Poppins-Bold", "sans-serif"],
        //   pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        //   pblack: ["Poppins-Black", "sans-serif"],
        },
      },
    },
    plugins: [],
  }