import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const Image = ({
  data: {
    allImageSharp: { edges },
  },
}) => {
  const { fluid } = edges[0].node
  return (
    <Img
      imgStyle={{ objectFit: `contain`, objectPosition: `center top` }}
      style={{ height: `100%`, width: `100%` }}
      fluid={fluid}
    />
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allImageSharp(
          filter: { fluid: { originalName: { eq: "brok-1.png" } } }
        ) {
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
    `}
    render={data => <Image data={data} {...props} />}
  />
)
