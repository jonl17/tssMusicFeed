import React from "react"
import { Container } from "./Styled"

import { connect } from "react-redux"
import { getGallery } from "../../state/actions"

class PageTwo extends React.Component {
  componentDidMount() {
    const { edges: gallery } = this.props.gallery
    const { dispatch } = this.props
    dispatch(getGallery(gallery))
  }
  render() {
    const { children } = this.props
    return <Container>{children}</Container>
  }
}

export default connect()(PageTwo)
