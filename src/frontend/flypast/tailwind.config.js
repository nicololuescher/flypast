/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        borderRadius: {
            'none': '0',
            'sm': '4px',
            DEFAULT: '4px',
            'md': '4px',
            'lg': '4px',
            'full': '9999px',
            'large': '12px',
        },
        extend: {
            colors: {
                primary: '#213857',
                primarydisabled: '#c8d4ea',
                secondary: '#f7d107',
                lightbg: '#f3f3f3',
                hoverbg: '#4b83c8',
            },
            textColor:{
                default: "#213857"
            },
            fontFamily: {
                'sans': ['Roboto', 'sans-serif'],
              }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
}
