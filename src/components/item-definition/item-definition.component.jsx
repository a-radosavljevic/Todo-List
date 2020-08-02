import React from "react";

let item;

const ItemDefinition = ({ item: itemProp, onSave, onCancel }) => {
  item = {
    id: 0,
    title: "",
    description: "",
    starred: false,
    isFinished: false,
  };

  if (itemProp !== undefined && itemProp !== null) item = itemProp;

  return (
    <React.Fragment>
      <hr />
      <div className="row center-elements m-2">
        <div className="col-1"></div>
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            defaultValue={item.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            defaultValue={item.description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="col-1">
          <button
            onClick={() => onSave(item)}
            className="btn btn-success btn-sm"
          >
            <i className="fa fa-check fa-2x"></i>
          </button>
        </div>
        <div className="col-1">
          <button onClick={() => onCancel()} className="btn btn-danger btn-sm">
            <i className="fa fa-times fa-2x"></i>
          </button>
        </div>
        <div className="col-1"></div>
      </div>
      <hr />
    </React.Fragment>
  );
};

const handleTitleChange = ({ currentTarget: input }) => {
  item.title = input.value;
};
const handleDescriptionChange = ({ currentTarget: input }) => {
  item.description = input.value;
};

export default ItemDefinition;
