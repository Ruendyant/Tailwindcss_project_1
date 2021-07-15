module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'pri': '#081F4D',
                'sec': '#0083FF',
                'gen': '#3B4D71',
                'our-bg': '#D9E6FF',
            },
            fontFamily: {
                'title': ['Sansita', 'sans-serif'],
                'body': ['Lato', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}