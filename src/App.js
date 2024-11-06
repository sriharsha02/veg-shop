import React, { useState } from "react";
import ItemInput from "./components/ItemInput";
import ItemList from "./components/ItemList";
import "./components/App.css";
function App() {
  const [items, setItems] = useState([]);

  // Function to add a new item
  const addItem = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now() }]);
  };

  // Function to handle the buy action
  const buyItem = (itemId, buyQuantity) => {
    setItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === itemId
              ? { ...item, quantity: item.quantity - buyQuantity }
              : item
          )
          .filter((item) => item.quantity > 0) // Filter out items with quantity <= 0
    );
  };

  // Function to delete an item
  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1 className="shop-title">Veg Shop</h1>
      <ItemInput onAddItem={addItem} />
      <ItemList items={items} onBuy={buyItem} onDelete={deleteItem} />
      <h3>Total Items in Shop: {items.length}</h3>
    </div>
  );
}

export default App;
