import React from "react"
import { Provider } from "react-redux"
import { createStore as createSpacemanStore } from "redux"
import rootReducer from "."

const createStore = () => createSpacemanStore(rootReducer)

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
