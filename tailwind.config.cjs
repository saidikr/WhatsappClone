/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'msg': "url('src/assets/images/bg.webp')",
      },
      screens: {
        "whatsapp-bp":"755px",
      },
    },
  },
  plugins: [],
}
