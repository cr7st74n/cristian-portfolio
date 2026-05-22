import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__bracket">[</span>CG<span className="footer__bracket">]</span>
            </span>
            <p className="footer__tagline">Building things for the web.</p>
          </div>

          <nav className="footer__nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <p className="footer__copy">
            © {new Date().getFullYear()} Cristian Gonzalez Romero. Built with React.
          </p>
        </div>
      </div>
    </footer>
  );
}
