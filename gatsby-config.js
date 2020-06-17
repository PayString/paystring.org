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
      twitter: 'xpringdev',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'PayID',
        short_name: 'PayID',
        start_url: '/',
        background_color: '#E5E5E5',
        theme_color: '#304659',
        display: 'minimal-ui',
        icon: 'content/assets/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-148411216-7',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-feed',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
  ],
}
