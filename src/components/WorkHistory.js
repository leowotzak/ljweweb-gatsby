import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col, Badge } from "react-bootstrap"
import { MDXRenderer } from "gatsby-plugin-mdx"



const CompanyCard = ({ frontmatter, image }) => {
  const { company, position, startDate, endDate, location } = frontmatter

  return (
    <Container fluid className="m-auto work-history">
            <GatsbyImage image={image} alt={company} />
      {/* <Img
        fluid={image}
        style={{
          maxHeight: "15vmax",
          maxWidth: "15vmax",
        }}
        className="m-auto"
      /> */}
      <div className="md-font">
        <h2 className="m-auto pt-2">{company}</h2>
        <h5 className="text-muted">{location}</h5>
        <h4 className="mt-2">{position}</h4>
        <h5 className="text-muted mt-2">
          {startDate} &#8212; {endDate}
        </h5>
      </div>
    </Container>
  )
}

export default ({ body, frontmatter, image }) => {
  return (
    <Container className="p-1 project-link text-center">
      <Row>
        <Col className="col-md-4 col-12">
          <CompanyCard frontmatter={frontmatter} image={image} />
        </Col>
        <Col style={{textAlign: "left"}}>
          <MDXRenderer>{body}</MDXRenderer>
        </Col>
      </Row>
            {frontmatter.tags.map(tag => (
              <Badge key={tag} pill className="pt-2 mx-1 resume-tags">
                    <small><h5>{tag}</h5></small>
              </Badge>
            ))}
    </Container>
  )
}
