import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../../Actions/productQuantity";

function Cart({ basketProps, productQuantity, clearProduct }) {
  useEffect(() => {
    fetchCart();
  }, []);

  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const data = await fetch(`https://localhost:44321/api/cart`);
    const cart = await data.json();
    console.log(cart);
    setCart(cart);
  };
  //console.log(basketProps);

  let productsInCart = [];

  Object.keys(basketProps.products).forEach(function (item) {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
    //console.log(productsInCart);
  });

  console.log(cart.itemName);

  productsInCart = cart.map((cart, index) => {
    return (
      <Fragment key={index}>
        <div className="product">
          <ion-icon
            onClick={() => clearProduct(cart.itemName)}
            name="close-circle"
          ></ion-icon>
          <img src="https://picsum.photos/300/200" />
          <span className="sm-hide">{cart.itemName}</span>
        </div>
        <div className="price sm-hide">£{cart.price}.00</div>
        <div className="quantity">
          <ion-icon
            onClick={() => productQuantity("decrease", cart.itemName)}
            className="decrease"
            name="arrow-back-circle-outline"
          ></ion-icon>
          <span>{cart.quantity}</span>
          <ion-icon
            onClick={() => productQuantity("increase", cart.itemName)}
            className="increase"
            name="arrow-forward-circle-outline"
          ></ion-icon>
        </div>
        <div className="total">£{cart.quantity * cart.price}.00</div>
      </Fragment>
    );
  });

  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">{productsInCart}</div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">Basket Total:</h4>
        <h4 className="basketTotal">£{basketProps.cartCost}.00</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
