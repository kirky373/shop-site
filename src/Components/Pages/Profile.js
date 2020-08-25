import React from "react";
import LoginButton from "../Buttons/LoginButton";
import LogoutButton from "../Buttons/LogoutButton";
import ProfileInfo from "../ProfileInfo";
//Profile page which displays the profile info if logged in if not the login button
//When signed in the user can see their profile and log out
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
