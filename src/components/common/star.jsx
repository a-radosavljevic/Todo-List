import React, { Component } from "react";

class Star extends Component {
  render() {
    let classes = "fa fa-star star-element fa-2x";
    if (!this.props.starred) classes = "fa fa-star-o fa-2x";
    return (
      <i
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
        onClick={() => this.props.onClick(this.props.item)}
      />
    );
  }
}

export default Star;
