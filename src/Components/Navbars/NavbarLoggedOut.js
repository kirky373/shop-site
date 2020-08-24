import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function NavbarLoggedOut() {
  const { isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
          <h3 class="m-1">Generic shopping website</h3>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active m-2">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item active m-2">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item active m-2">
                <Link class="nav-link" to="/pictures">
                  Pictures
                </Link>
              </li>
              <li class="nav-item active m-2">
                <Link class="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  );
}

export default NavbarLoggedOut;
