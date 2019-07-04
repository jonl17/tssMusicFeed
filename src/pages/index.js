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

export default ({
  data: {
    allImageSharp: { edges },
    allMarkdownRemark,
    allFile,
  },
}) => {
  const { node } = edges[0]
  return (
    <>
      <PageOne playlist={allMarkdownRemark}>
        <Logo />
        <Player />
        <Image style={{ gridArea: "right" }} fluid={node.fluid} />
      </PageOne>
      <PageTwo gallery={allFile}>
        <Gallery />
      </PageTwo>
    </>
  )
}

export const query = graphql`
  query {
    allImageSharp(filter: { fluid: { originalName: { eq: "brok-1.png" } } }) {
      edges {
        node {
          fluid(traceSVG: { color: "hotpink" }) {
            originalName
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
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
