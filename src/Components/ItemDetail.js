import React, { useState, useEffect } from "react";
import "../App.css";
import BuyButton from "./Buttons/BuyButton";
import LoggedOutBuyButton from "./Buttons/LoggedOutBuyButton";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://picsum.photos/id/${match.params.id}/info`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.author}</h1>
      <img width="500" src={item.download_url} alt="Pretty thing" />
      <br />
      <BuyButton />
      <LoggedOutBuyButton />
    </div>
  );
}

export default ItemDetail;
