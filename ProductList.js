import React from "react";

const products = [
  { id: 1, name: "Товар 3", price: 100 },
  { id: 2, name: "Товар 2", price: 200 },
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Каталог товаров</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name} - {product.price}₽</p>
          <button onClick={() => addToCart(product)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;