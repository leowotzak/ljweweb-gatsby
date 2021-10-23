import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Badge, Col, Row } from "react-bootstrap"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const ComponentWide = ({images}) => {
  console.log("wide: ", images)

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
  console.log("skinny: ", images)

  return(
    <Row>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <Col align="center">
     <img src="https://www.designbust.com/download/1038/png/transparent_google_logo256.png" className="sliderimg" alt="project_photo"/>
     </Col>
     <Col align="center">
     <img src="https://logoeps.com/wp-content/uploads/2014/09/49354-facebook-logo-icon-vector-icon-vector-eps.png" className="sliderimg" alt="project_photo"/>
     </Col>
     <Col align="center">
     <img src="https://images.vexels.com/media/users/3/137380/isolated/lists/1b2ca367caa7eff8b45c09ec09b44c16-instagram-icon-logo.png" className="sliderimg" alt="project_photo"/>
     </Col>
      </AliceCarousel> 
      </Row>
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
    <Container fluid>
      <Row align="center">
        <Col >
      <Link to={to} style={{ textDecoration: "none" }}>
        <h2 className="mt-5">{title}</h2>
      </Link>
      </Col>
      </Row>
      <ImageComponent images={featuredImages} />
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