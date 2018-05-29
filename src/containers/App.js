import React, { Component } from "react";
import "containers/App.css";
import Guestbook from "components/guestbook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">corbinmuraro.com</h1>
        <Guestbook />
        <img src={require("images/geocities.gif")} />
      </div>
    );
  }
}

export default App;
