import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
        colors: {
            primary: {
            DEFAULT: '#3A86FF',
            50: '#EBF3FF',
            100: '#D6E7FF',
            // ... more shades
            },
            secondary: {
            DEFAULT: '#8338EC',
            // ... shades
            },
        },
        animation: {
            'fade-in': 'fadeIn 0.5s ease-in-out',
        },
        keyframes: {
            fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
            },
        },
        },
    },
    plugins: [],
}

export default config