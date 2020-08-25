import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Lets the user login with Auth0
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        class="btn btn-secondary m-4 p-3"
        onClick={() => loginWithRedirect()}
      >
        Log in
      </button>
    )
  );
};

export default LoginButton;
