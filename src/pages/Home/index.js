import React, { Component } from "react";

import tela01 from "../../assets/images/tela01.jpg";
import "./styles.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <img src={tela01} alt="" srcset="" />
      </div>
    );
  }
}
