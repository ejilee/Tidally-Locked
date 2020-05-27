import React from "react";
import logo from "./logo.svg";

const Header = () => {
  return (
    <header className="app-header">
      <a className="logo" href="https://tidallylocked.com" target="_self">
        <img src={logo} className="logoImg" alt="logo" />
      </a>
      <h1 className="titleText">Tidally Locked</h1>
    </header>
  );
};

export default Header;
