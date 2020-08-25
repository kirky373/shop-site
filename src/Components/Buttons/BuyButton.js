import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import { addBasket } from "../../Actions/addAction";
//Lets the user buy products is currently redudant due to not knowing how to transfer props to the onclick
const BuyButton = (props, id) => {
  const { isAuthenticated } = useAuth0();
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
