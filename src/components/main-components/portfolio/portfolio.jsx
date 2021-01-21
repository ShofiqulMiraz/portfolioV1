import React from "react";
import "./portfolio.scss";
import PortfolioItem from "./portfolio-item";
import natours from "../../../assets/portfolio-projects/natours.png";
import nexter from "../../../assets/portfolio-projects/nexter.png";
import trillo from "../../../assets/portfolio-projects/trillo.png";
import tesla from "../../../assets/portfolio-projects/tesla.png";

const Portfolio = () => {
  return (
    <div className="container-fluid portfolio mt-5 mb-5">
      <h2 className="site-head">Portfolio </h2>
      <p className="site-para">our latest work</p>
      <div className="row">
        <PortfolioItem
          title="nexter"
          src={nexter}
          href="https://nexter-shofiqul.netlify.app/"
        />
        <PortfolioItem
          title="natours"
          src={natours}
          href="https://natours-shofiqul.netlify.app/"
        />
        <PortfolioItem
          title="trillo"
          src={trillo}
          href="https://trillo-shofiqul.netlify.app/"
        />
        <PortfolioItem
          title="tesla clone"
          src={tesla}
          href="https://tesla-clone-seven.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Portfolio;
