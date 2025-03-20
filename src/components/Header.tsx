import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center justify-center">
          {/* Centered logo with text */}
          <div className="flex items-center">
            <img 
              src="https://i.ibb.co/0RmbPqH6/DV-EDIT-GOLD-FART-1.png" 
              alt="DV Deck&Paint Logo" 
              className="h-20 w-auto object-contain mr-3"
              style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}
            />
            <div>
              <span className="text-xl font-bold text-dark-brown">DV</span>
              <span className="text-xl font-bold text-gold-500">Deck&Paint</span>
              <div className="text-xs text-gold-500">EST. 2023</div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-dark-brown" />
          ) : (
            <Menu className="h-6 w-6 text-dark-brown" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-dark-brown hover:text-gold-500 transition-colors">Home</a></li>
            <li><a href="#about" className="text-dark-brown hover:text-gold-500 transition-colors">About</a></li>
            <li><a href="#services" className="text-dark-brown hover:text-gold-500 transition-colors">Services</a></li>
            <li><a href="#portfolio" className="text-dark-brown hover:text-gold-500 transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="text-dark-brown hover:text-gold-500 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-4">
            <li><a href="#home" className="block px-4 py-2 text-dark-brown hover:bg-gold-100" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="block px-4 py-2 text-dark-brown hover:bg-gold-100" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" className="block px-4 py-2 text-dark-brown hover:bg-gold-100" onClick={toggleMenu}>Services</a></li>
            <li><a href="#portfolio" className="block px-4 py-2 text-dark-brown hover:bg-gold-100" onClick={toggleMenu}>Portfolio</a></li>
            <li><a href="#contact" className="block px-4 py-2 text-dark-brown hover:bg-gold-100" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;