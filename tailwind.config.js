module.exports = {
  theme: {
    extend: {
      keyframes: {
        'smooth-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'smooth-bounce': 'smooth-bounce 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
