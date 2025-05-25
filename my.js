import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Магазин</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  ); 
}

export default App;