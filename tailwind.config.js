export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./**/*.{js,jsx,ts,tsx}", // catches #components, #windows, alias imports
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
