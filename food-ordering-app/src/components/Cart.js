import React from 'react';

const cartStyle = {
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  padding: '1.5rem',
  margin: '2rem',
  maxWidth: '400px',
  color: '#222',
};

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
};

const removeBtnStyle = {
  background: '#ff1744',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '0.3rem 0.8rem',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const Cart = ({ cartItems, onRemoveFromCart }) => (
  <aside id="cart" style={cartStyle}>
    <h2>Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      cartItems.map((item, idx) => (
        <div key={idx} style={itemStyle}>
          <span>{item.name} (${item.price.toFixed(2)})</span>
          <button style={removeBtnStyle} onClick={() => onRemoveFromCart(item)}>
            Remove
          </button>
        </div>
      ))
    )}
  </aside>
);

export default Cart; 