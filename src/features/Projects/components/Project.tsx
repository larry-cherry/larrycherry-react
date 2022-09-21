import React from "react";

export const Project = ({ title, image, description, link }: ProjectProps) => (
  <div className="Project">
    <h4>
      <a href={link}>{title}</a>
    </h4>
    <img src={image} />
    <p>{description}</p>
  </div>
);
