import React from "react";
import Link from "next/link";
import './navbar.css';


export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-icon"></span>
        <Link href="/" className="logo-text">
          SynergySphere
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/Features">Features</Link>
        </li>
        <li>
          <Link href="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="nav-buttons">
        <Link href="/signin">
          <button className="btn-text">Sign In</button>
        </Link>
        <Link href="/get-started">
          <button className="btn-primary">Get Started</button>
        </Link>
      </div>
    </nav>
  );
}
