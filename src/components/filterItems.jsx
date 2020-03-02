import React, { Component } from "react";
import FilterOptions from "./filterOptions";

class FilterItems extends Component {
  state = {
    isShowed: false
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="row m-2 vertically-align pointer-cursor hover-highlight-border"
          onClick={this.toggleFilterOptions}
        >
          <i className="fa fa-tasks m-2"></i>{" "}
          <span className="btn m-2">
            {this.state.isShowed && "Hide filters"}
            {!this.state.isShowed && "Show filters"}
          </span>
        </div>

        {this.state.isShowed === true && <FilterOptions></FilterOptions>}
      </React.Fragment>
    );
  }

  toggleFilterOptions = () => {
    this.setState({
      isShowed: !this.state.isShowed
    });
  };
}

export default FilterItems;
