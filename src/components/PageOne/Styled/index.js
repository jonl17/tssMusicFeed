import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f1f5f8;
  box-sizing: border-box;
  padding: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
`
