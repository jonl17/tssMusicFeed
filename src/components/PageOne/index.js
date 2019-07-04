import React from "react"
import { PageOneStyle } from "./Styles"

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
    return <PageOneStyle>{children}</PageOneStyle>
  }
}

export default connect()(PageOne)
