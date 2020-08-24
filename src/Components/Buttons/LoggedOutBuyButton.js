import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const BuyButton = () => {
  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button class="btn btn-primary m-2" disabled>
        Buy
      </button>
    )
  );
};

export default BuyButton;
