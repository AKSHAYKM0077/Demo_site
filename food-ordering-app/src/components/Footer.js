import React from 'react';

const footerStyle = {
  background: '#222',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  fontSize: '1rem',
};

const Footer = () => (
  <footer style={footerStyle}>
    &copy; {new Date().getFullYear()} FoodOrder. All rights reserved.
  </footer>
);

export default Footer; 