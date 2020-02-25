import React, { Component } from "react";

class ItemDefinition extends Component {
  state = {};

  item = {
    id: 0,
    title: "",
    description: "",
    starred: false,
    isFinished: false
  };
  render() {
    if (this.props.item !== undefined && this.props.item !== null)
      this.item = this.props.item;

    return (
      <React.Fragment>
        <hr />
        <div className="row center-elements m-2">
          <div className="col-1"></div>
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              defaultValue={this.item.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              defaultValue={this.item.description}
              onChange={this.handleDescriptionChange}
            />
          </div>
          <div className="col-1">
            <button
              onClick={() => this.props.onSave(this.item)}
              className="btn btn-success btn-sm"
            >
              <i className="fa fa-check fa-2x"></i>
            </button>
          </div>
          <div className="col-1">
            <button
              onClick={() => this.props.onCancel()}
              className="btn btn-danger btn-sm"
            >
              <i className="fa fa-times fa-2x"></i>
            </button>
          </div>
          <div className="col-1"></div>
        </div>
        <hr />
      </React.Fragment>
    );
  }

  handleTitleChange = ({ currentTarget: input }) => {
    this.item.title = input.value;
  };
  handleDescriptionChange = ({ currentTarget: input }) => {
    this.item.description = input.value;
  };
}

export default ItemDefinition;
