import React, { Component } from "react";
import APIHandler from "./../../api/handler";
// import "../styles/label.css";

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
  
    // handleDelete()
  
   
  render() {
    return (
      <div>
        {!this.state.labels ? (
          <p>loading...</p>
        ) : (
          this.state.labels.map((label) => {
            return (
              <div key={label._id} className="label">
                <ul>
                  <li>{label.cover}</li>
                  <li>{label.title}</li>
                  <li>{label.releaseDate}</li>
                  <li>{label.label.name}</li>
                  <li>{label.artist.name}</li>
                  <li>{label.rates}</li>
                </ul>
              </div>
            );
          })
        )}
      </div>
    );
  }
  }