import React, { useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App () {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists
        });
      });
      spotify.getPlaylist("19KqrmlhyRPeDXmnXBwNzc").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discoverWeekly: response
        })
      );
    }
  }, [token, dispatch]);

  return (

      <div className="App">

      {token ? <Player spotify={spotify}/> : <Login/>}

      </div>

  );
}

export default App;
