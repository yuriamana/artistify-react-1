import { Component } from "react";
import APIHandler from "./../../api/handler";
import { Link } from "react-router-dom";
// import "../styles/card.css";
import FormCreate from "./../admin/FormCreate"

export default class AdminArtists extends Component {
  state = {
    artists: [],
    displayForm: false,
  };

  componentDidMount() {
    this.fetchArtists();
  }
  fetchArtists = async () => {
    try {
      const res = await APIHandler.get("/api/artists/")
        this.setState({
          artists: res.data,
        });
      } catch(err) {
        console.error(err);
      };
  };

  handleDelete = async (id) => {
    try {
      await APIHandler.delete(`/api/artists/${id}`);
      this.fetchArtists();
    } catch (err) {
      console.error(err);
    }
  };

  render(){
    console.log(this.state)
     return (
    
    <div>
    <button onClick={() => this.setState({displayForm: !this.state.displayForm})}> add artist </button>
{this.state.displayForm && <FormCreate />}
    {!this.state.artists ? (
      <p>loading...</p>
    ) : (
        this.state.artists.map(artist => {
          return (
            <div key={artist._id} className ="card">
              <ul>
                <li><Link to={"/artists/" + artist._id}>
                {artist.name}</Link></li>
                <li>{artist.description}</li>
                <li>{artist.style.name}</li>
                <li>{artist.rates}</li>
                <button onClick={() => this.handleDelete(artist._id)}>Delete</button>
              </ul>  
            </div>
          );
        })
      )}
  </div> 
  )

  }
}