import React from "react"
import { Col } from "react-bootstrap"
import { FaGithubSquare } from "react-icons/fa"

export default ({ link }) => {
  return (
    <Col>
      <a href={link.link} target="_blank" rel="noopener noreferrer">
        <FaGithubSquare className="icons file" />
      </a>
    </Col>
  )
}
