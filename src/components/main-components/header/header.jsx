import React from "react";
import "./header.scss";
import Typed from "react-typed";
import profilePic from "../../../assets/logo/profilePic.jpg";

const Header = () => {
  return (
    <div>
      <div className="container-fluid header" id="home">
        <figure data-aos="zoom-in" data-aos-duration="2000">
          <img
            src={profilePic}
            className="img-fluid profile-picture"
            alt="profile"
          />
        </figure>
        <h2 className="header__heading">shofiqul islam miraz</h2>
        <Typed
          className="typed"
          strings={[
            "I'm a DEVELOPER",
            "I'm a DESIGNER",
            "I'm a DREAMER",
            "I'm a LEARNER",
          ]}
          typeSpeed={60}
          backSpeed={60}
          loop
        ></Typed>
        <div className="header__btn-all">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/shofiqul-portfolio.appspot.com/o/Profile.pdf?alt=media"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-raised btn-success header__btn-1"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            download cv
          </a>
          <a
            href="#contact"
            className="btn btn-raised btn-success header__btn-2"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
