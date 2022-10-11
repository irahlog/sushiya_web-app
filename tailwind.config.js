module.exports = {
  content: [
    './screens/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: { sm: '480px', md: '768px', lg: '976px', xl: '1440px' },
    extend: {
      colors: {
        sushiya: '#b50d16',
        description: 'rgb(107 114 128);',
        // brightRedSupLight: 'hsl(12, 88%,95%)',
        // darkBlue: 'hsl(228, 39%,23%)',
        // darkGrayishBlue: 'hsl(227, 12%,61%)',
        // veryDarkBlue: 'hsl(233, 12%,13%)',
        // veryLightGray: 'hsl(0, 0%,98%)',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
  // ...
};
