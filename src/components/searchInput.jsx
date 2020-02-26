import React, { Component } from "react";

class SearchInput extends Component {
  state = {};
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        type="text"
        id="searchInput"
        className="form-control m-1"
        defaultValue={value}
        onChange={onChange}
        placeholder="Search item title or description"
      ></input>
    );
  }
}

export default SearchInput;
