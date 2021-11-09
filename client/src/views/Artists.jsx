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
   await APIHandler.get("/api/artists" + this.props.id)
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
    const { artists } = this.state;
    return (
      <div>
        {!artists ? (
          <p>loading...</p>
        ) : (
            artists.map(artist => {
              console.log(artists)
              return (
                <div>
                <ul>
                  <li>{artist.name}</li>
                  <li>{artist.description}</li>
                  <li>{artist.style}</li>
                  <li>{artist.rates}</li>
                  <li>123123123</li>
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
