import React from "react";
import "./portfolio.scss";
import PortfolioItem from "./portfolio-item";
import Project1 from "../../../assets/project1.webp";
import Project2 from "../../../assets/project2.webp";
import Project3 from "../../../assets/project3.webp";

const Portfolio = () => {
  return (
    <div className="container-fluid portfolio mt-5 mb-5">
      <h2 className="site-head">Portfolio </h2>
      <p className="site-para">our latest work</p>
      <div className="row">
        <PortfolioItem
          title="nexter"
          src={Project1}
          href="https://nexter-shofiqul.web.app/"
        />
        <PortfolioItem title="natours" src={Project2} href="#" />
        <PortfolioItem
          title="trillo"
          src={Project3}
          href="https://trillo-shofiqul.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Portfolio;
