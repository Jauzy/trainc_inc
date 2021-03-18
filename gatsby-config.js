module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `keretas`,
        path: `${__dirname}/static/keretas`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stasiuns`,
        path: `${__dirname}/static/stasiuns`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jadwals`,
        path: `${__dirname}/static/jadwals`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `vouchers`,
        path: `${__dirname}/static/vouchers`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDqTRKsSWnzYCTIqmxYD5meDuDcUOIV9IU",
          authDomain: "koi-firebase.firebaseapp.com",
          databaseURL: "https://koi-firebase-default-rtdb.firebaseio.com",
          projectId: "koi-firebase",
          storageBucket: "koi-firebase.appspot.com",
          messagingSenderId: "837354311295",
          appId: "1:837354311295:web:2c0e2275f4b82c788df94a",
          measurementId: "G-EKTSPCSM2Z"
        }
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
