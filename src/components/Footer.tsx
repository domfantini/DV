import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const handleServiceClick = (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    
    // Highlight the quote button
    const quoteBtn = document.querySelector('#contact-form-submit');
    if (quoteBtn) {
      quoteBtn.classList.add('animate-pulse', 'ring-4', 'ring-gold-300');
      setTimeout(() => {
        quoteBtn.classList.remove('animate-pulse', 'ring-4', 'ring-gold-300');
      }, 3000);
    }
  };

  return (
    <footer className="bg-dark-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-white p-2 rounded-lg mr-3">
                <img 
                  src="https://i.ibb.co/0RmbPqH6/DV-EDIT-GOLD-FART-1.png" 
                  alt="DV Deck&Paint Logo" 
                  className="h-14 w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white">DV</span>
                <span className="text-xl font-bold text-gold-500">Deck&Paint</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional painting services for residential and commercial clients.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/dvdeckandpaint" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/dvdeckpaint/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-gold-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gold-500 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-gold-500 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-500">Services</h3>
            <ul className="space-y-2">
              <li><a href="#contact" onClick={handleServiceClick} className="text-gray-400 hover:text-gold-500 transition-colors">Interior Painting</a></li>
              <li><a href="#contact" onClick={handleServiceClick} className="text-gray-400 hover:text-gold-500 transition-colors">Exterior Painting</a></li>
              <li><a href="#contact" onClick={handleServiceClick} className="text-gray-400 hover:text-gold-500 transition-colors">Commercial Painting</a></li>
              <li><a href="#contact" onClick={handleServiceClick} className="text-gray-400 hover:text-gold-500 transition-colors">Residential Painting</a></li>
              <li><a href="#contact" onClick={handleServiceClick} className="text-gray-400 hover:text-gold-500 transition-colors">Trending Finishes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-500">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Servicing Area: Montreal and surrounding areas</li>
              <li>Phone: 514 619 4272</li>
              <li>Email: DVdeck.paint@gmail.com</li>
              <li>Hours: Mon-Fri 8am-6pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2025 DV Deck&Paint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;