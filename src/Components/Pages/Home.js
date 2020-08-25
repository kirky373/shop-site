import React, { useState, useEffect } from "react";
import LoggedOutBuyButton from "../Buttons/LoggedOutBuyButton";
import BuyButton from "../Buttons/BuyButton";
function Home({ match }, props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(`https://localhost:44321/api/inventoryitems`);
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div className="grid-container">
        {items.map((item) => (
          <div className="wrapper">
            <h5 key={item.id}>{item.itemName}</h5> <br />
            <h5>Price: £{item.price} </h5>
            <LoggedOutBuyButton />
            <BuyButton id={item} />
            {console.log(item.itemName)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
