import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithubSquare } from "react-icons/fa";


export default ({link}) => {
  console.log("link: ", link)

    return (
        <Col>
      <a href={link.link} target="_blank" rel="noopener noreferrer">
        <FaGithubSquare className="icons file"/>
        {/* <FontAwesomeIcon
          icon={["fab", "fa-github"]}
          className="icons file"
          title="Resume"
        /> */}
        </a>
        </Col>
    )
}


{/* <Link to={to} style={{ textDecoration: "none" }}>
<h2 className="mt-5">{title}</h2>
</Link>


<a href="../../resume.pdf" target="_blank" download>
<FontAwesomeIcon
  icon={["fas", "file-alt"]}
  className="icons file"
  title="Resume"
/>
</a> */}