import React from "react"
import { Container } from "./Styled"

import { connect } from "react-redux"
import { getPlaylist } from "../../state/actions"

class PageOne extends React.Component {
  componentDidMount() {
    const { edges: playlist } = this.props.playlist
    const { dispatch } = this.props
    dispatch(getPlaylist(playlist))
  }
  render() {
    const { children } = this.props
    return <Container>{children}</Container>
  }
}

export default connect()(PageOne)
