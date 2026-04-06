module.exports = {
  darkMode: ["selector", '[zaui-theme="dark"]'],
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        'inner-white': 'inset 0 2px 4px 0 rgb(255 255 255 / 0.5)',
        'inner-black': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.5)',
      }
    },
  },
};