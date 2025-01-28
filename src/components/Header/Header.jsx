// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={headerStyle}>
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={linkStyle}>
          <Link to="/" style={linkStyle}>Главная</Link>
        </li>
        <li style={linkStyle}>
          <Link to="/about" style={linkStyle}>О нас</Link>
        </li>
        <li style={linkStyle}>
          <Link to="/blog" style={linkStyle}>Блог</Link>
        </li>
        <li style={linkStyle}>
          <Link to="/contact" style={linkStyle}>Контакты</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const headerStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
};

const navStyle = {
  width: '80%',
  margin: '0 auto',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  margin: 0,
  padding: 0,
};


const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
};

export default Header;