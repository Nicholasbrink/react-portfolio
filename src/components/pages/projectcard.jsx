import React from "react";

function ProjectCard(props) {
  const { id, name, image, description } = props;
  return (
    <div className="card">
      <div className="img-container">
        {/* <img alt={imgAlt} src={imgSrc} /> */}
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project: </strong> {name}
          </li>
          <li>
            <strong>Description: </strong> {description}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
