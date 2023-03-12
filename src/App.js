// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import {container, Row, Col} from 'react-bootstrap'
// import Home from "./routes/Home";
// import Contact from "./routes/Contact";
// import ProjectCard from "./routes/Projectcard";
import Header from "./routes/Header";
// import ProjectGallery from "./routes/ProjectGallery";

function App() {
  return (

    <Header />
    // <Router>
    //   <Header />
    //   <div>
    //     Wrap Route elements in a Routes component
    //     <Routes>
    //       Define routes using the Route component to render different page components at different paths
    //       {/* Define a default route that will render the Home component */}
    //       <Route path="/" element={<Home />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="projectcard/:id" element={<ProjectCard />} />
    //       <Route path="projectGallery" element={<ProjectGallery />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
