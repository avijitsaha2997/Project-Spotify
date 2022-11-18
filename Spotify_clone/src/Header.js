import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header () {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
        <div className="header__left">
            <SearchIcon/>
            <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
        </div>

        <div className="header__right">
            <Avatar src={user?.images[0].url} alt={user?.display_name}/>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  );
}

export default Header;
