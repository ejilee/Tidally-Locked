import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Space from "./components/Space.js";
import Space2 from "./components/Space2.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logoImg" alt="logo" />
        <h2 className="logoText">Tidally Locked</h2>
      </header>
      <section className="App-body">
        <h4>With CSS Animation</h4>
        <Space />
        <br />
        <br />
        <h4>With Javascript</h4>
        <Space2 />
      </section>
      <footer className="App-footer">copy</footer>
    </div>
  );
}

export default App;
