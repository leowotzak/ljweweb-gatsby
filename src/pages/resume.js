import React from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, WorkHistory } from "../components"
import { SEO, Utils } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap/Container"

export default ({ data }) => {
  // const history = data.allMarkdownRemark.edges || []
  const history = data.allMdx.edges || []
  const images = data.allFile.edges || []
  const imageMap = Utils.getImageMap(images, /^(.+)\/([^\/]+)$/)
  
  return (
    <PageLayout>
      <SEO title="Resume" />
      <PageTitle title="Resume">
        &nbsp;
        <a href="../../resume.pdf" target="_blank" download>
          <FontAwesomeIcon
            style={{ fontSize: "2rem" }}
            icon={["fas", "file-download"]}
            className="icons file"
          />
        </a>
      </PageTitle>
      <Container className="mt-5 pt-3" fluid>
        {history.map(({ node }) => (
          <div key={node.id}>
            <WorkHistory
              frontmatter={node.frontmatter}
              image={imageMap['content/work/epic/company.png']}
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
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
    allMdx(
      filter: { 
        fileAbsolutePath: {regex: "/content/work/"}
      }) { 
      edges {
        node {
          id
          slug
          excerpt
          body
          internal {
            content
          }
          frontmatter {
            company
            endDate(formatString: "MMMM, YYYY")
            startDate(formatString: "MMMM, YYYY")
            location
            position
            tags
            title
          }
        }
      }
    }
  }
`


// allMarkdownRemark(
//   filter: { fileAbsolutePath: { regex: "/work/" } }
//   sort: { fields: [frontmatter___startDate], order: DESC }
// ) {
//   edges {
//     node {
//       id
//       html
//       frontmatter {
//         company
//         location
//         position
//         tags
//         startDate(formatString: "MMMM, YYYY")
//         endDate(formatString: "MMMM, YYYY")
//       }
//       fields {
//         slug
//       }
//     }
//   }
// }
