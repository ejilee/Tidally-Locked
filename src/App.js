import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Space from "./components/Space.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logoImg" alt="logo" />
        <h1 className="logoText">Tidally Locked</h1>
      </header>
      <section className="App-body">
        <Space />
      </section>
      <footer className="App-footer">copy</footer>
    </div>
  );
}

export default App;
