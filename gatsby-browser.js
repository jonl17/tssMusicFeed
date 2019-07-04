// export { default as wrapRootElement } from "./src/state/reduxWrapper"

import React from "react"
import { Provider } from "react-redux"
import { createStore as createSpacemanStore } from "redux"
import rootReducer from "./src/state/index"
import { GlobalStyle } from "./src/components/GlobalStyle"

const createStore = () => createSpacemanStore(rootReducer)

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={createStore()}>
      <GlobalStyle />
      {element}
    </Provider>
  )
}
