import React, { Component } from "react";
import APIHandler from "../api/handler";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default class AdminStyles extends Component {
    state = {
      style: [],
    };
  
    componentDidMount() {
      this.fetchStyles();
    }
    fetchStyles = async () => {
      try {
        const res = await APIHandler.get("/api/styles/")
          this.setState({
            labels: res.data,
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