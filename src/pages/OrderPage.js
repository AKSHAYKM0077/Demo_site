import React from 'react';
import OrderSummary from '../components/OrderSummary';

const OrderPage = ({ cartItems, onCheckout }) => (
  <div>
    <h1 style={{textAlign: 'center', color: '#222', margin: '2rem 0'}}>Order Summary</h1>
    <OrderSummary cartItems={cartItems} onCheckout={onCheckout} />
  </div>
);

export default OrderPage; 