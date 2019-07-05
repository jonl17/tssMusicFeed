import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  line-height: 0;
  -webkit-column-count: 5;
  -moz-column-count: 5;
  column-count: 5;

  -webkit-column-gap: 0px;
  -moz-column-gap: 0px;
  column-gap: 0px;
`
export const ImageContainer = styled.div`
  position: relative;
`
export const HoverBox = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 105, 180, 0.5);
  opacity: 0;
  &&:hover {
    opacity: 1;
  }
`
export const HoverBoxText = styled.p`
  margin: auto;
`
