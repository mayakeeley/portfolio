import React, { Component } from "react";
import "./App.css";
import Header from "../../components/Header";
import Info from "../../components/Info";
import NavBar from "../NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="content">
          <Info />
          <NavBar />
        </section>
      </div>
    );
  }
}

export default App;
