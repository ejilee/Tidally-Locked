import React from "react";
import logo from "./logo.svg";
import ReactGA from "react-ga";

ReactGA.initialize("UA-167751422-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const Header = () => {
  return (
    <header className="app__header">
      <a className="header__logo" href="https://tidallylocked.com" target="_self">
        <img src={logo} className="header__logoImage" alt="logo of moon and earth" />
      </a>
      <h1 className="header__title">Tidally Locked</h1>
    </header>
  );
};

export default Header;
