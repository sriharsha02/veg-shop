import React, { useState } from "react";

function ShopItem({ item, onBuy, onDelete }) {
  const [buyQuantity, setBuyQuantity] = useState(1);

  const handleBuyClick = () => {
    if (buyQuantity > 0 && buyQuantity <= item.quantity) {
      onBuy(item.id, buyQuantity);
    }
  };

  return (
    <div>
      <p>
        {item.name} - Rs.{item.price} - {item.quantity} KG
      </p>
      <input
        type="number"
        value={buyQuantity}
        onChange={(e) => setBuyQuantity(parseInt(e.target.value, 10))}
        min="1"
        max={item.quantity}
      />
      <button className="item-edit" onClick={handleBuyClick}>
        Buy
      </button>

      <button className="item-edit" onClick={() => onDelete(item.id)}>
        Delete Item
      </button>
    </div>
  );
}

export default ShopItem;
