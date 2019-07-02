import React from "react"
import { Container, Logo, Letter } from "./Styled"
import ReactAudioPlayer from "react-audio-player"

import promoTune from "../../../static/tunes/promo.wav"

import { connect } from "react-redux"
import { turnSwitch } from "../../state/actions"

const Player = ({ theswitch, dispatch }) => {
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
      <ReactAudioPlayer
        onPlay={() => dispatch(turnSwitch())}
        onPause={() => dispatch(turnSwitch())}
        style={{
          width: "100%",
          paddingLeft: "10px",
        }}
        src={promoTune}
        controls
      />
      {/* <iframe
        onPlaying={console.log("PLAYING")}
        title="playerkid"
        width="100%"
        height="166"
        scrolling="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335790596&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      /> */}
    </Container>
  )
}

const mapStateToProps = state => ({
  theswitch: state.reducer.theswitch,
})

export default connect(mapStateToProps)(Player)
