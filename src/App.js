import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import {container, Row, Col} from 'react-bootstrap'
import Contact from "./components/contact";
import Home from "./components/Home";
import ProjectCard from "./components/projects/projectcard";
import Header from "./components/Header";
import ProjectGallery from "./components/projectGallery";

function App() {
  return (
    <Router>
      <Header />
      <div>
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="projectcard/:id" element={<ProjectCard />} />
          <Route path="projectGallery" element={<ProjectGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
