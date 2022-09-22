import React from "react";
import "./Heading.css";
import larry from "../../../assets/images/larry-cherry.jpg";
import faGithub from "../../../assets/icons/github-square-brands.svg";
import faLinkedIn from "../../../assets/icons/linkedin-brands.svg";
import faTwitter from "../../../assets/icons/twitter-square-brands.svg";
import faMail from "../../../assets/icons/envelope-square-solid.svg";

export const Heading = () => (
  <div className="Heading">
    <h3>Lets Build Something Together</h3>
    <img src={larry} alt="Larry Cherry" />
    <div className="Heading-links">
      <a href="https://github.com/larry-cherry">
        <img src={faGithub} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/larry-cherry/">
        <img src={faLinkedIn} alt="LinkedIn" />
      </a>
      <a href="https://twitter.com/Larry_D_Cherry">
        <img src={faTwitter} alt="twitter" />
      </a>
      <a href="mailto:mail@larrycherry.com">
        <img src={faMail} alt="email" />
      </a>
    </div>
  </div>
);
