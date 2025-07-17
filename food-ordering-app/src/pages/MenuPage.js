import React from 'react';
import FoodMenu from '../components/FoodMenu';

const MenuPage = ({ onAddToCart }) => (
  <div>
    <h1 style={{textAlign: 'center', color: '#222', margin: '2rem 0'}}>Menu</h1>
    <FoodMenu onAddToCart={onAddToCart} />
  </div>
);

export default MenuPage; 