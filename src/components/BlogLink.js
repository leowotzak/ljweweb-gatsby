import React from "react"
import { Card, Container, Badge, Col, Row } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default (
  { title, createdAt, virtuals, slug, uniqueSlug },
  idx,
  featuredImages
) => {
  console.log(uniqueSlug)
  return (
    <Container>
      <Row style={{ justifyContent: "center", alignItems: "center" }}>
        <Col lg={4}>
          {featuredImages.map((image, index) => (
            <GatsbyImage
              key={image}
              alt={toString(index)}
              image={getImage(image)}
            />
          ))}
        </Col>
        <Col>
          <a href={`https://medium.com/@leojwotzak/${uniqueSlug}`}>
            <Row>
              <Col style={{ alignItems: "center" }}>
                <h5>
                  {idx < 1 ? <Badge variant="success">New</Badge> : <></>}
                  &nbsp;{title}
                </h5>
              </Col>
              <Col xs={12} xl={3}>
                <h5>{createdAt}</h5>
              </Col>
            </Row>
          </a>
          <Row>
            <Col>
              <p>
                <i>{virtuals.subtitle}</i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              {virtuals.tags.map(tag => (
                <Badge key={tag.slug} pill variant="dark" className="px-2 mr-1">
                  {tag.name}
                </Badge>
              ))}
            </Col>
          </Row>
          {/* {console.log(virtuals.socialRecommendsCount)}
          {console.log(virtuals.responsesCreatedCount)}
          {console.log(virtuals.recommends)}
          {console.log(virtuals.publishedInCount)} */}
        </Col>
      </Row>
    </Container>
  )
}
