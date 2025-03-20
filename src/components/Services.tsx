import React from 'react';
import { Home, Building, Brush, Droplet, Wallpaper, Fence } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
    <div className="w-12 h-12 bg-gold-200 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-dark-brown">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <a 
      href="#contact" 
      className="mt-4 inline-block text-gold-600 hover:text-gold-700 font-medium"
      onClick={(e) => {
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
      }}
    >
      Request a quote →
    </a>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Home className="h-6 w-6 text-gold-600" />,
      title: "Interior Painting",
      description: "Transform your home's interior with our expert painting services, including walls, ceilings, trim, and more."
    },
    {
      icon: <Building className="h-6 w-6 text-gold-600" />,
      title: "Exterior Painting",
      description: "Protect and beautify your home's exterior with our durable, weather-resistant painting solutions."
    },
    {
      icon: <Building className="h-6 w-6 text-gold-600" />,
      title: "Commercial Painting",
      description: "Professional painting services for offices, retail spaces, and other commercial properties."
    },
    {
      icon: <Home className="h-6 w-6 text-gold-600" />,
      title: "Residential Painting",
      description: "Complete painting solutions for houses, apartments, and other residential properties."
    },
    {
      icon: <Wallpaper className="h-6 w-6 text-gold-600" />,
      title: "Trending Finishes",
      description: "Follow new trends such as limewash walls, venetian plaster, patterned finishes, wallpaper removal or application and more."
    },
    {
      icon: <Fence className="h-6 w-6 text-gold-600" />,
      title: "Deck & Fence Staining",
      description: "Protect and enhance your outdoor wooden structures with our professional staining services."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-brown">Our Services</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of painting services to meet all your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;