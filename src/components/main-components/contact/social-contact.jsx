import React from "react";

const SocialContact = ({ logo, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={logo} alt="social" className="img-fluid social-logo" />
    </a>
  );
};

export default SocialContact;
