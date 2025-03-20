import emailjs from 'emailjs-com';

// This is a service file to handle email functionality
// In a production environment, you would need to set up EmailJS with your credentials
// Visit https://www.emailjs.com/ to create an account and get your service ID, template ID, and user ID

const EmailService = {
  sendEmail: async (templateParams) => {
    try {
      // EmailJS credentials
      const serviceId = 'service_l690eo7';
      const templateId = 'template_nbwmk5h';
      const userId = 'oWh4IAtFf846X-iwe';
      
      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, userId);
      
      console.log('Email sent successfully:', response);
      
      return response;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
};

export default EmailService;