import React from "react";

const PortfolioItem = ({ title, src, href }) => {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12 col-xl-4">
      <div className="content">
        <div className="content-overlay">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <p className="overlay-title">{title}</p>
          </a>
        </div>
        <figure>
          <img className="img-fluid" src={src} alt={title} />
        </figure>
      </div>
    </div>
  );
};

export default PortfolioItem;
