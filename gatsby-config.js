module.exports = {
  siteMetadata: {
    title: `Internago: International payroll services with digital edge`,
    author: {
      name: `Docio`,
      summary: `Manage your payroll on multiple international markets with one online interface.`,
    },
    description: `Manage your payroll on multiple international markets with one online interface.`,
    siteUrl: `https://internago.com`,
    social: {
      twitter: `Interna_GO`,
      linkedin: `internago-ab`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pricing`,
        name: `pricing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        //offset: 1000,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Docio`,
        short_name: `Docio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00446e`,
        display: `minimal-ui`,
        icon: `src/images/docio-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-client-side-redirect`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
