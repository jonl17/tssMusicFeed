import React from "react"
import { ContainerStyle } from "./Styles"

import { connect } from "react-redux"
import { getPlaylist } from "../../state/actions"

class Container extends React.Component {
  componentDidMount() {
    const { edges: playlist } = this.props.playlist
    const { dispatch } = this.props
    dispatch(getPlaylist(playlist))
  }
  render() {
    const { children } = this.props
    return <ContainerStyle>{children}</ContainerStyle>
  }
}

export default connect()(Container)
