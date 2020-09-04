import React, { Component } from "react";
import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
} from "../Actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  // Easier way?
  products: {
    GenericProduct: {
      name: "Generic Product",
      tagName: "GenericProduct",
      price: 10.0,
      stock: 5,
      numbers: 0,
      inCart: false,
    },
    Photo: {
      name: "Photo",
      tagName: "Photo",
      price: 5.0,
      stock: 12,
      numbers: 0,
      inCart: false,
    },
    LargePhoto: {
      name: "Large Photo",
      tagName: "LargePhoto",
      price: 12.0,
      stock: 3,
      numbers: 0,
      inCart: false,
    },
  },
};
class basketReducer extends Component {
  constructor(props) {
    super(props);
    console.log("CALLED");
  }
  componentDidMount() {
    console.log("MOUNTED");
  }
}
let productSelected = "";
let newCartCost = 0;
let newBasketNumbers = 0;

function addProductBasket(state, action) {
  newCartCost = 0;
  productSelected = { ...state.products[action.payload] };
  if (productSelected.numbers === productSelected.stock) {
    productSelected.numbers = productSelected.stock;
    newBasketNumbers = state.basketNumbers;
  } else {
    productSelected.numbers += 1;
    newBasketNumbers = state.basketNumbers + 1;
    newCartCost = state.cartCost + productSelected.price;
  }
  productSelected.inCart = true;
  console.log(productSelected);

  return {
    ...state,
    basketNumbers: newBasketNumbers,
    cartCost: newCartCost,
    products: {
      ...state.products,
      [action.payload]: productSelected,
    },
  };
}

function increaseQuantity(state, action) {
  productSelected = { ...state.products[action.payload] };
  newCartCost = 0;
  newBasketNumbers = 0;
  if (productSelected.numbers === productSelected.stock) {
    productSelected.numbers = productSelected.stock;
    newCartCost = state.cartCost;
    newBasketNumbers = state.basketNumbers;
  } else {
    productSelected.numbers += 1;
    newCartCost = state.cartCost + state.products[action.payload].price;
    newBasketNumbers = state.basketNumbers + 1;
  }
  return {
    ...state,
    basketNumbers: newBasketNumbers,
    cartCost: newCartCost,
    products: {
      ...state.products,
      [action.payload]: productSelected,
    },
  };
}

function decreaseQuantity(state, action) {
  productSelected = { ...state.products[action.payload] };
  newCartCost = 0;
  newBasketNumbers = 0;
  if (productSelected.numbers === 0) {
    productSelected.numbers = 0;
    newCartCost = state.cartCost;
    newBasketNumbers = state.basketNumbers;
  } else {
    productSelected.numbers -= 1;
    newCartCost = state.cartCost - state.products[action.payload].price;
    newBasketNumbers = state.basketNumbers - 1;
  }
  return {
    ...state,
    basketNumbers: newBasketNumbers,
    cartCost: newCartCost,
    products: {
      ...state.products,
      [action.payload]: productSelected,
    },
  };
}

function clearProduct(state, action) {
  productSelected = { ...state.products[action.payload] };
  let numbersBackup = productSelected.numbers;
  productSelected.numbers = 0;
  productSelected.inCart = false;
  return {
    ...state,
    basketNumbers: state.basketNumbers - numbersBackup,
    cartCost: state.cartCost - numbersBackup * productSelected.price,
    products: {
      ...state.products,
      [action.payload]: productSelected,
    },
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      return addProductBasket(state, action);
    case GET_NUMBERS_BASKET:
      return { ...state };
    case INCREASE_QUANTITY:
      return increaseQuantity(state, action);
    case DECREASE_QUANTITY:
      return decreaseQuantity(state, action);
    case CLEAR_PRODUCT:
      return clearProduct(state, action);
    default:
      return state;
  }
};
