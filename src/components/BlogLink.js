import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Card from "react-bootstrap/Card"

export default props => {
  return (
    <Card className="card-container" as={Link} to={props.to}>
      <Card.Body className="pt-3">
        <Card.Title>
          <h4>Test</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Test</Card.Subtitle>
        <Card.Text>Test</Card.Text>
      </Card.Body>
    </Card>
  )
}
