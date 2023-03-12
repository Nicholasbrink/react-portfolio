import React from "react";

function ProjectCard(props) {

  return (
    <>
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
      </div>
      <div className="card-body d-flex flex-column">
        <div>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.website} className="btn btn-primary">
            Website URL
          </a>
          <a href={props.github} className="btn btn-primary">
            Github Repo
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
