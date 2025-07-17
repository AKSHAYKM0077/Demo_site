import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  background: '#222',
  color: '#fff',
  padding: '1rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
};

const logoStyle = {
  fontWeight: 'bold',
  fontSize: '1.5rem',
  letterSpacing: '2px',
};

const navStyle = {
  display: 'flex',
  gap: '1.5rem',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const Header = () => (
  <header style={headerStyle}>
    <div style={logoStyle}>🍔 FoodOrder</div>
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Menu</Link>
      <Link to="/cart" style={linkStyle}>Cart</Link>
      <Link to="/order" style={linkStyle}>Order</Link>
    </nav>
  </header>
);

export default Header; 