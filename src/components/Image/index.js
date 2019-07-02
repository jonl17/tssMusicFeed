import React from "react"
import Img from "gatsby-image"

const Image = ({ fluid }) => {
  return (
    <Img
      imgStyle={{ objectFit: `contain`, objectPosition: `center top` }}
      style={{ height: `100%`, width: `100%` }}
      fluid={fluid}
    />
  )
}

export default Image
