import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <i className="fa fa-check-square-o fa-lg m-2 logo-element"></i>
          Todo list
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <h5 className="p-2 text-dark">
            <i className="fa fa-user fa-lg m-2"></i>
            {this.props.userName}
          </h5>
        </nav>
        <a className="btn btn-outline-primary" href="#signup">
          Sign up
        </a>
      </div>
    );
  }
}

export default NavBar;
