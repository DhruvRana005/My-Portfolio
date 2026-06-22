'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [emailSubscribed, setEmailSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmailSubscribed(true);
    setTimeout(() => {
      setEmailSubscribed(false);
    }, 3000);
  };

  return (
    <>
      {/* Footer Top */}
      <footer className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand column */}
            <div className="footer-brand">
              <h2>DR<span>Dhruv</span></h2>
              <p>
                Crafting robust web experiences using modern full stack javascript architectures. Specializing in high-performance frontend designs.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="footer-col">
              <h3>Navigation</h3>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/skills">Skills</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contacts Column */}
            <div className="footer-col">
              <h3>Contact Info</h3>
              <ul className="footer-contact-list">
                <li>
                  <strong>Phone</strong>
                  <span>+91 8287698998</span>
                </li>
                <li>
                  <strong>Email</strong>
                  <a href="mailto:dhruvrana199@gmail.com">dhruvrana199@gmail.com</a>
                </li>
                <li>
                  <strong>College</strong>
                  <span>IMT (MDU), Haryana</span>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="footer-col footer-newsletter">
              <h3>Get the Latest Info</h3>
              <p>Subscribe to get updates on my newest projects, blogs and design releases.</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder={emailSubscribed ? "Subscribed Successfully!" : "Your email address"}
                  disabled={emailSubscribed}
                  required 
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom bar */}
      <footer className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-flex">
            <p>© {new Date().getFullYear()} Dhruv Rana. All Rights Reserved.</p>
            
            <div className="footer-socials">
              <a href="https://github.com/DhruvRana005" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/dhruv-rana-820bb4361" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>

            <div className="footer-bottom-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
