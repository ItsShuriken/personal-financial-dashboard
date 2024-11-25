module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: 'jit', 
  pruge: ['./src/**/*.{js,jsx,ts,tsx}', '/public/index.html'], 
  darkmode: false, 
  theme: {
    extend: {},
  },
  plugins: [],
};
