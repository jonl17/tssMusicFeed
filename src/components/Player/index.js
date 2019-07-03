import React from "react"
import { Container, Controls } from "./Styled"

import { playlist } from "../constants"

import { connect } from "react-redux"
import { turnSwitch } from "../../state/actions"

class Player extends React.Component {
  handlePlay() {
    const { theswitch, dispatch } = this.props
    this.audio.play()
    if (theswitch !== `on`) dispatch(turnSwitch())
  }
  handlePause() {
    const { theswitch, dispatch } = this.props
    this.audio.pause()
    if (theswitch !== `off`) dispatch(turnSwitch())
  }
  render() {
    const { theswitch } = this.props
    return (
      <Container>
        <Controls>
          <audio
            ref={audio => {
              this.audio = audio
            }}
            src={playlist[0].src}
          />
          <input
            type="button"
            value="PLAY"
            onClick={this.handlePlay.bind(this)}
          />
          <input
            type="button"
            value="PAUSE"
            onClick={this.handlePause.bind(this)}
          />
        </Controls>
        <p>Playing: {theswitch === `on` ? playlist[0].title : ""}</p>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  theswitch: state.reducer.theswitch,
})

export default connect(mapStateToProps)(Player)
