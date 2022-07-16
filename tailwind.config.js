/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-dark': '#fff',
                'primary-light': '#333',
            },
        },
    },
    plugins: [],
};
