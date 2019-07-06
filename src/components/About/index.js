import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { Container, GIF, BioContainer, Bio, Name } from "./Styled"

const About = ({
  data: {
    allFile: { edges },
  },
}) => (
  <Container>
    <GIF alt={edges[0].node.name} src={edges[0].node.publicURL} />
    <BioContainer>
      <Name>Jón Gabríel Lorange</Name>
      <Bio>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Bio>
    </BioContainer>
  </Container>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { name: { eq: "checkit" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={data => <About data={data} {...props} />}
  />
)
