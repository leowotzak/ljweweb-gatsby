import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Badge, Col, Row } from "react-bootstrap"

const ComponentWide = ({images}) => {
  console.log("wide: ", images)

  return (
  images.map(image => (<Img fluid={image} className="m-auto w-75" />)))
}

const ComponentSkinny = ({images}) => {
  console.log("skinny: ", images)

  return(
    <Img fluid={images[0]} className="m-auto w-75" />
  )
}


const ImageComponent = ({images}) => {

  const isBrowser = typeof window !== "undefined"
  const [isDesktop, setDesktop] = useState(isBrowser && window.innerWidth > 1450)


  const updateMedia = () => {
    setDesktop(isBrowser && window.innerWidth > 1450);
  };

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("resize", updateMedia)
      return () => window.removeEventListener("resize", updateMedia)
    }
  });

  return (isDesktop ? <ComponentWide images={images} /> : <ComponentSkinny images={images} />);
}

export default ({ excerpt, featuredImages, tags, title, to }) => {
  return (
    <Container className="text-center">
      <Link to={to} style={{ textDecoration: "none" }}>
        <Row style={{alignItems: "center"}}>
        </Row>
        <h2 className="mt-5">{title}</h2>
      </Link>
      <Row style={{alignItems: "center"}}>
        <ImageComponent images={featuredImages}/>
      </Row>
      {tags.map(tag => (
        <Badge key={tag} pill variant="dark" className="px-2 mr-1">
          {tag}
        </Badge>
      ))}
      <p className="pt-3 text-justify">{excerpt}</p>
    </Container>
  )
}