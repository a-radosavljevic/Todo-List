import React, { Component } from "react";

class FilterOptions extends Component {
  state = {};

  render() {
    const {
      onResetFilters,
      checkedFinished,
      checkedUnfinished,
      checkedStarred,
      checkedUnstared,
    } = this.props;

    return (
      <div className="container">
        <hr />

        <div className="row">
          <div className="col-6">Showing items</div>
          <div className="col-6">
            <input
              type="checkbox"
              defaultChecked={checkedFinished}
              onChange={(e) => this.handleChangeChk(e)}
              name="showFinished"
            ></input>{" "}
            Finished{" "}
            <input
              type="checkbox"
              defaultChecked={checkedUnfinished}
              onChange={(e) => this.handleChangeChk(e)}
              name="showUnfinished"
            ></input>{" "}
            Unfinished
            <br></br>
            <input
              type="checkbox"
              defaultChecked={checkedStarred}
              onChange={(e) => this.handleChangeChk(e)}
              name="showStarred"
            ></input>{" "}
            Starred{" "}
            <input
              type="checkbox"
              defaultChecked={checkedUnstared}
              onChange={(e) => this.handleChangeChk(e)}
              name="showUnstared"
            ></input>{" "}
            Unstarred
            <br></br>
          </div>
        </div>

        <div className="row text-center">
          <button className="btn btn-outline-primary" onClick={onResetFilters}>
            Reset filters
          </button>
        </div>

        <hr />
      </div>
    );
  }

  handleChangeChk = (e) => {
    this.props.setStatePropertyValue(e.target.name, e.target.checked);
  };
}

export default FilterOptions;
