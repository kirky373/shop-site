import React, { useState, useEffect } from "react";
import LoggedOutBuyButton from "../Buttons/LoggedOutBuyButton";
import { useAuth0 } from "@auth0/auth0-react";
import { addBasket } from "../../Actions/addAction";
import { connect } from "react-redux";
//Home page for the website, will display all products currently in shop inventory from API
function Home(props) {
  const [items, setItems] = useState([]);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(`https://localhost:44321/api/inventoryitems`);
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  const buyButton = (
    //How to pass map items to this?
    <button
      onClick={() => props.addBasket("Photo")}
      class="btn btn-primary m-2"
    >
      Buy
    </button>
  );

  const renderButton = isAuthenticated ? buyButton : <LoggedOutBuyButton />;

  return (
    <div>
      <h1>Home Page</h1>
      <div className="grid-container">
        {items.map((item) => (
          <div className="wrapper">
            <h4 className="itemTitle" key={item.id}>
              {item.itemName}
            </h4>
            <img src="https://picsum.photos/200/150" />
            <h5>Price: £{item.price} </h5>
            {renderButton}
            <button
              onClick={() => props.addBasket(item.tagName)}
              class="btn btn-primary m-2"
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(null, { addBasket })(Home);
