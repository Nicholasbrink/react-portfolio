import React from "react";
import Wrapper from "./index";
import ProjectCard from "./Projectcard";
import data from "../data.json";

class ProjectGallery extends React.Component {
  // becaue you're using class-based components, regular const declarations don't seem to be readily accepted
  // how do you delcare a variable and set its value to the contents of data, parsed of course!
  //const parsedData = JSON.parse(data);
  
  render() {
    return (
      <Wrapper>
        {/* <Title>projects</Title> */}
        <ProjectCard
          imgAlt={data[0].name}
          imgSrc={data[0].image}
          name={data[0].name}
          description={data[0].description}
          website={data[0].website}
        />
        <ProjectCard
          imgAlt={data[1].name}
          imgSrc={data[1].image}
          name={data[1].name}
          description={data[1].description}
        />
        <ProjectCard
          imgAlt={data[2].name}
          imgSrc={data[2].image}
          name={data[2].name}
          description={data[2].description}
        />
        <ProjectCard
          imgAlt={data[3].name}
          imgSrc={data[3].image}
          name={data[3].name}
          description={data[3].description}
        />
        <ProjectCard
          imgAlt={data[4].name}
          imgSrc={data[4].image}
          name={data[4].name}
          description={data[4].description}
        />
        <ProjectCard
          imgAlt={data[5].name}
          imgSrc={data[5].image}
          name={data[5].name}
          description={data[5].description}
        />
      </Wrapper>
    );
  }
}

export default ProjectGallery;
