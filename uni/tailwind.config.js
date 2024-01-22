/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
    extend: {
        colors: {
            white: '#FFF',
            black: '#000',
            primary: '#52C234',
            middle: '#3EC655',
            ligth: '#7AE15E',
            red: 'F00',
            line: 'rgba(249, 255, 252, 0.30)'
        },
        fontFamily: {
            gil: ['Gilroy'],
            gilSemi: ['GilroySemi'],
            jura: ['Jura']
        },
    },
    screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
    },
};
export const plugins = [];