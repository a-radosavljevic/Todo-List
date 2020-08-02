import React from "react";
import Star from "../common/star/star.component";

import "./todo-item.styles.css";

const TodoItem = ({ item, onFinishTask, onEdit, onDelete, onHighlight }) => (
  <div className="row m-2 center-elements">
    <div className="col-1">
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={item.isFinished}
          onChange={() => onFinishTask(item)}
        ></input>
        <span className="checkmark"></span>
      </label>
    </div>
    <div className="col-2">
      <h3 className="form-control">{item.title}</h3>
    </div>
    <div className="col-6">
      <h6 className="form-control">{item.description}</h6>
    </div>
    <div className="col-1">
      <button
        onClick={() => onEdit(item)}
        className="btn btn-outline-primary btn-sm"
      >
        <i className="fa fa-pencil fa-2x"></i>
      </button>
    </div>
    <div className="col-1">
      <button
        onClick={() => onDelete(item)}
        className="btn btn-outline-danger btn-sm"
      >
        <i className="fa fa-trash fa-2x"></i>
      </button>
    </div>
    <div className="col-1">
      <Star starred={item.starred} onClick={onHighlight} item={item} />
    </div>
  </div>
);

export default TodoItem;
