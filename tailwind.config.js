/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", //mode ini digunakan untuk custom styling seperti background yang memiliki gradient stop position, stroke, dll
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        //setup styling bg untuk warna gradient
        "custom-gradient":
          "linear-gradient(to top right, var(--tw-gradient-stops))",
      }),
      colors: {
        // warna yang digunakan untuk gradient linear ada "Hero Section"
        "custom-purple-0": "#E1D4ED",
        "custom-purple-100": "#E2E4F2",
      },
      animation: {
        //ini digunakan untuk animasi berjalan pada section "All Integration"
        "infinite-slide": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        //styling terhadap animasi dari section "All Integration"
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "TranslateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
