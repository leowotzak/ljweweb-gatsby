import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ThemeContext, SEO } from "../utils"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;- <i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    movieList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const movieLinks = movieList.map(show => MediaLink(show))
  const techStack = data.allFile.edges

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        {/* <StaticImage image={`../../icons/lion-${toString()}.png`} alt={author} width={200}/> */}

        <Image
          rounded
          width="200"
          src={`../../icons/lion-${toString()}.png`}
          alt={author}
        />
        <article className="w-90 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <AliceCarousel
            infinite
            autoWidth
            autoHeight
            autoPlay
            disableButtonsControls
            disableDotsControls
            animationDuration={2000}
            animationEasingFunction={"linear"}
            autoPlayInterval={0}
            items={techStack.map(({ node }) => (
              <GatsbyImage className="m-3 sliderimg" image={getImage(node)} />
            ))}
          ></AliceCarousel>
          <p className="i-5 mt-4 pt-2">
            Hello! My name is <b>{`${author}`}</b>. I am an experienced&nbsp;
            <b>{occupation}</b>&nbsp;with a proven track record of designing,
            developing, and implementing applications and solutions using a
            range of technologies and languages. I seek to leverage my
            development experience and hands-on technical expertise in a
            challenging role as a <b>{occupation}</b>.
          </p>
          <p align="center">
            Check out my <Link to="/projects">projects</Link> to see what I've
            been up to!
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:leojwotzak@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Here are a couple of books from my reading list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none", paddingLeft: 0 }}>
            {bookLinks}
          </ul>
          <i>...and</i>
          <h5 className="watch-list-title pt-4">
            Here are a couple of movies from my watch list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none", paddingLeft: 0 }}>
            {movieLinks}
          </ul>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { eq: "png" }
        relativeDirectory: { regex: "/content/about/" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(width: 130)
          }
          relativeDirectory
        }
      }
    }
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        movieList {
          title
          author
          link
        }
      }
    }
  }
`
