import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { Container, GIF, BioContainer, Bio, Name } from "./Styled"

const About = ({
  data: {
    allFile: { edges },
    site: {
      siteMetadata: { myName, BIO },
    },
  },
}) => (
  <Container>
    <GIF alt={edges[0].node.name} src={edges[0].node.publicURL} />
    <BioContainer>
      <Name>{myName}</Name>
      <Bio>{BIO}</Bio>
    </BioContainer>
  </Container>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            myName
            BIO
          }
        }
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
