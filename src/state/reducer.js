import {
  TURN_SWITCH,
  GET_PLAYLIST,
  CHANGE_SONG,
  GET_GALLERY,
  TOGGLE_PLAYER,
} from "./actions"

const initialState = {
  theswitch: `off`,
  playlist: {},
  trackChosen: 0,
  gallery: {},
  playerFullscreen: true,
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
      var newplaylist = []
      action.playlist.map(item =>
        newplaylist.push({
          title: item.node.frontmatter.title,
          src: item.node.frontmatter.src,
        })
      )
      return { ...state, playlist: newplaylist }
    case CHANGE_SONG:
      return { ...state, trackChosen: state.trackChosen + action.direction }
    case GET_GALLERY:
      var newgallery = []
      action.gallery.map(item =>
        newgallery.push({
          name: item.node.name,
          fluid: item.node.childImageSharp.fluid,
        })
      )
      return { ...state, gallery: newgallery }
    case TOGGLE_PLAYER:
      return { ...state, playerFullscreen: action.toggler }
    default:
      return state
  }
}
