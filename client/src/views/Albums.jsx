import React, { Component } from "react";
// custom tools
import handler from "../api/handler";
// import LabPreview from "../components/preview/LabPreview";
// styles
import "../styles/card.css";
import "../styles/icon-favorite.css";

export default class Albums extends Component {
  state = {
    albums: [],
  }

  async componentDidMount() {
    this.fetchAlbums();
  }
  fetchAlbums = async () => {
    try {
    console.log(handler);
    const x = await handler.get("/api/albums");
    console.log(x);
    this.setState({
      albums: x.data,
    })
  } catch(err) {
    console.error(err);
  };
  }

  render() {
    // const { albums } = this.state.albums;
    return (
      <div>
        {!this.state.albums ? (
          <p>loading...</p>
        ) : (
      this.state.albums.map(album => {
        return(
          <div key={album._id} className="album">
            <ul>
              <li>{album.cover}</li>
              <li>{album.title}</li>
              <li>{album.releaseDate}</li>
              <li>{album.label.name}</li>
              <li>{album.artist.name}</li>
              <li>{album.rates}</li> 
            </ul>
          </div>
          )
        })
       )
     } 
  </div>
   )
  }
}