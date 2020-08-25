import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Little silly buy all button at the top of the photo page
const BuyAllButton = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && <button class="btn btn-danger">BUY THEM ALL!</button>
  );
};

export default BuyAllButton;
