import React from "react";

const SocialContact = ({ logo, link, tooltip }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button
        type="button"
        className="btn btn-success bmd-btn-fab mr-2 social-btn"
        data-toggle="tooltip"
        data-placement="bottom"
        title={tooltip}
      >
        <ion-icon name={logo}></ion-icon>
      </button>
    </a>
  );
};

export default SocialContact;
