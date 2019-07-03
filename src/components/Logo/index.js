import React from "react"
import { connect } from "react-redux"

import { Logo, Letter } from "./Styled"

const LogoComponent = ({ theswitch }) => {
  return (
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
  )
}
const mapStateToProps = state => ({
  theswitch: state.reducer.theswitch,
})

export default connect(mapStateToProps)(LogoComponent)
