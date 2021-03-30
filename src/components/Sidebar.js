import { Avatar, makeStyles } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import React from "react";
import "../css/Sidebar.css";
import LinearProgressWithLabel from "./LinearProgressWithLabel";

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
      {/* social nets */}
    </div>
  );
};

export default Sidebar;
