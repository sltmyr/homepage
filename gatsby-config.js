module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jan Sültemeyer's homepage",
        short_name: "Jan Sültemeyer",
        start_url: "/",
        background_color: "#45b649",
        theme_color: "#dce35b",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
