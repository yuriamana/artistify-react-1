import React, { Component } from "react";
import APIHandler from "../api/handler";
import { Link } from "react-router-dom";
import "../styles/label.css";

export default class AdminLabels extends Component {
    state = {
      label: [],
    };
  
    componentDidMount() {
      this.fetchLabels();
    }
    fetchLabels = async () => {
      try {
        const res = await APIHandler.get("/api/labels/")
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