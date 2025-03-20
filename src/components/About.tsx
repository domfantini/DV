import React from 'react';
import { CheckCircle, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gold-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-brown">About Us</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-dark-brown mb-8">
            We are a professional painting company dedicated to delivering top-quality painting services for residential and commercial clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <div className="w-48 h-48 bg-gold-100 rounded-full mb-6 md:mb-0 md:mr-6 flex items-center justify-center">
              <div className="text-center">
                <User className="h-16 w-16 text-gold-500 mb-2" />
                <p className="text-gold-600 font-medium">Photo Coming Soon</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-dark-brown">Dominic</h3>
              <p className="text-gray-600">
                A young driven entrepreneur with a passion for quality craftsmanship and customer satisfaction. Dominic brings energy, vision, and dedication to every project, ensuring that each client receives the highest level of service.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <div className="w-48 h-48 bg-gold-100 rounded-full mb-6 md:mb-0 md:mr-6 flex items-center justify-center">
              <div className="text-center">
                <User className="h-16 w-16 text-gold-500 mb-2" />
                <p className="text-gold-600 font-medium">Photo Coming Soon</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-dark-brown">Vasili</h3>
              <p className="text-gray-600">
                A young hard working perfectionist who takes pride in delivering flawless results. Vasili's attention to detail and commitment to excellence ensures that every painting project exceeds expectations and stands the test of time.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-gold-200 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-dark-brown">Experienced Team</h3>
            <p className="text-gray-600">
              Our team of skilled painters brings years of experience and craftsmanship to every project.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-gold-200 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-dark-brown">Quality Materials</h3>
            <p className="text-gray-600">
              We use only premium paints and materials to ensure a beautiful, long-lasting finish.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-gold-200 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-dark-brown">Customer Satisfaction</h3>
            <p className="text-gray-600">
              We're committed to exceeding your expectations with our attention to detail and customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;