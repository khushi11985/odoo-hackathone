"use client";
import React, { useState } from "react";
import Link from "next/link";
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-icon"></span>
        <Link href="/" className="logo-text">
          SynergySphere
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link href="/features" onClick={() => setIsOpen(false)}>Features</Link>
        </li>
        <li>
          <Link href="/Dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
        </li>
        
        <li>
          <Link href="/About" onClick={() => setIsOpen(false)}>About</Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="nav-buttons">
        <Link href="/SignIn">
          <button className="btn-text">Sign In</button>
        </Link>
        <Link href="/get-started">
          <button className="btn-primary">Get Started</button>
        </Link>
      </div>
    </nav>
  );
}
