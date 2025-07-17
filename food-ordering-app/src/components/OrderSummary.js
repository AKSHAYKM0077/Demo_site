import React from 'react';

const summaryStyle = {
  background: '#222',
  color: '#fff',
  borderRadius: '12px',
  padding: '1.5rem',
  margin: '2rem',
  maxWidth: '400px',
  textAlign: 'center',
};

const buttonStyle = {
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  padding: '0.7rem 2rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  marginTop: '1rem',
};

const OrderSummary = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <section id="order" style={summaryStyle}>
      <h2>Order Summary</h2>
      <div>Total: <strong>${total.toFixed(2)}</strong></div>
      <button style={buttonStyle} onClick={onCheckout} disabled={cartItems.length === 0}>
        Checkout
      </button>
    </section>
  );
};

export default OrderSummary; 