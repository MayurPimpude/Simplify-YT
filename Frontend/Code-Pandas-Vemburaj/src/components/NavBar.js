// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import '../styles/NavBar.css';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Nav className="mx-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">ContactUs</Link>
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;
