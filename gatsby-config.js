require('dotenv/config')

module.exports = {
  siteMetadata: {
    title: 'PayString',
    description:
      'The Universial Payment Identifier. A better way for your users to send and receive payments.',
    siteUrl: 'https://paystring.org/',
    social: {
      twitter: 'pay_string',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'PayString',
        short_name: 'PayString',
        start_url: '/',
        background_color: '#E5E5E5',
        theme_color: '#304659',
        display: 'minimal-ui',
        icon: 'static/assets/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
          omitKeys: [
            'xmlnsDc',
            'xmlnsCc',
            'xmlnsRdf',
            'xmlnsSvg',
            'xmlnsSodipodi',
            'xmlnsInkscape',
            'sodipodiDocname',
            'inkscapeGroupmode',
            'inkscapeLabel',
            'inkscapeCurrentLayer',
            'rdfAbout',
            'fitMarginBottom',
            'rdfResource',
            'inkscapeVersion',
            'fitMarginLeft',
            'fitMarginRight',
            'fitMarginTop',
            'inkscapeWindowMaximized',
            'inkscapeWindowY',
            'inkscapeWindowX',
            'inkscapeWindowHeight',
            'inkscapeWindowWidth',
            'inkscapeDocumentRotation',
            'inkscapeDocumentUnits',
            'inkscapeCy',
            'inkscapeCx',
            'inkscapeZoom',
            'inkscapePageshadow',
            'inkscapePageopacity',
            'maskType',
            'inkscapePagecheckerboard',
          ],
        },
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
  ],
  pathPrefix: '',
}
