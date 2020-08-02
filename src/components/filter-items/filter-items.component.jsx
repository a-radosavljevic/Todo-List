import React, { Component } from "react";
import FilterOptions from "../filter-options/filter-options.component";

import "./filter-items.styles.css";

class FilterItems extends Component {
  state = {
    isShown: false,
  };
  render() {
    const {
      onResetFilters,
      checkedFinished,
      checkedUnfinished,
      checkedStarred,
      checkedUnstared,
      setStatePropertyValue,
    } = this.props;

    const areFiltersUsed =
      !checkedFinished ||
      !checkedUnfinished ||
      !checkedStarred ||
      !checkedUnstared ? (
        <i className="fa fa-asterisk" style={{ color: "gold" }}></i>
      ) : (
        ""
      );

    return (
      <React.Fragment>
        <div
          className="row m-2 vertically-align pointer-cursor hover-highlight-border"
          onClick={this.toggleFilterOptions}
        >
          <i className="fa fa-tasks m-2"></i>{" "}
          <span className="btn m-2">
            {this.state.isShown === true ? "Hide filters" : "Show filters"}
          </span>
          {areFiltersUsed}
        </div>

        {this.state.isShown === true && (
          <FilterOptions
            onResetFilters={onResetFilters}
            checkedFinished={checkedFinished}
            checkedUnfinished={checkedUnfinished}
            checkedStarred={checkedStarred}
            checkedUnstared={checkedUnstared}
            setStatePropertyValue={setStatePropertyValue}
          ></FilterOptions>
        )}
      </React.Fragment>
    );
  }

  toggleFilterOptions = () => {
    this.setState({
      isShown: !this.state.isShown,
    });
  };
}

export default FilterItems;
