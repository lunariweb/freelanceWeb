import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/SidebarChat.css";

const SidebarChat = ({ username, message, image }) => {
  return (
    <div className="sidebarChat">
      <Avatar src={image} />
      <div className="chat__content">
        <h4>{username}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
