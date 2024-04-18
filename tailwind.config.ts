import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' :'501px',
        'sm': '600px',
        // => @media (min-width: 640px) { ... }
  
        'md': '900px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1460px',
       
      },
      colors: {
        'primary': '#ffb900',
        'primary-light': '#DDAF29', // Seems the same as primary, adjust if needed
        'primary-dark': '#c4981f8e',
        'grey':'#848484',
        'text-grey':'#58626c',
        'light-section-heading': '#fff8f7',

        'secondary-light': '#ffb900', // Seems the same as primary, adjust if necessary
        'secondary-dark': '#111122',
        'transparent-dark':'#0f0f23b3',
        'tertiary-light': '#2998ff',
        'tertiary-dark': '#5643fa',
        'green ': '#E9CE5D',

        'grey-light-1': '#a9a9b7',
        'grey-light-2': '#eee',
 
        'grey-dark': '#777',
        'grey-dark-2': '#999',
        'grey-dark-3': '#333',
 
        'white': '#fff',
        'black': '#000', 
        'my-green' :'rgb(0, 151, 136)',
        
      },
      minWidth: ({ theme }) => ({
        ...theme('width'),
      }),
      maxWidth: ({ theme }) => ({
        ...theme('width'),
      }),
      minHeight: ({ theme }) => ({
        ...theme('height'),
      }),
      maxHeight: ({ theme }) => ({
        ...theme('height'),
      }),
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'itner': ['"Inter"', 'sans-serif'],
        'futura': ['"Futura"', 'cursive'],
        'kingcaslon': ['"KingsCaslon"', 'cursive'],
        'Univers': ['"Univers"', 'cursive'],


      },
    },
  },
  plugins: [],
};
export default config;
