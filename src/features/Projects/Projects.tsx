import React from "react";
import { Project } from "./components/Project";

export const Projects = () => {
  const projectList: ProjectProps[] = [];
  const renderProjects = () => {
    return projectList.map(({ title, description, link, image }, index) => (
      <Project
        key={index}
        title={title}
        description={description}
        image={image}
        link={link}
      />
    ));
  };
  return <>{projectList}</>;
};
