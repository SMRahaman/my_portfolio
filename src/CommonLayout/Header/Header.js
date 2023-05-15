import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [showButton, setshowButton] = useState(true);
  const [active, setActive] = useState(1);
  const [color, setColor] = useState(false);

  const activeMenu = (id) => {
    setActive(id);
  };
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const navHandler = () => {
    setshowButton(!showButton);
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <div>
        <h3 className="headername">CoderMaruf</h3>
      </div>

      <ul className={!showButton ? "mobile-menu" : "main-menu"}>
        <li>
          <a
            href="#home"
            className={active === 1 ? "active" : "main-menu"}
            onClick={() => activeMenu(1)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={active === 2 ? "active" : "main-menu"}
            onClick={() => activeMenu(2)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#service"
            className={active === 3 ? "active" : "main-menu"}
            onClick={() => activeMenu(3)}
          >
            Service
          </a>
        </li>
        <li>
          <a
            href="#skill"
            className={active === 4 ? "active" : "main-menu"}
            onClick={() => activeMenu(4)}
          >
            Skill
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={active === 5 ? "active" : "main-menu"}
            onClick={() => activeMenu(5)}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className={active === 6 ? "active" : "main-menu"}
            onClick={() => activeMenu(6)}>Contact</a>
        </li>
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
