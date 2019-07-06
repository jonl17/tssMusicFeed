import React from "react"
import { Container, ImageContainer, HoverBox, HoverBoxText } from "./Styled"

import { connect } from "react-redux"

const Gallery = ({ gallery }) => {
  console.log(gallery)
  if (gallery[0] !== undefined) {
    return (
      <Container>
        {gallery.map((item, index) => (
          <>
            <ImageContainer key={index}>
              <img
                alt={item.name}
                style={{ width: "100%" }}
                src={item.fluid.src}
              />
              <HoverBox style={{ position: "absolute" }}>
                <HoverBoxText>{item.name}</HoverBoxText>
              </HoverBox>
            </ImageContainer>
          </>
        ))}
      </Container>
    )
  } else {
    return <p>loading gallery...</p>
  }
}

const mapStateToProps = state => ({
  gallery: state.reducer.gallery,
})

export default connect(mapStateToProps)(Gallery)
