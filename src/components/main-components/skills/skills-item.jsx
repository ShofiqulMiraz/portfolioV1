import React from "react";

const SkillItem = ({ logo, title }) => {
  return (
    <div className="col mb-2">
      <div className="card skill-card">
        <div className="card-body skill-card-body">
          <figure>
            <img src={logo} className="img-fluid skill-logo" alt={title} />
          </figure>
          <h5 className="skill-heading">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
