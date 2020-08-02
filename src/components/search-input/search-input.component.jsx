import React from "react";

const SearchInput = ({ searchQuery, onSearchChange }) => (
  <input
    type="text"
    id="searchInput"
    className="form-control m-1"
    defaultValue={searchQuery}
    onChange={onSearchChange}
    placeholder="Search item title or description"
  ></input>
);

export default SearchInput;
