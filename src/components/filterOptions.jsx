import React, { Component } from "react";

class FilterOptions extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-6">Showing items</div>
          <div className="col-6">
            <input type="checkbox" name="chkUnfinishedItems"></input> Unfinished
            <input
              type="checkbox"
              name="chkUnfinishedItems"
            ></input> Finished <br></br>
            <input type="checkbox" name="chkStarredItems"></input> Starred
            <input
              type="checkbox"
              name="chkUnstarredItems"
            ></input> Unstarred <br></br>
          </div>
        </div>
        <div className="row">
          <div className="col-6">Item lists</div>
          <div className="col-6">
            <input type="checkbox" name="chkUnfinishedItems"></input> Unfinished{" "}
            <br></br>
            <input
              type="checkbox"
              name="chkUnfinishedItems"
            ></input> Finished <br></br>
            <input type="checkbox" name="chkStarredItems"></input> Starred{" "}
            <br></br>
            <input
              type="checkbox"
              name="chkUnstarredItems"
            ></input> Unstarred <br></br>
          </div>
        </div>
        <div className="row text-center">
          <button className="btn btn-outline-primary">Reset filters</button>
        </div>
        <hr />
      </div>
    );
  }
}

export default FilterOptions;
