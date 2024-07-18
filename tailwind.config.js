/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        grain: "url(/images/noisy-background.png)",
      },
      // eslint-disable-next-line no-dupe-keys
      backgroundImage: {
        star: "url(/images/ma.jpg)",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-path-star": {
          "clip-path":
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        },
      });
    },
  ],
};
