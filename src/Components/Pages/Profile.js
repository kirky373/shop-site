import React from "react";
import LoginButton from "../Buttons/LoginButton";
import LogoutButton from "../Buttons/LogoutButton";
import ProfileInfo from "../ProfileInfo";

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <ProfileInfo />
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default Profile;
