import { Component } from "react";
import APIHandler from "./../../api/handler"
// import { Link } from "react-router-dom";
// import "./../../styles/albums.css";
// import AdminAlbums from "./../admin/AdminAlbums"

export default class AdminAlbums extends Component {
    state = {
      albums: [],
    };
  
    componentDidMount() {
      this.fetchAlbums();
    }
    fetchAlbums = async () => {
      try {
        const res = await APIHandler.get("/api/albums/")
          this.setState({
            albums: res.data,
          });
        } catch(err) {
          console.error(err);
        };
    };
  
    handleDelete = async (id) => {
        try {
          await APIHandler.delete(`/admin/artists/${id}`);
          this.fetchArtists();
        } catch (err) {
          console.error(err);
        }
      };
    }