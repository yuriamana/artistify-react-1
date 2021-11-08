import React, { Component } from "react";
// custom tools
import APIHandler from "../api/handler";
// import LabPreview from "../components/preview/LabPreview";
import { Link } from "react-router-dom";
// styles
import "../styles/card.css";

export default class Artists extends Component {
  state = {
    artists: [],
  };

  componentDidMount() {
    this.fetchArtists();
  }
  fetchArtists = async () => {
    APIHandler.get("/api/artists" + this.props._id)
      .then(({ data }) => {
        this.setState({
          artists: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  render() {
    // const { artists } = this.state;
    return (
      <div>
        {!this.state.artists ? (
          <p>loading...</p>
        ) : (
            this.state.artists.map(artist => {
              return (
                <div>
                <ul>
                  <li>{artist.name}</li>
                  <li>{artist.description}</li>
                  <li>{artist.style}</li>
                  <li>{artist.rates}</li>
                  
                </ul>  
                <Link key={artist.id} to={"/artists/" + artist.id}>
                <p>{artist.name}</p>
                </Link>
              </div>
              );
            })
          
          )}
      </div>
    );
  }
}
