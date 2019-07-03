import { TURN_SWITCH, GET_PLAYLIST, CHANGE_SONG } from "./actions"

const initialState = {
  theswitch: `off`,
  playlist: [],
  trackChosen: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TURN_SWITCH:
      if (state.theswitch === `off`) {
        return { ...state, theswitch: `on` }
      } else {
        return { ...state, theswitch: `off` }
      }
    case GET_PLAYLIST:
      return { ...state, playlist: action.playlist }
    case CHANGE_SONG:
      return { ...state, trackChosen: state.trackChosen + action.direction }
    default:
      return state
  }
}
