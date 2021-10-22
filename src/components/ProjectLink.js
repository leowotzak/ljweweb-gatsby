import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Badge, Col, Row } from "react-bootstrap"

export default ({ excerpt, featuredImages, tags, title, to }) => {

  featuredImages = featuredImages.map(([key, value]) => value)

  return (
    <Container className="text-center">
      <Link to={to} style={{ textDecoration: "none" }}>
        <Row style={{alignItems: "center"}}>
        </Row>
        <h2 className="mt-5">{title}</h2>
      </Link>
      <Row style={{alignItems: "center"}}>
      {featuredImages &&
  featuredImages.map(image => (
    <Col key={image.src} style={{maxWidth: "400px"}}>
      <Img fluid={image} className="m-auto w-75" />
    </Col>
  ))}
      </Row>
      {tags.map(tag => (
        <Badge key={tag} pill variant="dark" className="px-2 mr-1">
          {tag}
        </Badge>
      ))}
      <p className="pt-3 text-justify">{excerpt}</p>
    </Container>
  )
}





