import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Row, Col, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>

        <Image
          width="300"
          fluid
          src={dark ? `../../icons/lion-dark.png` : `../../icons/lion-light.png`}
          alt={dark ? "Darth Vader" : "R2-D2"}
        />
        {unemployed && (
          <p className="mt-2">
            <b>Full stack developer looking for new opportunities</b>
          </p>
        )}
        <Container className="py-0 my-0">
          <Row>
            <Col className="d-flex" style={{flexDirection: "column", alignItems: "center"}}>
              <Row>
          {/* <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          > */}
            <Row>
            <Col xs={12} sm={6}>
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
            </Col>
            </Row>
          </Row>
            </Col>
          </Row>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://github.com/leowotzak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/leo-wotzak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="https://stackoverflow.com/users/15308389/leo-wotzak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "stack-overflow"]}
              className="icons hr"
              title="Stack-overflow"
            />
          </a>
          <a
            href="mailto:leojwotzak@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
