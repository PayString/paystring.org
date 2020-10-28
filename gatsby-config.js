/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
require('dotenv/config')

const getSentryDSN = () => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'stage':
      return 'https://817154d079314c89a0d8ebb739d3c9d5@o262339.ingest.sentry.io/5271862'
    case 'prod':
      return 'https://a59430ace1cf483782ac81c9594b503d@o262339.ingest.sentry.io/5271920'
    default:
      return null
  }
}

const getHeapAppID = () => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'stage':
      return '3411953951'
    case 'prod':
      return '3069043076'
    default:
      return null
  }
}

module.exports = {
  siteMetadata: {
    title: 'PayID',
    description:
      'The Universial Payment Identifier. A better way for your users to send and receive payments.',
    siteUrl: 'https://payid.org/',
    social: {
      twitter: 'payid_org',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'PayID',
        short_name: 'PayID',
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
    {
      resolve: 'gatsby-plugin-heap',
      options: {
        appId: getHeapAppID(),
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: getSentryDSN(),
        environment: process.env.GATSBY_RELEASE_ENV,
        enabled: getSentryDSN() !== null,
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['AW-877332159', 'AW-616173950'],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-148411216-7',
      },
    },
    // {
    //   resolve: `gatsby-plugin-segment-js`,
    //   options: {
    //     prodKey: `5KojrihxpEBJvAn3u0JXi9hlhzMh5b1M`,
    //     trackPage: false,
    //     delayLoad: true,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-hubspot',
      options: {
        trackingCode: '8186536',
        respectDNT: true,
        productionOnly: true,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
  ],
  pathPrefix: '',
}
