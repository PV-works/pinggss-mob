// tailwind.config.js
module.exports = {
  darkMode: 'class', // ← This is the key fix
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // include other paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
