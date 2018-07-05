import Guestbook from "components/guestbook";
import "containers/App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">Corbin Muraro</h1>
        <p>
          I'm a product designer currently working at Samsara in San Francisco,
          California.
        </p>
        <Guestbook />
        <div>
          <marquee>Thank you for visiting my site. Stop by any time!</marquee>
        </div>
        <div>
          © 1998 • <a href="mailto:corbinmuraro@gmail.com">Contact webmaster</a>
        </div>
        <img src={require("images/geocities.gif")} />
      </div>
    );
  }
}

export default App;
