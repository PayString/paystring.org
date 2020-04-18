/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = () => ({
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
  ],
})
