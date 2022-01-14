import React from "react"
import { Card, Container, Badge, Col, Row } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ title, createdAt, virtuals, uniqueSlug }, idx) => {
  console.log(uniqueSlug)
  return (
    <Container>
      <Row style={{ justifyContent: "center", alignItems: "center" }}>
        <Col lg={4}>
          <img
            src="https://rustacean.net/assets/rustacean-flat-happy.png"
            style={{ maxWidth: "280px" }}
          />
        </Col>
        <Col fluid>
          <a href={`https://towardsdev.com/${uniqueSlug}`}>
            <Row>
              <Col fluid style={{ alignItems: "center" }}>
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
