import React from "react"
import { graphql } from "gatsby"

/* Page One */
import PageOne from "../components/PageOne"
import Image from "../components/Image"
import Player from "../components/Player"
import Logo from "../components/Logo"

/* Page Two */
import PageTwo from "../components/PageTwo"
import Gallery from "../components/Gallery"

/** Page Three */
import PageThree from "../components/PageThree"
import About from "../components/About"

export default ({ data: { allMarkdownRemark, allFile } }) => {
  return (
    <>
      <PageOne playlist={allMarkdownRemark}>
        <Logo />
        <Player />
        <Image style={{ gridArea: "right" }} />
      </PageOne>
      <PageTwo gallery={allFile}>
        <Gallery />
      </PageTwo>
      <PageThree>
        <About />
      </PageThree>
    </>
  )
}

export const MAIN_QUERY = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            src {
              relativePath
            }
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "Gallery" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
