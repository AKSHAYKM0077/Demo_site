import React from 'react';
import FoodItem from './FoodItem';

const menuStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  padding: '2rem',
  background: '#f8fafc',
};

const sampleFoods = [
  { id: 1, name: 'Margherita Pizza', price: 8.99, image: '', description: 'Classic cheese & tomato pizza.' },
  { id: 2, name: 'Veggie Burger', price: 6.49, image: '', description: 'Loaded with fresh veggies.' },
  { id: 3, name: 'Pasta Alfredo', price: 7.99, image: '', description: 'Creamy white sauce pasta.' },
  { id: 4, name: 'Caesar Salad', price: 5.99, image: '', description: 'Crisp romaine with Caesar dressing.' },
];

const FoodMenu = ({ onAddToCart }) => (
  <section id="menu" style={menuStyle}>
    {sampleFoods.map(food => (
      <FoodItem key={food.id} food={food} onAddToCart={onAddToCart} />
    ))}
  </section>
);

export default FoodMenu; 