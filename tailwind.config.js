/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    
  ],
  theme: {
    extend: {
      "colors":{
        "purple":'#D081FD',
        "green":'#26825B',
        "custom_gray":'#F2F0F0'
      },
      fontFamily: {
        'leelawad': ['leelawad'],
      },
     
    },
  },
  plugins: [require('flowbite/plugin')],

}

