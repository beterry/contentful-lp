/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `Chester Running Co`,
            short_name: `Chester Run`,
            start_url: `/`,
            background_color: `#1965A8`,
            theme_color: `#1965A8`,
            display: `standalone`,
            icon: `src/images/favicon.svg`,
        },
    },
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
            fonts: [
                `montserrat\:,400,700`
            ],
            display: 'swap'
        }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `ebc08t0fv91z`,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
    },
  ],
}
