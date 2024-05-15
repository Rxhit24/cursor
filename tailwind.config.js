/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          backgroundImage:{
            navGradient: "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)"
          },
            colors: {
                primary: "#b7e4c7",
                secondary: "#1b4332",
                
            },
            keyframes: {
                scroll: {
                    "100%": { transform: "translate(-79.8%)" },
                },
            },
        },
    },
    plugins: [],
};
