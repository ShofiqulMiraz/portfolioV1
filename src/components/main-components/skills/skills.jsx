import React from "react";
import "./skills.scss";
import SkillItem from "./skills-item";
import ReactLogo from "../../../assets/reactjs.png";
import HtmlLogo from "../../../assets/html5.png";
import CssLogo from "../../../assets/css.png";
import JavascriptLogo from "../../../assets/javascript.png";
import BootstrapLogo from "../../../assets/bootstrap5.png";
import JqueryLogo from "../../../assets/jquery.png";
import FirebaseLogo from "../../../assets/firebase.png";

const Skills = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="site-head">skills </h2>
      <p className="site-para">technology we use</p>
      <div className="row">
        <SkillItem logo={ReactLogo} title={`react`} />
        <SkillItem logo={HtmlLogo} title={`html`} />
        <SkillItem logo={CssLogo} title={`css`} />
        <SkillItem logo={JavascriptLogo} title={`javascript`} />
        <SkillItem logo={BootstrapLogo} title={`bootstrap`} />
        <SkillItem logo={JqueryLogo} title={`jquery`} />
        <SkillItem logo={FirebaseLogo} title={`firebase`} />
      </div>
    </div>
  );
};

export default Skills;
