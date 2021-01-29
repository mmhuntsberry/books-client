import React, { Component } from "react";
import { cover__art } from "./item.module.css";

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div>
          <h2>{this.props.title}</h2>
          <h5>{this.props.author}</h5>
          <p>{this.props.publisher}</p>
        </div>
        <img
          className={cover__art}
          src={this.props.cover}
          alt={this.props.title}
        />
      </li>
    );
  }
}
export default Item;
