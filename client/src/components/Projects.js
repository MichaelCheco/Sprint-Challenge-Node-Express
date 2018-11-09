import React from "react";

const Projects = props => {
  return <div className="posts">
    {props.projects.map(project => {
      return <div className="post-box">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    })}
  </div>;
};

export default Projects;
