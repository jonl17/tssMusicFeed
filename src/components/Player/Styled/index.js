import styled, { css } from "styled-components"

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.8s;
  background-color: rgb(16, 16, 16);
  color: gold;
  display: grid;
  height: 50px;
  /* top small mode */
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left middle right";
  /* fullscreen mode */
  ${props =>
    props.fullscreen &&
    css`
      height: 100%;
    `}
`
export const Controls = styled.div`
  grid-area: middle;
  display: flex;
  justify-content: space-evenly;
`
