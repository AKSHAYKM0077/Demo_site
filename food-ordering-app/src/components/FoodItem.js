import React from 'react';

const cardStyle = {
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const nameStyle = {
  fontWeight: 'bold',
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  color: '#222',
};

const descStyle = {
  color: '#555',
  marginBottom: '1rem',
  textAlign: 'center',
};

const priceStyle = {
  color: '#007bff',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const buttonStyle = {
  background: '#222',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  padding: '0.5rem 1.5rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1rem',
  transition: 'background 0.2s',
};

const FoodItem = ({ food, onAddToCart }) => (
  <div style={cardStyle}>
    <div style={nameStyle}>{food.name}</div>
    <div style={descStyle}>{food.description}</div>
    <div style={priceStyle}>${food.price.toFixed(2)}</div>
    <button style={buttonStyle} onClick={() => onAddToCart(food)}>
      Add to Cart
    </button>
  </div>
);

export default FoodItem; 