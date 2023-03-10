import React from "react";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          Nick Brink
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./components/projectGallery">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="./Home/Nicholas-Brink-Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
