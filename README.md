# Gatsby Personal Portfolio Website/Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/d5aef605-d961-4c6c-9285-14992f1dcb61/deploy-status)](https://app.netlify.com/sites/boring-lovelace-564f37/deploys)

Website currently supports a landing, about, resume, and blog pages. The backend of the website is supported by a `GraphQL` database, which the site queries for its content.

* `React Context`
* `GraphQL`
* `Bootstrap`
* `Sass`
* `SEO`

## Extra features

* Dark mode slider
* Sound effects
* Locally hosted font `Aurebesh`
* Fontawesome icons

## The file structure is as follows

- **Components**: Re-usable components to be used throughout the app
- **Content**: Contains relevant `Markdown` & `MDX` files and images for blog & resume
- **Templates**: Contains files that create the template html for a blog details page
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
