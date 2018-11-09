import React from "react";

const Projects = props => {
  return <div>
    {props.projects.map(project => {
      return <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    })}
  </div>;
};

export default Projects;
