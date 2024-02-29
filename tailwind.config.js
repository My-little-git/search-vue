/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/**/*.{js,vue}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        xl: '10rem',
      }
    },
    extend: {},
  },
  plugins: [],
}