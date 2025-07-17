import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (food) => {
    setCartItems([...cartItems, food]);
  };

  const handleRemoveFromCart = (food) => {
    setCartItems(cartItems.filter(item => item !== food));
  };

  const handleCheckout = () => {
    alert('Thank you for your order!');
    setCartItems([]);
  };

  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', background: '#f8fafc', paddingBottom: '4rem' }}>
        <Header />
        <main style={{ minHeight: '70vh' }}>
          <Routes>
            <Route path="/" element={<MenuPage onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
            <Route path="/order" element={<OrderPage cartItems={cartItems} onCheckout={handleCheckout} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
