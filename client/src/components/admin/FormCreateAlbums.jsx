import React, { Component } from "react";
import APIHandler from "./../../api/handler";

export default class FormCreateAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: null,
      artists: [],
      cover: React.createRef(),
      label: null,
      labels: [],
      description: ''
    };
  }

  async componentDidMount() {
    const res = await APIHandler.get("/api/artists");
    this.setState(
      {
        artists: res.data,
       },
       () => {
         this.setState({
       artist: this.state.artists[0]._id,
         });
       }
    );

    const result = await APIHandler.get("/api/labels");
    this.setState(
      {
        labels: result.data,
      },
       () => {
         this.setState({
          label: this.state.labels[0]._id,
         });
       }
    );
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { title, artist, label, description } = this.state;
    const cover = this.state.cover.current.files[0]; // target the image file associated to the input[type=file]

    const uploadData = new FormData(); // create a form data => an object to send as post body

    // appending the keys / values pairs to the FormData
    uploadData.append("title", title); // create a key [name] on the formDate
    uploadData.append("artist", artist); // create a key [age] on the formDate
    uploadData.append("cover", cover); // create a key [color] on the formDate
    uploadData.append("label", label);
    uploadData.append('description', description)

    try {
      await APIHandler.post("/api/albums", uploadData); // sending the formData
      this.props.handler(); // passing the ball to the parent's callback
      
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
      console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    }, () => console.log(this.state.label));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>create a new album</h1>
        <input
          name="title"
          type="text"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <select name="artist" onChange={this.handleChange}>
          {this.state.artists.map((artist, i) => {
            return (
              <option key={i} value={artist._id}>
                {artist.name}
              </option>
            );
          })}
        </select>
        <label>
Cover
        <input
          name="cover"
          type="file"
          ref={this.state.cover}
          
        />
        </label>
        <input
          name="description"
          type="text"
          placeholder="description"
          value={this.state.description}
          onChange={this.handleChange}
        />

        <select name="label" onChange={this.handleChange}>
          {this.state.labels.map((label, i) => {
            return (
              <option key={i} value={label._id}>
                {label.name}
              </option>
            );
          })}
        </select>
        {/* {JSON.stringify(this.state.cover, null, 2)} */}

        <button>ok</button>
      </form>
    );
  }
}
