import React from "react"
import { Container, Logo, Letter } from "./Styled"

import { playlist } from "../constants"

import { connect } from "react-redux"
import { turnSwitch } from "../../state/actions"

class Player extends React.Component {
  handlePlay() {
    this.audio.play()
    if (this.props.theswitch !== `on`) this.props.dispatch(turnSwitch())
  }
  handlePause() {
    this.audio.pause()
    if (this.props.theswitch !== `off`) this.props.dispatch(turnSwitch())
  }
  render() {
    const { theswitch } = this.props
    return (
      <Container>
        <Logo>
          <Letter theswitch={theswitch} delay={0}>
            T
          </Letter>
          <Letter theswitch={theswitch} delay={0.25}>
            S
          </Letter>
          <Letter theswitch={theswitch} delay={0.5}>
            S
          </Letter>
        </Logo>
        <div>
          <audio
            ref={audio => {
              this.audio = audio
            }}
            src={playlist[0].src}
          />
        </div>
        <input type="button" value="GO" onClick={this.handlePlay.bind(this)} />
        <input
          type="button"
          value="HOLD IT"
          onClick={this.handlePause.bind(this)}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  theswitch: state.reducer.theswitch,
})

export default connect(mapStateToProps)(Player)
