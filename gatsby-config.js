/* eslint-disable global-require */
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
        },
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: `5KojrihxpEBJvAn3u0JXi9hlhzMh5b1M`,
        trackPage: true,
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
  ],
}
