import React from "react";
import "./skills.scss";
import SkillItem from "./skills-item";
import ReactLogo from "../../../assets/reactjs.webp";
import HtmlLogo from "../../../assets/html5.webp";
import CssLogo from "../../../assets/css.webp";
import JavascriptLogo from "../../../assets/javascript.webp";
import BootstrapLogo from "../../../assets/bootstrap5.webp";
import JqueryLogo from "../../../assets/jquery.webp";
import FirebaseLogo from "../../../assets/firebase.webp";

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
