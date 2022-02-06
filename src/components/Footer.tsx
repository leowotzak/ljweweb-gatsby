import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const Footer: React.FC = () => {
  const { author }: { author: string } = useStaticQuery(query).site.siteMetadata

  return (
    <div className="footer text-muted text-center">
      <span className="m-auto">
        <b>{author}</b> &copy; {new Date().getFullYear()}. Made with&nbsp;
        <span className="heart">&nbsp;❤&nbsp;</span> &&nbsp;
        <a href="https://www.gatsbyjs.org/">Gatsby</a>
      </span>
    </div>
  )
}

const query: void = graphql`
  query OtherAuthor {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Footer
