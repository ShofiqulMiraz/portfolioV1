import React from "react";
import "./skills.scss";
import SkillItem from "./skills-item";
import ReactLogo from "../../../assets/skill-icons/react.svg";
import HtmlLogo from "../../../assets/skill-icons/html.svg";
import CssLogo from "../../../assets/skill-icons/css.svg";
import JavascriptLogo from "../../../assets/skill-icons/javascript.svg";
import BootstrapLogo from "../../../assets/skill-icons/bootstrap.svg";
import JqueryLogo from "../../../assets/skill-icons/jquery.svg";
import FirebaseLogo from "../../../assets/skill-icons/firebase.svg";
import SassLogo from "../../../assets/skill-icons/sass.svg";
import PwaLogo from "../../../assets/skill-icons/pwa-logo.svg";
import GitLogo from "../../../assets/skill-icons/git.svg";
import MaterializeLogo from "../../../assets/skill-icons/materializecss.svg";

const Skills = () => {
  return (
    <div className="container" id="skills">
      <h2 className="site-head">skills </h2>
      <p className="site-para">technology we use</p>
      <div className="skill-item pt-4">
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
