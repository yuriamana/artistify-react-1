import React, { Component } from "react";
// custom tools
import handler from "../api/handler";
import LabPreview from "../components/preview/LabPreview";
// styles
import "../styles/card.css";
import "../styles/icon-favorite.css";

export default class Albums extends Component {

  async componentDidMount() {
    console.log(handler);
    const x = await handler.get("/api/albums");
    console.log(x);
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="title diy">D.I.Y (Albums)</h1>
        <LabPreview name="albums" />
      </React.Fragment>
    );
  }
}
