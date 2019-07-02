import React from "react"
import "./global.css"
import "../../fonts/fonts.css"

const style = {
  height: `100vh`,
  width: `100%`,
  backgroundColor: `#f1f5f8`,
  boxSizing: `border-box`,
  padding: `100px`,
  display: `grid`,
  gridTemplateColumns: `1fr 1fr`,
  gridTemplateAreas: `"left right"`,
}

const Container = ({ children }) => {
  return (
    <div style={style} className="Container">
      {children}
    </div>
  )
}

export default Container
