module.exports = {
  siteMetadata: {
    title: "portfolio",
    siteUrl: "http://localhost:9000/"
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/images/favicon.png`
      }
    }
    
  ],
};
