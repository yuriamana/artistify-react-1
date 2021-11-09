import React, { Component } from "react";
import APIHandler from "../api/handler";
import { Link } from "react-router-dom";
import "../styles/card.css";

export default class AdminArtists extends Component {
  state = {
    artists: [],
  };

  componentDidMount() {
    this.fetchArtists();
  }
  fetchArtists = async () => {
    try {
      const res = await APIHandler.get("/api/artists/")
        this.setState({
          artists: res.data,
        });
      } catch(err) {
        console.error(err);
      };
  };

  handleDelete()

  render()
  {

  }
}