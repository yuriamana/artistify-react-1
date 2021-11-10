import React, { Component } from "react";
import APIHandler from "./../../api/handler";
// import "../styles/style.css";

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
  
    // handleDelete()
  
    
  render() {
    return (
      <div>
        {!this.state.styles ? (
          <p>loading...</p>
        ) : (
          this.state.styles.map((style) => {
            return (
              <div key={style._id} className="style">
                <ul>
                  <li>{style.cover}</li>
                  <li>{style.title}</li>
                  <li>{style.releaseDate}</li>
                  <li>{style.label.name}</li>
                  <li>{style.artist.name}</li>
                  <li>{style.rates}</li>
                </ul>
              </div>
            );
          })
        )}
      </div>
    );
  }
  }