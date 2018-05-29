import React, { Component } from "react";
import firebase from "utils/firebase.js";
import "components/guestbook.css";

class Guestbook extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      message: "",
      location: "",
      time: "",
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name,
          message: items[item].message,
          location: items[item].location,
          time: items[item].time
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name || !this.state.message) {
      alert("Error~");
      return;
    }

    const itemsRef = firebase.database().ref("items");
    const item = {
      name: this.state.name,
      message: this.state.message,
      location: this.state.location,
      time: new Date().getTime()
    };
    itemsRef.push(item);
    this.setState({
      name: "",
      message: "",
      location: "",
      time: ""
    });
  }

  render() {
    return (
      <div className="Guestbook">
        <img
          className="Guestbook-header"
          src={require("images/guestbook.gif")}
        />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="Message"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={this.handleChange}
            value={this.state.location}
          />
          <button>Go</button>
        </form>
        <div className="container">
          {this.state.items.map(item => {
            return (
              <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.message}</div>
                <div>{item.location}</div>
                <div>{item.time}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Guestbook;
