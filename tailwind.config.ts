import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#e8d5cc", // Soft beige/pink
                secondary: "#d4a373", // Wool/Wood tone
                brand: "#b5838d", // Rose
                cream: "#fdfbf7",
                dark: "#2f2e41"
            },
        },
    },
    plugins: [],
};
export default config;
