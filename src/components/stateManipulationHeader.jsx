import React, { Component } from "react";
import ItemDefinition from "./itemDefinition";

class StateManipulationHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <button
              className="btn btn-outline-primary btn-sm m-2"
              onClick={() => this.props.onCreateNewItem()}
            >
              <i className="fa fa-plus m-2"></i>
              Create new item
            </button>
          </div>
          <div className="col-md-6 col-xs-12">
            <button
              className="btn btn-outline-primary btn-sm m-2 pull-right"
              onClick={() => this.props.onResetState()}
            >
              <i className="fa fa-undo m-2"></i>
              Reset
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

        {this.RenderItemManipulation()}
      </React.Fragment>
    );
  }

  RenderItemManipulation = () => {
    if (this.props.renderItemManipulation === true)
      return (
        <ItemDefinition
          item={this.props.manipulatingItem}
          onSave={this.props.onSave}
          onCancel={this.props.onCancel}
        ></ItemDefinition>
      );
  };
}

export default StateManipulationHeader;
