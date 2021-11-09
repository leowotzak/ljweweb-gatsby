import React from "react"
import { Badge, Container, Row, Col } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby"
import AliceCarousel from 'react-alice-carousel';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import GithubLink from "../components/GithubLink"
import "react-alice-carousel/lib/alice-carousel.css";

const projectTitle = ({frontmatter}) => (
  <Container>
  <Row className="mt-5">
  <Col align="center">
  <h2>{frontmatter.title}</h2>
  <Row>
    <GithubLink link={frontmatter} />
    </Row>
    <Row >
      <Col>
  {frontmatter.tags.map(tag => (
    <Badge pill key={tag} variant="dark" className="px-2 my-1 mr-1">
      <h6 className="text-white my-0">{tag}</h6>
      </Badge>)
    )}
    </Col>
    </Row>
    <hr />
  </Col>
  </Row>
  </Container>
)

const ProjectPageLayout = ({pageContext, children}) => {

  return(
  <Container fluid className="pt-5 min-vh-100 w-75">
    {projectTitle(pageContext)}
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          allFile(filter: {extension: {eq: "png"}, relativeDirectory: {regex: "/content/projects/"}}) {
            edges {
              node {
                childImageSharp {
                  id
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
                relativeDirectory
              }
            }
          }
          imageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      `}
      render={data => (
        <AliceCarousel infinite autoPlay autoPlayInterval="3000">
        {data.allFile.edges.filter(
            ({node}) => node.relativeDirectory.match(pageContext.frontmatter.title)
            ).map(({node}) => <Col align="center"><GatsbyImage image={getImage(node)}/></Col>)}
        </AliceCarousel> 
      )}
    />
    <Row><Col>{children}</Col></Row>
  </Container>
  )
}


export default ProjectPageLayout;
