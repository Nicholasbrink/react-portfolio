import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import {container, Row, Col} from 'react-bootstrap'
import Contact from "./components/pages/contact";
import Home from "./components/pages/Home";
import ProjectCard from "./components/pages/projectcard"
import Projects from "./components/data.json";
import Header from "./components/header";

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
          <Route path="/projectcard" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
