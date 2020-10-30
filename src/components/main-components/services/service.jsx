import React from "react";
import "./service.scss";

const Service = ({ heading, paragraph, image }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-xl-4 mb-3">
      <div className="content" data-aos="zoom-in">
        <div className="card service-card">
          <div className="card-body service-card-body">
            <img src={image} className="img-fluid service-card-image" alt="service" />
            <h5 className="card-heading">{heading} </h5>
            <p className="card-para">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
