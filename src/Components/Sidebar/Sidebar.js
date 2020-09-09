import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ThreeDRotation from "@material-ui/icons/ThreeDRotation";
import SidebarOption from "./SidebarOption";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MessageIcon from "@material-ui/icons/Message";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import { Button, Box, Typography, Avatar, Divider } from "@material-ui/core";
import "./Sidebar.css";
import profilePic from "../../Assets/Images/sample-profile.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Sidebar() {
  const classes = useStyles();
  return (
    <div className="sidebar">
      {/* AVatar Box */}
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.large}
          // className={classes.avatar}
          //component={RouterLink}
          alt="Glennjk"
          src={profilePic}
        />
        <div className="details">
          <h2>Glenn</h2>
          <h5>Developer</h5>
        </div>
      </Box>
      <Divider />
      {/* close nav bar button */}
      <SidebarOption active text="Dashboard" Icon={DashboardIcon} />
      <SidebarOption text="Reservations" Icon={DashboardIcon} />
      <SidebarOption text="Messages" Icon={QuestionAnswerIcon} />
      <SidebarOption text="Profile" Icon={AccountCircleIcon} />
      <SidebarOption text="Chat Room" Icon={MessageIcon} />
      <SidebarOption text="Free Materials" Icon={ImportContactsIcon} />
    </div>
  );
}

export default Sidebar;
