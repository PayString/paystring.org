module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    // Use quotes around stuff
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',

    // Disable autoprefix rules since we use autoprefixer through PostCSS
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    // Disable !important
    'declaration-no-important': true,

    // Font weights should use numbers
    'font-weight-notation': 'numeric',

    // Disable rule that conflicts with Tailwind
    // We could just pass it a regex to ignore the Tailwind @-rules, but this hasn't been a problem so far
    'at-rule-no-unknown': null,
  },
}
