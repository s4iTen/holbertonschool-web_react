import React from "react";
import holbimg from "../assets/holbimg.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={holbimg} />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
