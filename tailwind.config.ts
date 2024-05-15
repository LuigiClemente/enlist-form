import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      inter:['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        blueGray: {
          700: '#58626C'  // New color value for blue-gray-700
        }
      },
    },
  },
  
  plugins: [],
};
export default withMT(config);
