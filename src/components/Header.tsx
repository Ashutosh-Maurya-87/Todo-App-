import React from "react";
import "./style/header.css";

function Header() {
  return (
    <>
      <div className="nav-list">
        <img src="#" alt="logo" />
        <ul id="list-display">
          <li>Home</li>
          <li>Categories</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
