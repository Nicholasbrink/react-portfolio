import React from "react";
import Resume from "./Nicholas-Brink-Resume.pdf";

function Home() {
  return (
    <>
      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">About Me</h1>
        <h4 className="mb-3">
          I am a buddding front end developer who is constantly gaining
          experience in HTML, CSS and Javascript in an ever evolving and
          changing industry. I love a challenge of building code that will add
          functionality and looks pretty. I have years of experience as an
          Accountant so I am meticulous in my way of working.
        </h4>
        <a
          className="btn btn-primary"
          href={Resume}
          title="Download Resume"
          download="Nicholas-Brink-Resume.pdf"
          role="button"
        >
          Download My Resume
        </a>
      </div>
    </>
  );
}

export default Home;
