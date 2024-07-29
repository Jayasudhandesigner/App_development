// src/Components/burgerBar/BurgerBar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../Assest/css/BurgerBar.css'; // Import your CSS for styling

const BurgerBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurgerBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-bar ${isOpen ? 'open' : ''}`}>
      <div className="burger-menu" onClick={toggleBurgerBar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`burger-nav ${isOpen ? 'open' : ''}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default BurgerBar;
