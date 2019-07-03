import React from "react"
import { graphql } from "gatsby"
import { GlobalStyle } from "../components/GlobalStyle"
import Container from "../components/Container"
import Image from "../components/Image"
import Player from "../components/Player"
import Logo from "../components/Logo"
import "./index.css"

export default ({
  data: {
    allImageSharp: { edges },
    allMarkdownRemark,
  },
}) => {
  const { node } = edges[0]
  return (
    <>
      <GlobalStyle />
      <Container playlist={allMarkdownRemark}>
        <Logo />
        <Player />
        <Image fluid={node.fluid} />
      </Container>
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
  }
`
