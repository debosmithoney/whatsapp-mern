import React from "react";
import SidebarChat from "./SidebarChat"
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_avatar">
            <Avatar src="https://avatars3.githubusercontent.com/u/65868616?s=400&u=ccd12fcde07093acaf88ae063e626d1abfa3ef0a&v=4"/>
        </div>
        <div className="sidebar_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
            <SearchOutlinedIcon />
            <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />


      </div>
    </div>
  );
}

export default Sidebar;
