export const TURN_SWITCH = "TURN_SWITCH"
export const turnSwitch = () => ({
  type: TURN_SWITCH,
})

export const GET_PLAYLIST = "GET_PLAYLIST"
export const getPlaylist = playlist => ({
  type: GET_PLAYLIST,
  playlist,
})

export const CHANGE_SONG = "CHANGE_SONG"
export const changeSong = direction => ({
  type: CHANGE_SONG,
  direction,
})

export const GET_GALLERY = "GET_GALLERY"
export const getGallery = gallery => ({
  type: GET_GALLERY,
  gallery,
})

export const TOGGLE_PLAYER = "TOGGLE_PLAYER"
export const togglePlayer = toggler => ({
  type: TOGGLE_PLAYER,
  toggler,
})
