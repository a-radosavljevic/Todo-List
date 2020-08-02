import React from "react";

import "./star.styles.css";

const Star = ({ starred, onClick, item }) => {
  let classes = "fa fa-star star-element fa-2x";
  if (!starred) classes = "fa fa-star-o fa-2x";

  return (
    <i
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
      onClick={() => onClick(item)}
    />
  );
};

export default Star;
