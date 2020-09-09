import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Header.css";
import Button from "@material-ui/core/Button";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PersonIcon from "@material-ui/icons/Person";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="header">
        <div>
          <a className="navbar-brand" href="javascript:;">
            Dashboard
          </a>
        </div>

        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon icon-bar"></span>
          <span className="navbar-toggler-icon icon-bar"></span>
          <span className="navbar-toggler-icon icon-bar"></span>
        </Button>
        <ul class="navbar-nav">
          <li class="nav-item">
            <span>
              <DashboardIcon /> Dashboard
            </span>
          </li>
          <li class="nav-item dropdown">
            <span>
              <NotificationsActiveIcon /> Notifications
            </span>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="javascript:;"
              id="navbarDropdownProfile"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <PersonIcon />
              <span class="d-lg-none d-md-block">Account</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
