/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1620px',
      },
      textColor: {
        skin: {
          primary: 'var(--color-primary)',
          secondry: 'var(--color-secondry)',
          muted: 'var(--color-text-muted)',
          light: 'var(--color-text-light)',
          dark: 'var(--color-dark)',
        },
      },
      backgroundColor: {
        skin: {
          dark: 'var(--color-dark)',
          light: 'var(--color-text-light)',
          buttonAccent: 'var(--color-button-accen)',
          buttonMuted: 'var(--color-button-muted)',
          bgFooter: 'var(--color-bg-footer)',
          primary: 'var(--color-primary)',
          secondry: 'var(--color-secondry)',
        },
      },
      fontFamily: {
        productSansBold: ['ProductSansBold', 'sans-serif'],
        productSansReqular: ['ProductSansReqular', 'sans-serif'],
        interBold: ['InterBold', 'sans-serif'],
        interExtraBold: ['InterExtraBold', 'sans-serif'],
        interRegular: ['InterRegular', 'sans-serif'],
        interMedium: ['InterMedium', 'sans-serif'],
        interLight: ['InterLight', 'sans-serif'],
        gildaDisplay: ['GildaDisplay', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 -4px 10px 0 rgb(0 0 0 / 15%);',
      },
    },
  },
  plugins: [],
};
