import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Grid, Slider } from "@mui/material";

import React from "react";
import "./Footer.css";

function Footer () {
  return (
    <div className="footer">

    <div className="footer__left">
    <img
    src="https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"

    alt=""

    className="footer__albumLogo"/>
      <div className="footer__songInfo">
        <h4>No song is playing</h4>
        <p>User</p>
      </div>
    </div>

    <div className="footer__center">
      <ShuffleIcon className="footer__green"/>
      <SkipPreviousIcon className="footer__icon"/>
      <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
      <SkipNextIcon className="footer__icon"/>
      <RepeatIcon className="footer__green"/>
    </div>

    <div className="footer__right">
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlayIcon />
        </Grid>
        <Grid item>
          <VolumeDownIcon />
        </Grid>
        <Grid item xs>
          <Slider />
        </Grid>
      </Grid>
    </div>

    </div>
  );
}

export default Footer;
