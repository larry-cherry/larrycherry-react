import React, { useMemo } from "react";
import { Project } from "./components/Project";

export const Projects = () => {
  const renderProjects = useMemo(() => {
    // TODO update project list
    const projectList: ProjectProps[] = [];
    return projectList.map(({ title, description, link, image }, index) => (
      <Project
        key={index}
        title={title}
        description={description}
        image={image}
        link={link}
      />
    ));
  }, []);
  return <>{renderProjects}</>;
};
