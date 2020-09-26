import React, { useState } from "react";
import "./nav.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/logo-white.webp";

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
        <Link to="/" className="nav-link">
          HOME
        </Link>
      </li>
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target="#navbarNav"
        onClick={navclickHandler}
      >
        <Link to="/services" className="nav-link">
          services
        </Link>
      </li>
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target="#navbarNav"
        onClick={navclickHandler}
      >
        <Link to="/skills" className="nav-link">
          skills
        </Link>
      </li>
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target="#navbarNav"
        onClick={navclickHandler}
      >
        <Link to="/portfolio" className="nav-link">
          portfolio
        </Link>
      </li>
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target="#navbarNav"
        onClick={navclickHandler}
      >
        <Link to="/contact" className="nav-link">
          contact
        </Link>
      </li>
    </ul>
  );
  const DesktopNav = () => (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          HOME
        </Link>
      </li>
      <li className="nav-item">
        <NavLink to="/services" className="nav-link">
          services
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/skills" className="nav-link">
          skills
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/portfolio" className="nav-link">
          portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" className="nav-link">
          contact
        </NavLink>
      </li>
    </ul>
  );
  return (
    <div className="conatiner">
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          <img src={Logo} className="logo" alt="logo" />
        </Link>
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
            <span className="material-icons">close</span>
          ) : (
            <span className="material-icons">menu</span>
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {window.innerWidth < 576 ? mobileNav() : DesktopNav()}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
