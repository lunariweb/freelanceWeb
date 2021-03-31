import { Avatar, makeStyles } from "@material-ui/core";
import { Facebook, GitHub, Star, Twitter } from "@material-ui/icons";
import React from "react";
import "../css/Sidebar.css";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import SidebarChat from "./SidebarChat";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  medium: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className="sidebar">
      {/* rates */}
      <div className="sidebar__rates">
        <div className="top_section">
          <Avatar className={classes.large} />
          <h3>Username</h3>
          <Star className="star" />
          <h4>5.0</h4>
        </div>
        <div className="mid_section">
          <div className="mid">
            <h3>Response Rate</h3>

            <LinearProgressWithLabel value="70" />
          </div>
          <div className="mid">
            <h3>Delivered on Time</h3>
            <LinearProgressWithLabel value="70" />
            {/* bar */}
            {/* percantage */}
          </div>
          <div className="mid">
            <h3>Order Completion</h3>
            <LinearProgressWithLabel value="70" />
            {/* bar */}
            {/* percantage */}
          </div>
        </div>
        <div className="last_section">
          <div className="last__content">
            <h3>Earned Money</h3>
            <h3 className="text__right">$100</h3>
          </div>
          <div className="last__content">
            <h3>Response Time</h3>
            <h3 className="text__right">4 Hrs</h3>
          </div>
        </div>
      </div>
      {/* messages */}
      <div className="sidebar__messages">
        <div className="header">
          <h4>Inbox</h4>
          <h4 className="view__button">View All</h4>
        </div>
        <div className="chats">
          <SidebarChat
            username="nimeshanirmal"
            message="new message from the buyer pls help him"
            image={avatar1}
          />
          <SidebarChat
            username="creedhavoc"
            message="something new message was here change it blah"
            image={avatar2}
          />
        </div>
      </div>
      <div className="sidebar__social">
        <div className="social__header">
          <h3>Link your social networks</h3>
        </div>
        <div className="social__nets">
          <Facebook className="net" />
          <GitHub className="net" />
          <Twitter className="net" />
        </div>
      </div>
      {/* social nets */}
    </div>
  );
};

export default Sidebar;
