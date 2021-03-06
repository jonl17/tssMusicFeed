import styled, { css, keyframes } from "styled-components"

const glow = keyframes`
  from {
  }
  to {
    color: hotpink;
  }
`
export const Logo = styled.h1`
  grid-area: right;
  text-align: center;
  width: 100%;
  font-size: 100px;
  display: flex;
`
export const Letter = styled.span`
  margin: auto;
  ${props =>
    props.theswitch === `on` &&
    css`
      animation: ${glow} 0.5s ease ${props => props.delay}s infinite alternate;
    `}
`
