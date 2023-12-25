/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#222222",
        backgroundColorFade: "#000000cc",
        backgroundColorFadeL: "#0b0b0b8f",
        textColor: "#e4e4e4",
        textColorS: "#a9a9a9",
        primary: "#F5F3F3",
        accent: "#C11515",
        header: "#101010",
        hero: "#171717",
        popular: "#2A2D34",
      },
      backgroundImage: {
        "hero-signup": "url('../src/Assets/img/bgg.jpg')",
        "hero-login": "url('../src/Assets/img/bg2.jpg')",
        "hero-hps": "url('../src/Assets/img/bg2.jpg')",
      },
      padding: {
        50: "12rem",
      },
      borderRadius: {
        radius: "3rem",
      },
      borderWidth: {
        30: "30rem",
        1: "0.2rem",
      },
      width: {
        30: "30rem",
        35: "35rem",
        40: "40rem",
        45: "45rem",
        55: "55rem",
      },
      height: {
        hero: "70vh",
        height: "60vh",
        popular: "35rem",
        trend: "18rem",
      },
      boxShadow: {
        bx: "0 0 100px 10px rgb(0, 0, 0) inset",
      },
      screens: {
        ssm: "350px",
        sm: "450px",
        md: "640px",
      },
    },
  },
  plugins: [],
};
