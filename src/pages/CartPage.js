import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, onRemoveFromCart }) => (
  <div>
    <h1 style={{textAlign: 'center', color: '#222', margin: '2rem 0'}}>Your Cart</h1>
    <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
  </div>
);

export default CartPage; 