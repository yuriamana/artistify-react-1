import React, { Component } from "react";
import APIHandler from "./../../api/handler";
// import "../styles/albums.css";

export default class AdminAlbums extends Component {
  state = {
    albums: [],
  };

  componentDidMount() {
    this.fetchAlbums();
  }
  fetchAlbums = async () => {
    try {
      const res = await APIHandler.get("/api/albums/");
      this.setState({
        albums: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

//   handleDelete = async (id) => {
//     try {
//       await APIHandler.delete(`/admin/artists/${id}`);
//       this.fetchArtists();
//     } catch (err) {
//       console.error(err);
//     }
//   };

  render() {
    return (
      <div>
        {!this.state.albums ? (
          <p>loading...</p>
        ) : (
          this.state.albums.map((album) => {
            return (
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
            );
          })
        )}
      </div>
    );
  }
}
