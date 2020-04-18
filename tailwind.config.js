module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Lato',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        '"Roboto Mono"',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      colors: {
        bright: {
          100: '#F5F9FC',
        },
        dark: {
          100: '#304659',
          200: '#3B5266',
        },
      },
    },
  },
  variants: {
    margin: ['responsive', 'last'],
  },
  plugins: [],
}
