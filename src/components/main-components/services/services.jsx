import React from "react";
import Service from "./service";
import "./services.scss";
import webDesign from "./../../../assets/service-icon/web-design.svg";
import webDevelopment from "./../../../assets/service-icon/web-development.svg";
import support from "./../../../assets/service-icon/call-center-agent.svg";
import responsive from "./../../../assets/service-icon/responsive-design.svg";
import fastestTech from "./../../../assets/service-icon/fastest-tech.svg";
import seoFriendly from "./../../../assets/service-icon/seo-friendly.svg";

const Services = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="site-head">services </h2>
      <p className="site-para">service we provide</p>
      <div className="row">
        <Service
          heading="web design"
          image={webDesign}
          paragraph="get Your Website Design frame with Modern Design Pattern"
        />
        <Service
          heading="web development"
          image={webDevelopment}
          paragraph="get your website Developed from scratch with zero stress"
        />
        <Service
          heading="24/7 support"
          image={support}
          paragraph="Get support 24 hours in a day, 7 days in a week"
        />
        <Service
          heading="100% Responsive"
          image={responsive}
          paragraph="get mobile-first cross-browser and cross-device compatible website"
        />
        <Service
          heading="Fastest Tech Stack"
          image={fastestTech}
          paragraph="Get developed with Javascript Driven fastest Technology stack on planet earth"
        />
        <Service
          heading="seo Friendly"
          image={seoFriendly}
          paragraph="get seo friendly website for your business growth"
        />
      </div>
    </div>
  );
};

export default Services;
