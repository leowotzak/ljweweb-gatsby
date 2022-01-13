import React, { useContext } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, BlogLink } from "../components"
import ThemeContext from "../utils/theme"
import { Image, Row } from "react-bootstrap"
import { SEO, Utils } from "../utils"
import Container from "react-bootstrap/Container"

export default ({ data }) => {
  const allProjects = data.allMdx.edges || []
  console.log(allProjects)
  // const newProjects = data.allMdx.edges || []
  // const allFeaturedImages = data.allFile.edges || []
  // const regex = /^(.+)\/([^]+)$/
  // const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex, true, 10)
  // const { dark } = useContext(ThemeContext)

  return (
    <PageLayout>
      <SEO title="Blog" />
      <PageTitle title="Blog" />
      <Container align="center">
        <Row>{allProjects.map(({ node }) => BlogLink(node))}</Row>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          body
          excerpt
          frontmatter {
            title
            tags
            link
          }
          slug
          html
          id
        }
      }
    }
  }
`
