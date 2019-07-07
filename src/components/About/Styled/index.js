import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  overflow: hidden;
`
export const GIF = styled.img`
  width: 100%;
  box-sizing: border-box;
  padding: 25%;
  transform: rotate(-5deg);
`
export const BioContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 50px;
  transform: rotate(5deg);
  margin: auto;
`
export const Name = styled.p`
  font-size: 18px;
`
export const Bio = styled.p``
