import styled, { css } from "styled-components"

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 0;
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
  align-content: center;
  justify-content: center;
  height: 50px;
`
export const Play = styled.button`
  height: 30px;
  width: 30px;
  border-style: solid;
  border-width: 15px 0px 15px 30px;
  border-color: transparent transparent transparent gold;
  box-sizing: border-box;
  background-color: transparent;
  transition: 0.5s;
  align-self: center;
  &&:hover {
    cursor: pointer;
  }
`
export const Pause = styled.button`
  height: 30px;
  width: 30px;
  border-style: double;
  border-width: 0px 0px 0px 30px;
  border-color: gold;
  background-color: transparent;
  transition: 0.5s;
  align-self: center;
  &&:hover {
    cursor: pointer;
  }
`

export const Size = styled.button`
  position: absolute;
  right: 30px;
  height: 30px;
  width: 30px;
  border-style: solid;
  border-width: 15px 0px 15px 30px;
  border-color: transparent transparent transparent gold;
  box-sizing: border-box;
  background-color: transparent;
  transition: 0.5s;
  &&:hover {
    cursor: pointer;
  }
  transform: rotate(-90deg);
  ${props =>
    props.fullscreen &&
    css`
      transform: rotate(90deg);
      margin-top: 10px;
    `}
`

export const Track = styled.p`
  position: absolute;
  left: 30px;
`
