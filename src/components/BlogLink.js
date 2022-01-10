import React from "react"
import { Card, Container, Badge, Col, Row } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ title, createdAt, virtuals }, idx) => {
  return (
    <Container>
      <Row style={{ alignItems: "center" }}>
        <Col xs={12} md={6} xl={4}>
          <img
            src="https://rustacean.net/assets/rustacean-flat-happy.png"
            style={{ maxWidth: "360px" }}
          />
        </Col>
        <Col fluid>
          <Row>
            <Col xs={12} xl={9}>
              <h5>
                {idx < 1 ? (
                  <>
                    <Badge variant="dark">New</Badge>
                    &nbsp;
                  </>
                ) : (
                  <></>
                )}
                {title}
              </h5>
            </Col>
            <Col xs={12} xl={3}>
              <h5>{createdAt}</h5>
            </Col>
          </Row>
          <p>{virtuals.subtitle}</p>
          {virtuals.tags.map(tag => (
            <Badge key={tag.slug} pill variant="dark" className="px-2 mr-1">
              {tag.name}
            </Badge>
          ))}

          {/* {console.log(virtuals.socialRecommendsCount)}
          {console.log(virtuals.responsesCreatedCount)}
          {console.log(virtuals.recommends)}
          {console.log(virtuals.publishedInCount)} */}
        </Col>
      </Row>
    </Container>
  )
}
