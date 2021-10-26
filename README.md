See me [live!](http://leojwotzak.com/)

What is [Gatsby](https://www.gatsbyjs.org/docs/)?

My project is based off of the [gatsby-personal-site-template](https://github.com/surudhb/gatsby-personal-site-template).

## LJWE website gatsby

[![Netlify Status](https://api.netlify.com/api/v1/badges/d5aef605-d961-4c6c-9285-14992f1dcb61/deploy-status)](https://app.netlify.com/sites/boring-lovelace-564f37/deploys)

This project is my first major rework of my personal website as well as my first `gatsby` project. Since I've created
my `create-react-app` website from scratch, I can now use the starters and plugins that `gatsby` provides confidently. The
website currently supports a landing, about, all projects, resume, and individual project pages. The site has custom styling, and the individual projects pages and the resume page are created using `MDX` (markdown for `JSX/React`). The backend of the website is supported by a `GraphQL` database, which the site queries for its content.

* `React Context`
* `GraphQL`
* `Bootstrap`
* `Sass`
* `SEO`
* `MDX`

## Extra features

* Dynamically created individual project pages from `MDX` files
* Dark mode slider
* Sound effects
* Locally hosted font `Aurebesh`
* Fontawesome icons

## The file structure is as follows

- **Components**: Re-usable components to be used throughout the app
- **Content**: Contains relevant `Markdown` & `MDX` files and images for projects & resume
- **Templates**: Contains files that create the template html for a project details page
- **Styles**: Contains the sass files used for adding custom styling to the app
- **Utils**: Contains helper files, seo, and theme management
- **Pages**: Contains the different pages
- **Static**: Contains static assets (i.e. self-hosted fonts or images) that bypass `gatsby` pipeline

### Dependencies

- `Bootstrap` is a CSS framework that comes with already defined CSS classes
- `React Bootstrap` is an abstraction of `Bootstrap` providing some basic styling built-in to its components
- `Helmet` is used to add SEO to the site making it easier for search engines to relate search keywords to your website.
- `Fontawesome` is used for icons
- `Howler` is used to manage audio files

### Plugins

- `gatsby-plugin-preload-link-crossorigin`,
- `gatsby-plugin-catch-links`,
- `gatsby-source-filesystem`
- `gatsby-plugin-mdx`
- `gatsby-plugin-mdx-frontmatter`
- `gatsby-plugin-page-creator`
- `gatsby-plugin-sass`
- `gatsby-plugin-image`
- `gatsby-transformer-sharp`
- `gatsby-plugin-sharp`
- `gatsby-plugin-offline`,
- `gatsby-plugin-react-helmet`,
- `gatsby-plugin-offline`
- `gatsby-plugin-react-helmet`
- `gatsby-plugin-google-fonts`
- `gatsby-plugin-nprogress`
  
### App Screenshots

test
