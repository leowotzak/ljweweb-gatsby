import React, { useContext } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, BlogLink } from "../components"
import ThemeContext from "../utils/theme"
import { Image, Row } from "react-bootstrap"
import { SEO, Utils } from "../utils"
import Container from "react-bootstrap/Container"

export default ({ data }) => {
  const allBlogPosts = data.allMediumPost.edges || []
  const allFeaturedImages = data.allFile.edges || []
  const { dark } = useContext(ThemeContext)
  const regex = /^(.+)\/([^]+)$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex, true, 1)
  console.log(featuredImageMap)

  return (
    <PageLayout>
      <SEO title="Blog" />
      <PageTitle title="Blog" />
      <Container align="center">
        {allBlogPosts.map(({ node }, idx) => (
          <>
            <section>
              {BlogLink(
                node,
                idx,
                featuredImageMap["content/blog/" + node.slug]
              )}
            </section>
            <hr />
          </>
        ))}
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMediumPost {
      edges {
        node {
          title
          createdAt(formatString: "MMMM YYYY")
          id
          uniqueSlug
          slug
          virtuals {
            subtitle
            socialRecommendsCount
            responsesCreatedCount
            tags {
              slug
              name
              postCount
              type
            }
            recommends
            publishedInCount
          }
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "png" }
        relativeDirectory: { regex: "/content/blog/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(width: 500)
          }
          relativeDirectory
        }
      }
    }
  }
`
