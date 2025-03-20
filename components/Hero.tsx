import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/Kp6CPFhL/QUALITY-DECK-STAINING.jpg",
      title: "Quality Deck Staining",
      description: "Protect and enhance your outdoor living spaces"
    },
    {
      id: 2,
      image: "https://i.ibb.co/RT58dbQP/i-Stock-2161507261.jpg",
      title: "Professional Interior Painting",
      description: "Transform your home with our expert painting services"
    },
    {
      id: 3,
      image: "https://i.ibb.co/3mq8s6t7/i-Stock-166145172.jpg",
      title: "Exterior Excellence",
      description: "Weather-resistant solutions for your home's exterior"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleGetQuoteClick = (e) => {
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
    <section id="home" className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gold-100">
                {slide.description}
              </p>
              <a 
                href="#contact" 
                onClick={handleGetQuoteClick}
                className="inline-block bg-gold-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gold-600 transition-colors duration-300"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentSlide ? 'bg-gold-500' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;