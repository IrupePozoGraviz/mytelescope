import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';

export const Navigate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current.focus(); // Return focus to the hamburger button when Escape is pressed
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    // Close the menu when a NavLink is clicked
    const closeMenuOnNavClick = () => {
      if (isOpen) {
        setIsOpen(false);
        buttonRef.current.focus();
      }
    };

    // Add the event listener to all NavLink components
    const navLinks = Array.from(document.querySelectorAll('.nav a'));
    navLinks.forEach((link) => link.addEventListener('click', closeMenuOnNavClick));

    return () => {
      // Remove the event listener when the component is unmounted
      navLinks.forEach((link) => link.removeEventListener('click', closeMenuOnNavClick));
    };
  }, [isOpen]);

  return (
    <header className="menu">
      <button
        ref={buttonRef}
        className="hamburger"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={isOpen ? 'rotate' : ''}
          fill={isOpen ? '#FF758F' : '#4C5270'}>
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <nav
        ref={menuRef}
        className={`nav ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="/product" className={({ isActive }) => (isActive ? 'active' : '')}>Product</NavLink></li>
          <li><NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : '')}>Pricing</NavLink></li>
		  <li><NavLink to="/validated-cases" className={({ isActive }) => (isActive ? 'active' : '')}>Validated cases</NavLink></li>
          <li><NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>About us</NavLink></li>
      <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};