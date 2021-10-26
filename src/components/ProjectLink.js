import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Badge, Col, Row } from "react-bootstrap"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const ComponentWide = ({images}) => {

  return (
    <Row xs={1} md={3}>
      {images.map(image => (
              <Col>
        <Img fluid={image} className="m-auto w-75" />
        </Col>
        ))}
    </Row>
  )
}

const ComponentSkinny = ({images}) => {

  return(
      <AliceCarousel autoPlay autoPlayInterval="3000">
        {images.map(image => (<Col align="center"><Img fluid={image} style={{maxWidth: 400}} /></Col>))}
      </AliceCarousel> 
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

  return <ComponentSkinny images={images} />
}

export default ({ excerpt, featuredImages, tags, title, to }) => {
  return (
    <Container fluid>
      <Row className="mb-5">
        <Col >
      <Link to={to} style={{ textDecoration: "none" }}>
        <h2 className="mt-5">{title}</h2>
      </Link>
      </Col>
      </Row>
        <ImageComponent images={featuredImages} className="pt-5" />
      <Row align="center">
        <Col align="center">
      {tags.map(tag => (
        <Badge key={tag} pill variant="dark" className="px-2 mr-1">
          {tag}
        </Badge>
      ))}
      </Col>
      </Row>
      <p className="pt-3 text-justify">{excerpt}</p>
    </Container>
  )
}