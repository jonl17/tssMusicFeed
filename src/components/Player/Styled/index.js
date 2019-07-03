import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  background-color: rgb(16, 16, 16);
  color: gold;
`
export const Controls = styled.div`
  justify-self: center;
`
