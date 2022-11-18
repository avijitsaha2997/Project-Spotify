import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useStateValue } from "./StateProvider";

function Sidebar () {
  // eslint-disable-next-line no-unused-vars
  const [{ playlists }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
    <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
    <SidebarOption Icon={HomeIcon} title="Home"/>
    <SidebarOption Icon={SearchIcon} title="Search"/>
    <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

    <br />
    <strong className="sidebar__title">PLAYLISTS</strong>
    <hr />
    <div>
    {playlists?.items?.map((playlists) => (
      <SidebarOption title={playlists.name} key={Math.random()}/>
    ))}
    </div>

    </div>
  );
}

export default Sidebar;
