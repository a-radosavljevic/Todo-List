import React, { Component } from "react";

class ItemDefinition extends Component {
  state = {};
  render() {
    console.log(this.props.item);
    let item = { title: "", description: "" };

    if (this.props.item !== undefined && this.props.item !== null)
      item = this.props.item;

    return (
      <React.Fragment>
        <hr />
        <div className="row center-elements m-2">
          <div className="col-1"></div>
          <div className="col-2">
            <input type="text" className="form-control" value={item.title} />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              value={item.description}
            />
          </div>
          <div className="col-1">
            <button
              onClick={() =>
                this.props.onSave({ title: "New", description: "New" })
              }
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
}

export default ItemDefinition;
