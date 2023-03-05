import React from "react";
import portrait from "./components/images/nick-brinkphoto-square.jpg";

function Home() {
  return ( 
    <div className="card">
       <div className="img-container"></div>
       <div className="content">
  <h1> About Me</h1>
  <p> I am a buddding front end developer who is constantly gaining experience in HTML, CSS and Javascript in an ever evolving and changing industry. I love a challenge of building code that will add functionality and looks pretty. I have years of experience as an Accountant so I am meticulous in my way of working. </p>
  <img src={portrait} alt="Nick Brink"/>
  </div>
    </div>
   
   );
  
}

export default Home;

