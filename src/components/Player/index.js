import React from "react"
import { Container, Controls } from "./Styled"

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
    const { trackChosen, playlist } = this.props
    return (
      <Container>
        <Controls>
          <audio
            ref={audio => {
              this.audio = audio
            }}
            src={
              playlist[trackChosen] !== undefined
                ? playlist[trackChosen].src.relativePath
                : ""
            }
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
        <p>
          Track chosen:
          {playlist[trackChosen] !== undefined
            ? playlist[trackChosen].title
            : ""}
        </p>
        <p>Next</p>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  theswitch: state.reducer.theswitch,
  playlist: state.reducer.playlist,
  trackChosen: state.reducer.trackChosen,
})

export default connect(mapStateToProps)(Player)
