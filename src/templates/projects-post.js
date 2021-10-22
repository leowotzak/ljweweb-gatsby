import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./post-template"
import { Badge, Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Img from "gatsby-image";



const projectTitle = ({frontmatter}) => (
  <Row className="mt-5">
  <Col align="center">
  <h2>{frontmatter.title}</h2>
  {frontmatter.tags.map(tag => (
    <Badge pill variant="dark" className="px-2 mr-1">
      <h5 className="text-white my-0">{tag}</h5>
      </Badge>)
    )}
    <hr />
  </Col>
  </Row>
)

const ProjectPageLayout = ({pageContext, children}) => {

  return(
  <Container>
    {projectTitle(pageContext)}
    <Row><Col>{children}</Col></Row>
  </Container>
  )
}


export default ProjectPageLayout;
