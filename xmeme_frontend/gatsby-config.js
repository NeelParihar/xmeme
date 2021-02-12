const data = require("./src/data/neelparihar");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Xmeme | Neel Parihar',
    author: data.author,
  },
  plugins: [
    "gatsby-plugin-next-seo",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: data.themeColor,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter\:300,400,600,700,800,900`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./static/favicon/github.svg",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'Xmeme | Neel Parihar',
        short_name: "starter",
        start_url: "/",
        background_color: data.backgroundColor,
        theme_color: data.themeColor,
        display: "minimal-ui",
        icon: "./static/favicon/github.svg",
      },
    },
    "gatsby-plugin-offline",
  ],
};
