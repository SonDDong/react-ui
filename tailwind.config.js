module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      height: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};
