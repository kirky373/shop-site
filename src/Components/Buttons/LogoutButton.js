import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Lets the user logout via Auth0
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button class="btn btn-secondary m-4 p-3" onClick={() => logout()}>
        Log out
      </button>
    )
  );
};

export default LogoutButton;
