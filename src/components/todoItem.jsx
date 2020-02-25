import React, { Component } from "react";
import Star from "./common/star";

class TodoItem extends Component {
  state = {};
  render() {
    return (
      <div className="row m-2 center-elements">
        <div className="col-1">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={this.props.item.isFinished}
              onChange={() => this.props.onFinishTask(this.props.item)}
            ></input>
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="col-2">
          <h3 className="form-control">{this.props.item.title}</h3>
        </div>
        <div className="col-6">
          <h6 className="form-control">{this.props.item.description}</h6>
        </div>
        <div className="col-1">
          <button
            onClick={() => this.props.onEdit(this.props.item)}
            className="btn btn-outline-primary btn-sm"
          >
            <i className="fa fa-pencil fa-2x"></i>
          </button>
        </div>
        <div className="col-1">
          <button
            onClick={() => this.props.onDelete(this.props.item)}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fa fa-trash fa-2x"></i>
          </button>
        </div>
        <div className="col-1">
          <Star
            starred={this.props.item.starred}
            onClick={this.props.onHighlight}
            item={this.props.item}
          />
        </div>
      </div>
    );
  }
}

export default TodoItem;
