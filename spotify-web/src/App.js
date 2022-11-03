import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './components/DataLayer';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login';
import Player from './components/Player';
import { baseURL } from './config';
import { getTokenFromResponse } from './spotify';

const s = new SpotifyWebApi();

function App() {
  const [{ token, appData }, dispatch] = useDataLayerValue();
  useEffect(() => {

    fetch(`${baseURL}/song`)
    .then((res) => res.json())
    .then((jsonResp) => {
      dispatch({
        type: 'SET_APPDATA',
        appData: jsonResp.appData.popular.vietnam
      })
      console.log("ket qua sau khi fetch ve:",{jsonResp})
    })
    .catch((error) => console.log("loi ne ba:" + error));


    const hash = getTokenFromResponse();
    console.log("###",hash)
    window.location.hash = "";
    let _token = hash.access_token;



    if (_token) {
      s.setAccessToken(_token);
      sessionStorage.setItem('access_token',_token)
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist("37i9dQZEVXcJZyENOWUFo7")
      .then((response) =>
      {console.log("🐱‍🏍🐱‍🏍🐱‍🏍",response)
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })} 
      )

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage token={sessionStorage.getItem('access_token')}/>}/>
        {/* <Route path="/login" element={}/> */}
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;

