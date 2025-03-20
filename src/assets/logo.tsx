import React from 'react';

const Logo = ({ className = "h-16 w-auto" }) => {
  return (
    <img 
      src="https://i.ibb.co/0RmbPqH6/DV-EDIT-GOLD-FART-1.png" 
      alt="DV Deck&Paint Logo" 
      className={className}
      style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}
    />
  );
};

export default Logo;