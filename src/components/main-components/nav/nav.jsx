import React, { useState } from "react";
import "./nav.scss";
import Logo from "../../../assets/logo/logo-white.png";
import MenuOpen from "./../../../assets/menu/menu.svg";
import MenuClose from "./../../../assets/menu/close.svg";

const Nav = () => {
  const [navclicked, setNavclicked] = useState(false);
  const navclickHandler = () => {
    setNavclicked(!navclicked);
  };

  const mobileNav = () => (
    <ul className="navbar-nav ml-auto">
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target="#navbarNav"
        onClick={navclickHandler}
      >
        <a className="nav-link" href="#home">
          home
        </a>
      </li>
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target="#navbarNav"
        onClick={navclickHandler}
      >
        <a className="nav-link" href="#services">
          services
        </a>
      </li>
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target="#navbarNav"
        onClick={navclickHandler}
      >
        <a className="nav-link" href="#skills">
          skills
        </a>
      </li>
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target="#navbarNav"
        onClick={navclickHandler}
      >
        <a className="nav-link" href="#portfolio">
          portfolio
        </a>
      </li>
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target="#navbarNav"
        onClick={navclickHandler}
      >
        <a className="nav-link" href="#contact">
          contact
        </a>
      </li>
    </ul>
  );
  const DesktopNav = () => (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#home">
          home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#services">
          services
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills">
          skills
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#portfolio">
          portfolio
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">
          contact
        </a>
      </li>
    </ul>
  );
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <a href="#home" className="navbar-brand">
        <img src={Logo} className="logo" alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        type="button"
        onClick={navclickHandler}
      >
        {navclicked ? (
          <img src={MenuClose} alt="menuopen" className="img-fluid menuclose" />
        ) : (
          <img src={MenuOpen} alt="menuopen" className="img-fluid menuopen" />
        )}
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {window.innerWidth < 576 ? mobileNav() : DesktopNav()}
      </div>
    </nav>
  );
};

export default Nav;
