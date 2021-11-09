/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Leo J. Wotzak`,
    author: `Leo J. Wotzak`,
    firstName: `Leo`,
    lastName: `Wotzak`,
    description: `Leo Wotzak's personal website`,
    occupation: `Full Stack Developer`,
    keywords: [
      `Leo`,
      `Wotzak`,
      `Personal`,
      `Resume`,
      `Portfolio`,
      `Projects`,
      `Work`,
    ],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `https://localhost:8000`,
    unemployed: true,
    designations: [
      `Full stack developer`,
      `Experienced programmer`,
      `Finance & trading enthusiast`,
    ],
    readingList: [
      {
        title: `Napoleon: a life`,
        author: `Andrew Roberts`,
        link: `https://www.goodreads.com/book/show/20821092-napoleon`,
      },
      {
        title: `Pioneering Portfolio Management`,
        author: `David F. Swenson`,
        link: `https://www.goodreads.com/book/show/17371.Pioneering_Portfolio_Management`,
      },
      {
        title: `The Intelligent Investor`,
        author: `Benjamin Graham`,
        link: `https://www.goodreads.com/book/show/106835.The_Intelligent_Investor`,
      },
    ],
    movieList: [
      {
        title: `Spirited Away`,
        author: `Hayao Miyazaki`,
        link: `https://www.imdb.com/title/tt0245429/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=C3YZ8KWNVE2CMVT1KF6K&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top?ref_=ext_shr_lnk`,
      },
      {
        title: `City of God`,
        author: `Kátia Lund & Fernando Meirelles`,
        link: `https://www.imdb.com/title/tt0317248/?ref_=fn_al_tt_1`,
      },
      {
        title: `The Matrix`,
        author: `Lana & Lilly Wachowski`,
        link: `https://www.imdb.com/title/tt0133093/?ref_=ext_shr_lnk`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,              
            },
          },
        ],
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Doe's Personal Site`,
        short_name: `J.Doe`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
