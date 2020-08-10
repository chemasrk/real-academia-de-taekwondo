module.exports = {
  siteMetadata: {
    title: `Real Academia de Taekwondo ITF`,
    description: `Entrena el verdadero taekwondo tradicional en el centro de Palma`,
    author: `@chemasrk`,
    authorurl: `http://www.chemasrk.codes`,
    domainurl: `www.taekwondoifmallorca.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `real-academia-de-taekwondo-itf`,
        short_name: `rat-itf`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/school_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
