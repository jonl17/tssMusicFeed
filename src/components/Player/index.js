import React from "react"
import { Container, Controls } from "./Styled"

import { connect } from "react-redux"
import { turnSwitch, togglePlayer } from "../../state/actions"

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
  handleSizeChange() {
    const { dispatch, playerFullscreen } = this.props
    console.log(playerFullscreen)
    dispatch(togglePlayer(!playerFullscreen))
  }
  render() {
    const { trackChosen, playlist, playerFullscreen } = this.props
    console.log(playerFullscreen)
    return (
      <Container fullscreen={playerFullscreen}>
        <p>
          Track chosen:
          {playlist[trackChosen] !== undefined
            ? playlist[trackChosen].title
            : ""}
        </p>
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
          <p onClick={this.handlePlay.bind(this)}>play</p>
          <p onClick={this.handlePause.bind(this)}>pause</p>
          <p onClick={this.handleSizeChange.bind(this)}>Size</p>
        </Controls>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  theswitch: state.reducer.theswitch,
  playlist: state.reducer.playlist,
  trackChosen: state.reducer.trackChosen,
  playerFullscreen: state.reducer.playerFullscreen,
})

export default connect(mapStateToProps)(Player)
