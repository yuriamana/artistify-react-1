import React, { Component } from "react";
// custom tools
// import APIHandler from "../api/handler";
import LabPreview from "../components/preview/LabPreview";
// styles
import "../styles/card.css";

export default class Artists extends Component {

  render() {
    return (
      <React.Fragment>
        <h1 className="title diy">D.I.Y (Artists)</h1>

        <LabPreview name="artists"/>

      </React.Fragment>
    );
  }
}
