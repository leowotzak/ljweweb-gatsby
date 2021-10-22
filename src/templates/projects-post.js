import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./post-template"
import Badge from "react-bootstrap/Badge"

const SubTitle = ({ tags }) => (
  <div className="mb-5">
    {tags.map(tag => (
      <Badge key={tag} pill variant="dark" className="px-3 mr-1">
        <h5 className="text-white my-0">{tag}</h5>
      </Badge>
    ))}
  </div>
)


export default ProjectPageLayout;
