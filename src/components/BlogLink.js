import React from "react"
import { Card, Button, Badge, Col } from "react-bootstrap"

export default ({ excerpt, frontmatter, featuredImages }) => {
  return (
    <Col width={6}>
      {console.log(featuredImages)}
      <Card style={{ width: "18rem" }}>
        <a href={frontmatter.link} target="_blank" rel="noopener noreferrer">
          <Card.Img
            variant="bottom"
            src="https://miro.medium.com/max/1400/0*W-_nOxyZ526xE206"
          />
          <Card.Body>
            <Card.Title>
              {frontmatter.title}
              <hr />
              <Card.Subtitle>{excerpt}</Card.Subtitle>
              <hr />

              {frontmatter.tags.map(tag => (
                <Badge key={tag} pill variant="dark" className="px-2 mr-1">
                  {tag}
                </Badge>
              ))}
            </Card.Title>
          </Card.Body>
        </a>
      </Card>
    </Col>
  )
}
