module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#111827",
          200: "#1F2937",
          300: "#F3F4F6",//for the text
          400: "#374151",
          500: "#F9FAFB",
        },
        light:{
          300: "#374151",//for the text
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
