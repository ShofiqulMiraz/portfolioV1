import React from "react";
import "./skills.scss";
import SkillItem from "./skills-item";
import ReactLogo from "../../../assets/react.svg";
import HtmlLogo from "../../../assets/html.svg";
import CssLogo from "../../../assets/css.svg";
import JavascriptLogo from "../../../assets/javascript.svg";
import BootstrapLogo from "../../../assets/bootstrap.svg";
import JqueryLogo from "../../../assets/jquery.svg";
import FirebaseLogo from "../../../assets/firebase.svg";
import SassLogo from "../../../assets/sass.svg";
import PwaLogo from "../../../assets/pwa-logo.svg";
import GitLogo from "../../../assets/git.svg";
import MaterializeLogo from "../../../assets/materializecss.svg";

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
        <SkillItem logo={SassLogo} title={`sass`} />
        <SkillItem logo={PwaLogo} title={`pwa`} />
        <SkillItem logo={MaterializeLogo} title={`materialize`} />
        <SkillItem logo={GitLogo} title={`git`} />
      </div>
    </div>
  );
};

export default Skills;
