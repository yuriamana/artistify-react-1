import React, { Component } from "react";
import APIHandler from "./../../api/handler";

export default class FormCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      style: null,
      styles: [],
    };
  }

  async componentDidMount() {
    const res = await APIHandler.get("/api/styles");
    this.setState({
      styles: res.data,
    }, () => {
      this.setState({
        style: this.state.styles[0]._id
      })
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, style } = this.state;
    try {
      await APIHandler.post("/api/artists", {
        name,
        description,
        style,
      });

    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log("this.state", this.state);
    return (
      <form>
        <h1>create a new artist</h1>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="description"
          type="text"
          placeholder="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <select name="style" onChange={this.handleChange}>
          {this.state.styles.map((style, i) => {
            return (
              <option key={i} value={style._id}>
                {style.name}
              </option>
            );
          })}
        </select>

        <button onClick={this.handleSubmit}>ok</button>
      </form>
    );
  }
}
