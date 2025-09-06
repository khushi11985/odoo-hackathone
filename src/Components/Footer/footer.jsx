import React from "react";
import Link from "next/link";
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo + About */}
        <div className="footer-left">
          <div className="logo">
            <span className="logo-icon"></span>
            <span className="logo-text">SynergySphere</span>
          </div>
          <p>
            Streamline your team&apos;s workflow with powerful project management
            tools designed for modern collaboration.
          </p>
        </div>

        {/* Middle Section - Product Links */}
        <div className="footer-links">
          <h4>Product</h4>
          <ul>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/integrations">Integrations</Link></li>
          </ul>
        </div>

        {/* Right Section - Company Links */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 TeamFlow. All rights reserved.</p>
        <div className="footer-policy">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
