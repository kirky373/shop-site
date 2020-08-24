import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import { addBasket } from "../../Actions/addAction";

const BuyButton = (props, id) => {
  const { isAuthenticated } = useAuth0();
  console.log(id);
  return (
    isAuthenticated && (
      <div>
        <button
          onClick={() => props.addBasket("Photo")}
          class="btn btn-primary m-2"
        >
          Buy
        </button>
      </div>
    )
  );
};

export default connect(null, { addBasket })(BuyButton);