import React from "react";
import Service from "./service";
import "./services.scss";

const Services = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="site-head">services </h2>
      <p className="site-para">service we provide</p>
      <div className="row">
        <Service
          heading="web design"
          icons="design_services"
          paragraph="get Your Website Design frame with Modern Design Pattern"
        />
        <Service
          heading="web development"
          icons="developer_mode"
          paragraph="get your website Developed from scratch with zero stress"
        />
        <Service
          heading="24/7 support"
          icons="support"
          paragraph="Get support 24 hours in a day, 7 days in a week"
        />
        <Service
          heading="100% Responsive"
          icons="mobile_friendly"
          paragraph="get mobile-first cross-browser and cross-device compatible website"
        />
        <Service
          heading="Fastest Tech Stack"
          icons="fast_forward"
          paragraph="Get developed with Javascript Driven fastest Technology stack on planet earth"
        />
        <Service
          heading="seo Friendly"
          icons="library_add_check"
          paragraph="get seo friendly website for your business growth "
        />
      </div>
    </div>
  );
};

export default Services;
