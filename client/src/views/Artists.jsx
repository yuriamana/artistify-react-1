import React, { Component } from "react";
// custom tools
import APIHandler from "../api/handler";
// import LabPreview from "../components/preview/LabPreview";
import { Link } from "react-router-dom";
import "../styles/card.css";
// import artists from "../../../server/bin/seed/seed.artist.js";

export default class Artists extends Component {
  state = {
    artists: [],
  };

  componentDidMount() {
    this.fetchArtists();
  }
  fetchArtists = async () => {
    try {
      const res = await APIHandler.get("/api/artists/");
      this.setState({
        artists: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    //  const { artists } = this.state.artists;
    return (
      <div>
        {!this.state.artists ? (
          <p>no artist yet...</p>
        ) : (
          this.state.artists.map((artist) => {
            return (
              <div key={artist._id} className="card">
                <ul>
                  <li>
                    <Link to={"/artists/" + artist._id}>{artist.name}</Link>
                  </li>
                  <li>{artist.description}</li>
                  <li>{artist.style.name}</li>
                  <li>{artist.rates}</li>
            
                </ul>
              </div>
            );
          })
        )}
      </div>
  
    );
  }
}
