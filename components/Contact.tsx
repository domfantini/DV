import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, AlertCircle } from 'lucide-react';
import EmailService from './EmailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear errors when user starts typing
    if (name === 'name' && formErrors.name) {
      setFormErrors(prev => ({ ...prev, name: '' }));
    }
    
    if (name === 'email' && formErrors.email) {
      setFormErrors(prev => ({ ...prev, email: '' }));
    }

    if (name === 'phone' && formErrors.phone) {
      setFormErrors(prev => ({ ...prev, phone: '' }));
    }

    if (name === 'message' && formErrors.message) {
      setFormErrors(prev => ({ ...prev, message: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    // Validate name (required)
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Validate email (required)
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    // Validate phone (required)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    }

    // Validate message (required)
    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare the email template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
      to_email: 'dvdeck.paint@gmail.com',
      subject: 'New Lead from Website'
    };

    try {
      // Send the email using EmailJS service
      await EmailService.sendEmail(templateParams);
      
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again or contact us directly.'
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-brown">Contact Us</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Get in touch for a free consultation and estimate.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-dark-brown">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              We're here to answer any questions you have about our painting services. 
              Contact us today to schedule a consultation or request a free quote.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gold-200 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark-brown">Phone</h4>
                  <p className="text-gray-600">514 619 4272</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gold-200 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark-brown">Email</h4>
                  <p className="text-gray-600">DVdeck.paint@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gold-200 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark-brown">Servicing Area</h4>
                  <p className="text-gray-600">Montreal and surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            {formStatus.submitted && formStatus.success ? (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-brown">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                    className="bg-gold-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gold-600 transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500`}
                    required
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {formErrors.name}
                    </p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500`}
                    required
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {formErrors.email}
                    </p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500`}
                    required
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {formErrors.phone}
                    </p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your project <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500`}
                    required
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {formErrors.message}
                    </p>
                  )}
                </div>
                
                <button
                  id="contact-form-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gold-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gold-600 transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Request Quote
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;