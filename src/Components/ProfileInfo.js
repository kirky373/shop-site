import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <br />
        <h2>User:</h2>
        <h2>{user.name}</h2>
      </div>
    )
  );
};

export default Profile;
