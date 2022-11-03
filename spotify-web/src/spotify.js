const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURL = "http://localhost:3000/"
const clientID = "81d10886764c475c8b95ecff05c77771"

const scope = [
    "user-read-currently-playing",  
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]


export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scope.join("%20")}
&response_type=token&show_dialog=true`

export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };