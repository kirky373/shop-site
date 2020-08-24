import React, { useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import { getNumbers } from "../../Actions/getAction";

function NavbarLoggedIn(props) {
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    getNumbers();
  }, []);
  return (
    isAuthenticated && (
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
              <li class="nav-item active m-2">
                <Link class="nav-link" to="/cart">
                  Cart({props.basketProps.basketNumbers})
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  );
}

const mapSateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapSateToProps, { getNumbers })(NavbarLoggedIn);
