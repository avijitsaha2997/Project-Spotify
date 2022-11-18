/* eslint-disable camelcase */
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PropTypes from "prop-types";
import React from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useStateValue } from "./StateProvider";

function Body ({ spotify }) {
  // eslint-disable-next-line no-unused-vars
  const [{ discoverWeekly }, dispatch] = useStateValue();
  return (
    <div className="body">
        <Header spotify={spotify}/>
        <div className="body__info">
          <img src={discoverWeekly?.images[0].url} alt="" />
          <div className="body__infoText">
            <strong>PLAYLISTS</strong>
            <h2>Discover Weekly</h2>
            <p>{discoverWeekly?.description}</p>
          </div>

        </div>
        <div className="body__songs">

          <div className="body__icons">

            <PlayCircleFilledIcon className="body__shuffle"/>
            <FavoriteIcon fontSize="large"/>
            <MoreHorizIcon/>

          </div>
          {discoverWeekly?.tracks.items.map((item) => (
            <SongRow track={item.track} key={Math.random}/>
          ))}

        </div>
    </div>
  );
}
Body.propTypes = {
  spotify: PropTypes.any,
  playSong: PropTypes.any
};

export default Body;
