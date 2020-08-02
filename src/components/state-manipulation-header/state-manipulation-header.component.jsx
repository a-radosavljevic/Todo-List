import React from "react";
import ItemDefinition from "../item-definition/item-definition.component";
import SearchInput from "../search-input/search-input.component";

const StateManipulationHeader = ({
  searchQuery,
  onSearchChange,
  onResetState,
  onCreateNewItem,
  renderItemManipulation,
  manipulatingItem,
  onSave,
  onCancel,
}) => (
  <React.Fragment>
    <div className="row vertically-align">
      <div className="col-md-2 col-xs-6">
        <button
          className="btn btn-outline-primary btn-sm m-1"
          onClick={() => onResetState()}
        >
          <i className="fa fa-undo m-2"></i>
          Reset
        </button>
      </div>
      <div className="col-md-8 col-xs-12">
        <SearchInput
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        ></SearchInput>
      </div>
      <div className="col-md-2 col-xs-6">
        <button
          className="btn btn-outline-primary btn-sm m-1 pull-right"
          onClick={() => onCreateNewItem()}
        >
          <i className="fa fa-plus m-2"></i>
          Create new item
        </button>
      </div>
    </div>

    <div className="row center-elements m-2">
      <div className="col-1"></div>
      <div className="col-2">Title</div>
      <div className="col-6">Description</div>
      <div className="col-1"></div>
      <div className="col-1"></div>
      <div className="col-1"></div>
    </div>

    {RenderItemManipulation(
      renderItemManipulation,
      manipulatingItem,
      onSave,
      onCancel
    )}
  </React.Fragment>
);

const RenderItemManipulation = (
  renderItemManipulation,
  manipulatingItem,
  onSave,
  onCancel
) => {
  if (renderItemManipulation === true)
    return (
      <ItemDefinition
        item={manipulatingItem}
        onSave={onSave}
        onCancel={onCancel}
      ></ItemDefinition>
    );
};

export default StateManipulationHeader;
