import { TURN_SWITCH } from "./actions"

const initialState = {
  theswitch: `off`,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TURN_SWITCH:
      if (state.theswitch === `off`) {
        return { ...state, theswitch: `on` }
      } else {
        return { ...state, theswitch: `off` }
      }
    default:
      return state
  }
}
