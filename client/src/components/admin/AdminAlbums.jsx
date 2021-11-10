import React, { Component } from "react";
import APIHandler from "./../../api/handler";
// import "../styles/albums.css";
import FormCreateAlbums from "./../admin/FormCreateAlbums";

export default class AdminAlbums extends Component {
  state = {
    albums: [],
    displayForm: false
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

  handleDelete = async (id) => {
    try {
      await APIHandler.delete(`/api/albums/${id}`);
      this.fetchAlbums();
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
      <button
          onClick={() =>
            this.setState({ displayForm: !this.state.displayForm })
          }
        >
          {" "}
          add album{" "}
        </button>
        {this.state.displayForm && <FormCreateAlbums />}

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
                  {/* <li>{album.rates}</li> */}
                  <button onClick={() => this.handleDelete(album._id)}>
                  Delete
                  </button>
                </ul>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
