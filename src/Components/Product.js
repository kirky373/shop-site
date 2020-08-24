import React from "react";
import LoggedOutBuyButton from "../Components/Buttons/LoggedOutBuyButton";
import BuyButton from "../Components/Buttons/BuyButton";

function Product() {
  return (
    <div>
      <h3>A product</h3>
      <img src="https://picsum.photos/150/100" />
      <h5>Price: £5.00</h5>
      <LoggedOutBuyButton />
      <BuyButton />
    </div>
  );
}

export default Product;
