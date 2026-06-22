'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="navbar animate-fade-in-up">
      <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
        <img src="/passport.jpeg" alt="Dhruv Rana" className="nav-logo-img" />
        Dhruv<span>Rana</span>
      </Link>
      
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link 
            href="/" 
            className={isActive('/') ? 'active' : ''} 
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/skills" 
            className={isActive('/skills') ? 'active' : ''} 
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link 
            href="/experience" 
            className={isActive('/experience') ? 'active' : ''} 
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link 
            href="/projects" 
            className={isActive('/projects') ? 'active' : ''} 
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            href="/contact" 
            className={isActive('/contact') ? 'active' : ''} 
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <Link href="/contact" className="nav-btn" onClick={() => setMenuOpen(false)}>
        Hire Me
      </Link>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
        <span style={{ opacity: menuOpen ? '0' : '1' }}></span>
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
      </button>
    </nav>
  );
}
