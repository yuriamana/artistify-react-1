import React, { Component } from 'react'
import APIHandler from "./../../api/handler";


export default class FormCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description:"",
            style : {
                name:""
            },
            rates:"",
        }
    }

    // handleSubmit = async (e) => {
    //     e.preventDefault();
  

    handleSubmit = async (e) => {
            e.preventDefault();
            const {name, description, style, rates} = this.state;
            try {
              const res = await APIHandler.post("/api/artists", this.state);
              console.log(res.data);
            } catch (err) {
              console.error(err);
            }
          
    
    const uploadData = new FormData(); 

    uploadData.append("name", name); // create a key [name] on the formDate
    uploadData.append("description", description); // create a key [age] on the formDate
    uploadData.append("style", style);  // create a key [color] on the formDate
    uploadData.append("rates", rates);
    

    try {
        await APIHandler.post("/api/artists", uploadData); // sending the formData
        this.props.handler(); // passing the ball to the parent's callback
      } catch (err) {
        console.error(err);
      }
    };

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    }

render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <h1>create a new artist</h1>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="description"
            type="text"
            placeholder="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input
            name="style"
            type="text"
            placeholder="style"
            value={this.state.style.name}
            onChange={this.handleChange}
          />
            <input
            name="rates"
            type="Number"
            placeholder="rates"
            value={this.state.rates}
            onChange={this.handleChange}
          />
          <button>ok</button>
        </form>
      );
    }
}   
