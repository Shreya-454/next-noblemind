/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'outfit':'"Outfit",sans-serif',
        'mont':'Montserrat',
        'exo':'"Exo 2", sans-serif',
      },
      backgroundSize:{
        'full':'100% 100%'
      }, backgroundImage:{
        'btn-gradient':'linear-gradient(130.88deg, #A854E9 -9.14%, #4F91FC 283.16%)',
        'headbg':'url(/assets/images/nobleherobg.webp)',
        'subs':'url(/assets/images/subscribebg.webp)',
        'foot':'url(/assets/images/footerbg.webp)'
      },
      animation:{
        'spin-slow':'spin 5s linear infinite'
      }
    },
  },
  plugins: [],
};
