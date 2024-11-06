import React, { useState } from "react";
import "./ItemInput.css";
function ItemInput({ onAddItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddItem = () => {
    if (name && price && quantity) {
      onAddItem({
        name,
        price: parseFloat(price),
        quantity: parseInt(quantity, 10),
      });
      setName("");
      setPrice("");
      setQuantity("");
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
      </div>

      <button onClick={handleAddItem}>Add to Shop</button>
    </div>
  );
}

export default ItemInput;
