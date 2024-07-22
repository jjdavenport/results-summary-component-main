/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to your project's structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        lightRed: "hsl(0, 100%, 67%)",
        orangeyYellow: "hsl(39, 100%, 56%)",
        greenTeal: "hsl(166, 100%, 37%)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        white: "hsl(0, 0%, 100%)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
        reactBackground: "hsla(0, 100%, 67%, 0.1)",
        memoryBackground: "hsl(39, 100%, 56%, 0.1)",
        verbalBackground: "hsl(166, 100%, 37%, 0.1)",
        visualBackground: "hsl(234, 85%, 45%, 0.1)",
      },
      backgroundImage: {
        "gradient-light-slate-blue":
          "linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
        "gradient-violet-blue":
          "linear-gradient(to bottom, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))",
      },
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
