import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Badge, Col, Row } from "react-bootstrap"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default ({ excerpt, featuredImages, tags, title, to }) => {

  console.log(featuredImages)

  return (
    <Container align="center">
      <Link to={to} style={{ textDecoration: "none" }}>
        <h2>{title}</h2>
      </Link>
      <AliceCarousel infinite autoPlay autoPlayInterval="3000">
        {featuredImages.map(image => <GatsbyImage image={getImage(image)}/>)}
      </AliceCarousel> 
      <Row align="center">
        <Col align="center">
      {tags.map(tag => (
        <Badge key={tag} pill variant="dark" className="px-2 mr-1">
          {tag}
        </Badge>
      ))}
      </Col>
      </Row>
      <p className="pt-3 text-justify">{excerpt}</p>
    </Container>
  )
}