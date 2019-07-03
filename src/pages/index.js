import React from "react"
import { graphql } from "gatsby"
import Container from "../components/Container"
import Image from "../components/Image"
import Player from "../components/Player"
import Logo from "../components/Logo"
import "./index.css"

export default ({ data }) => {
  const { node } = data.allImageSharp.edges[0]
  return (
    <Container>
      <Logo />
      <Player />
      <Image fluid={node.fluid} />
    </Container>
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
  }
`
