import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import "./navbar.styles.css";

const NavBar = ({ userName }) => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <i className="fa fa-check-square-o fa-lg m-2 logo-element"></i>
      Todo list
    </h5>
    <a className="btn btn-outline-primary" href="#logout">
      <i className="fa fa-cog fa-lg m-2 logo-element"></i>
      Settings
    </a>
    <nav className="my-2 my-md-0 mr-md-3">
      <h5 className="p-2 text-dark">
        <i className="fa fa-user fa-lg m-2"></i>
        {userName}
      </h5>
    </nav>
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        className="btn btn-outline-primary button-without-border"
      ></Dropdown.Toggle>
      <Dropdown.Menu alignRight>
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default NavBar;
