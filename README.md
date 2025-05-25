//   ProductCard.jsx

import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card" style={styles.card}>
      <h3>{product.name}</h3>
      <p>{product.price} BYN</p>
      <button onClick={() => onAddToCart(product)} style={styles.button}>
        Добавить в корзину
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '8px',
    textAlign: 'center',
  },
  button: {
    marginTop: '12px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4caf50',
    color: 'white',
    cursor: 'pointer',
  },
};

export default ProductCard;