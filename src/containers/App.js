import "containers/App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Hello. My name is Corbin Muraro. I’m a software designer with a
          passion for design and technology.
        </p>
        <p>
          I currently work at <a href="https://samsara.com">Samsara</a> building
          tools for the world of infrastructure.
        </p>
        <p>
          You can find me under the handle <code>corbinmuraro</code> across the
          web. I can also be reached via email at{" "}
          <a href="mailto:corbinmuraro@gmail.com">corbinmuraro@gmail.com</a>.
        </p>
      </div>
    );
  }
}

export default App;
