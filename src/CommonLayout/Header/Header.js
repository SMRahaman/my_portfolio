import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [showButton, setshowButton] = useState(true);
  const navHandler = () => {
    setshowButton(!showButton);
  };
  return (
    <div className="header">
      <div>
        <h3 className="headername">CoderMaruf</h3>
      </div>

      <ul className={!showButton ? "mobile-menu" : "main-menu"}>
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Portfolio</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>

      <div className="navicon">
        {showButton ? (
          <button onClick={navHandler} className="naviconbar">
            <HiBars3></HiBars3>
          </button>
        ) : (
          <button onClick={navHandler} className="naviconbar">
            <RxCross2></RxCross2>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
