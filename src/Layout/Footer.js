import React from "react";

const Footer = () => {
  const d = new Date();
  const y = d.getFullYear();
  return <footer className="app-footer">{y} &copy; Yeji Lee</footer>;
};

export default Footer;
