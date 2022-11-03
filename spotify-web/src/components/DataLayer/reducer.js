export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  appData: null,
  listChoosing: null,
};

export const userAction = {
  setUser:"SET_USER",
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case userAction.setUser:
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_TRACKINDEX":
      return {
        ...state,
        trackIndex: action.trackIndex
      };

    case "SET_LISTCHOOSING":
      return {
        ...state,
        listChoosing: action.listChoosing,
      };

    case "SET_APPDATA":
      return {
        ...state,
        appData: action.appData,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
