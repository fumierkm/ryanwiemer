require('dotenv').config();
const config = require('./src/utils/siteConfig');
const contentfulConfig = require('./.contentful');

const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl + config.pathPrefix,
    siteTitle: config.siteTitle,
    siteDescription: config.siteDescription,
  },
  plugins: [
    {
    resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
    resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID || contentfulConfig.production.spaceId,
        accessToken: process.env.ACCESS_TOKEN || contentfulConfig.production.accessToken,
        },
      },
    'gatsby-plugin-netlify'
  ],
}
