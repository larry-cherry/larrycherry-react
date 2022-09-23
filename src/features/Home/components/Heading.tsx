import React from "react";
import larry from "../../../assets/images/larry-cherry.jpg";
import faGithub from "../../../assets/icons/github-square-brands.svg";
import faLinkedIn from "../../../assets/icons/linkedin-brands.svg";
import faTwitter from "../../../assets/icons/twitter-square-brands.svg";
import faMail from "../../../assets/icons/envelope-square-solid.svg";
const iconSize = 35;

const imageStyle = {
  borderRadius: 10,
  maxWidth: "250px",
};

const socialMediaStyle = {
  display: "flex",
  justifyContent: "space-between",
  maxWidth: 200,
  margin: "auto",
  marginTop: 5,
};

export const Heading = () => (
  <div className="Heading">
    <h3>Lets Build Something Together</h3>
    <img src={larry} alt="Larry Cherry" style={imageStyle} />
    <div className="Heading-links" style={socialMediaStyle}>
      <a href="https://github.com/larry-cherry">
        <img src={faGithub} alt="Github" width={iconSize} />
      </a>
      <a href="https://www.linkedin.com/in/larry-cherry/">
        <img src={faLinkedIn} alt="LinkedIn" width={iconSize} />
      </a>
      <a href="https://twitter.com/Larry_D_Cherry">
        <img src={faTwitter} alt="twitter" width={iconSize} />
      </a>
      <a href="mailto:mail@larrycherry.com">
        <img src={faMail} alt="email" width={iconSize} />
      </a>
    </div>
  </div>
);
