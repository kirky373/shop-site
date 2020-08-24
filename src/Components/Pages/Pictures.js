import React, { useState, useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import BuyAllButton from "../Buttons/BuyAllButton";

function Pictures() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://picsum.photos/v2/list");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      <h1>Picture page</h1>
      <BuyAllButton />
      {items.map((item) => (
        <h2 key={item.id}>
          Author:<Link to={`/shop/${item.id}`}>{item.author}</Link>
        </h2>
      ))}
    </div>
  );
}

export default Pictures;
