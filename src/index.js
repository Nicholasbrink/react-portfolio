import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import ProjectGallery from "./routes/ProjectGallery";
// import ProjectCard from "./routes/Projectcard";
import ErrorPage from "./routes/error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

  },
  {
    path: "contacts/",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);


// function Project(props) {
//   const { id, name, image, description, website, github, longDescr } = props;
//   return (
//     <div className="card">
//       <div className="img-container">
//         {/* <img alt={imgAlt} src={imgSrc} /> */}
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Project: </strong> {name}
//           </li>
//           <li>
//             <strong>Description: </strong> {description}
//           </li>
          
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Project;