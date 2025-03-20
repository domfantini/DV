import React, { useState } from 'react';
import { Image } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Elegant Interior Design",
      category: "Interior",
      imageUrl: "https://i.ibb.co/Rrh0Rwn/IMG-9998.jpg"
    },
    {
      id: 2,
      title: "Deck Staining",
      category: "Exterior",
      imageUrl: "https://i.ibb.co/PZRtZNLj/IMG-4655-2.jpg"
    },
    {
      id: 3,
      title: "Limewash Finish",
      category: "Special",
      imageUrl: "https://i.ibb.co/XrTwhfLX/DJI-20241108-121600-233.jpg"
    },
    {
      id: 4,
      title: "Modern Interior Finish",
      category: "Interior",
      imageUrl: "https://i.ibb.co/1J2RT1TL/IMG-8768.jpg"
    },
    {
      id: 5,
      title: "Exterior Refresher",
      category: "Exterior",
      imageUrl: "https://i.ibb.co/ynztL3t1/IMG-7383.jpg"
    },
    {
      id: 6,
      title: "Special Finish Project",
      category: "Special",
      imageUrl: "https://i.ibb.co/gFWLyBYk/IMG-8911-2.jpg"
    },
    {
      id: 7,
      title: "Modern Exterior Finish",
      category: "Exterior",
      imageUrl: "https://i.ibb.co/Y4h9tsMk/IMG-7166.jpg"
    },
    {
      id: 8,
      title: "House Exterior Detail",
      category: "Exterior",
      imageUrl: "https://i.ibb.co/4RLvqHCr/IMG-7174.jpg"
    },
    {
      id: 9,
      title: "Contemporary Exterior",
      category: "Exterior",
      imageUrl: "https://i.ibb.co/8n3XrMbr/IMG-7184.jpg"
    },
    {
      id: 10,
      title: "Exterior Transformation",
      category: "Exterior",
      imageUrl: "https://i.ibb.co/mCd9mjSv/IMG-7249.jpg"
    },
    {
      id: 11,
      title: "Contemporary Interior",
      category: "Interior",
      imageUrl: "https://i.ibb.co/CsVs0XFM/IMG-8975.jpg"
    },
    {
      id: 12,
      title: "Interior Detail Work",
      category: "Interior",
      imageUrl: "https://i.ibb.co/XkKQKBNC/IMG-9621.jpg"
    },
    {
      id: 13,
      title: "Coloured Bedrooms",
      category: "Interior",
      imageUrl: "https://i.ibb.co/C5w4qq8G/IMG-8931.jpg"
    },
    {
      id: 14,
      title: "Cabinet Refinishing",
      category: "Special",
      imageUrl: "https://i.ibb.co/bjgYy251/IMG-0071.jpg"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter);

  const handleViewAllClick = (e) => {
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
    <section id="portfolio" className="py-16 md:py-24 bg-gold-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-brown">Our Work</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-8">
            Browse through our portfolio of completed projects to see the quality of our work.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-gold-500 text-white' : 'bg-white text-dark-brown'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('interior')} 
              className={`px-4 py-2 rounded-full ${filter === 'interior' ? 'bg-gold-500 text-white' : 'bg-white text-dark-brown'}`}
            >
              Interior
            </button>
            <button 
              onClick={() => setFilter('exterior')} 
              className={`px-4 py-2 rounded-full ${filter === 'exterior' ? 'bg-gold-500 text-white' : 'bg-white text-dark-brown'}`}
            >
              Exterior
            </button>
            <button 
              onClick={() => setFilter('special')} 
              className={`px-4 py-2 rounded-full ${filter === 'special' ? 'bg-gold-500 text-white' : 'bg-white text-dark-brown'}`}
            >
              Special
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                <p className="text-gold-200">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllClick}
            className="inline-flex items-center bg-gold-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gold-600 transition-colors duration-300"
          >
            <Image className="h-5 w-5 mr-2" />
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;