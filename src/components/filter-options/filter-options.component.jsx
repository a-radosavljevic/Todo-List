import React from "react";

const FilterOptions = ({
  onResetFilters,
  checkedFinished,
  checkedUnfinished,
  checkedStarred,
  checkedUnstared,
  setStatePropertyValue,
}) => {
  const handleChangeChk = (e) => {
    setStatePropertyValue(e.target.name, e.target.checked);
  };

  return (
    <div className="container">
      <hr />

      <div className="row">
        <div className="col-6">Showing items</div>
        <div className="col-6">
          <input
            type="checkbox"
            defaultChecked={checkedFinished}
            onChange={(e) => handleChangeChk(e)}
            name="showFinished"
          ></input>{" "}
          Finished{" "}
          <input
            type="checkbox"
            defaultChecked={checkedUnfinished}
            onChange={(e) => handleChangeChk(e)}
            name="showUnfinished"
          ></input>{" "}
          Unfinished
          <br></br>
          <input
            type="checkbox"
            defaultChecked={checkedStarred}
            onChange={(e) => handleChangeChk(e)}
            name="showStarred"
          ></input>{" "}
          Starred{" "}
          <input
            type="checkbox"
            defaultChecked={checkedUnstared}
            onChange={(e) => handleChangeChk(e)}
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
};

export default FilterOptions;
