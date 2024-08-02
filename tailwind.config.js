/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero": "url('/images/6th.jpeg')",
          "hero1": "url('/images/4th.png')",
          "hero2": "url('/images/3th.jpeg')",
          "hero7": "url('/images/7th.jpeg')",
          "hero5": "url('/images/10th.jpeg')",


      },
    },
  },
  plugins: [],
};
