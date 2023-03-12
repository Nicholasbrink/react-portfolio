//Add react and react-router
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

//Add Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home/Home";
import Header from "./components/Header";
import Projects from "./components/Projects/ProjectGallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />

      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="ProjectGallery" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />

        {/* Handling Home Page URL on app rendering */}
        {/* It's better to use Redirect before showing component Home */}
        <Route path="*" element={<Home />} />
        <Route
          path="https://Nicholasbrink.github.io/react-portfolio/"
          element={<Home />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
