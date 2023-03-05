import React from "react";

function ProjectCard(props) {
  const { id, name, image, description, website, github } = props;
  return (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>id: </strong> {id}
          </li>
          <li>
            <strong>Project: </strong> {name}
          </li>
          <li>
            <strong>Description: </strong> {description}
          </li>
          <li>
            <strong>Website: </strong> {website}
          </li>
          <li>
            <strong>Github URL: </strong> {github}
            <li>
              <strong>Image of Project: </strong> <img src={image} alt={name} />
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
