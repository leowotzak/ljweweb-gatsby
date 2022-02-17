import React from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, WorkHistory } from "../components"
import { SEO, Utils } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap/Container"

export default ({ data }) => {
  const history = data.allMarkdownRemark.edges || []
  const images = data.allFile.edges || []
  const imageMap = Utils.getImageMap(images, /^(.+)\/([^]+)$/)

  return (
    <PageLayout>
      <SEO title="Resume" />
      <PageTitle title="Resume"></PageTitle>
      <Container className="mt-5" fluid>
        {history.map(({ node }) => (
          <div key={node.id}>
            <WorkHistory
              frontmatter={node.frontmatter}
              image={imageMap[node.slug.replace(/\/+$/, "")]}
              body={node.body}
            />
            <hr className="w-75" />
          </div>
        ))}
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { eq: "png" }
        relativePath: { regex: "/company/" }
        relativeDirectory: { regex: "/content/work/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            id
            gatsbyImageData(width: 200)
          }
          relativeDirectory
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: frontmatter___endDate, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/work/" } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            company
            location
            endDate
            position
            startDate
            tags
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
