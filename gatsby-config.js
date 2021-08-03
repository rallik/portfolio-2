module.exports = {
  siteMetadata: {
    title: "Reuben Allik",
    description: "Boston-based frontend developer who specializes in building responsive and acessible web experiences",
    siteUrl: "http://reubenallik.com",
    image: '/socialshare.png',
    twitterUsername: '@reubenallik'
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/assets/data/`,
      },
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
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `/${__dirname}/src/assets/images/favicon.png`
      }
    }
    
  ],
};
