const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      footerBgColorOne: '#1F2937',
      footerBgColorTwo: '#111827',
      footerBgColorThree: '#151515',
      fontColorOne: '#ffffff',
      activeFontColor: '#EEFF25',
      navbarBgColorOne: '#15151580',
      borderColorOne: '#E8E8E8',
      subTitleColor: '#D99904',
      cardBgColor: '#F3F3F3',
      buttonColorOne: '#BB8506',
      testimonialColor: '#CD9003',
      formTextColor : '#D1A054'
    },
    fontFamily: {
      agbalumo: ['Agbalumo', 'sans-serif'],
      roboto: ['Roboto Slab', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
});
