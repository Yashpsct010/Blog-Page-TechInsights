export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        dark: '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1e293b',
            'h1, h2, h3, h4': {
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '700',
            },
            a: {
              color: '#2563eb',
              '&:hover': {
                color: '#1e40af',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}