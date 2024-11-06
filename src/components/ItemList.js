import React from "react";

import ShopItem from "./ShopItem";

function ItemList({ items, onBuy, onDelete }) {
  return (
    <div>
      <h2> Items in shop </h2>
      {items.map((item) => (
        <ShopItem key={item.id} item={item} onBuy={onBuy} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ItemList;
