import React from "react";
import logo from "./logo.svg";

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} className="logoImg" alt="logo" />
      <h1 className="titleText">Tidally Locked</h1>
    </header>
  );
};

export default Header;
