import emailjs from '@emailjs/browser';

// EmailJS configuration
// You need to replace these with your actual EmailJS credentials
// Get them from: https://dashboard.emailjs.com/
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_g594ly5', // Replace with your EmailJS service ID
  TEMPLATE_ID_BOOKING: 'template_aocycoj', // Replace with your booking template ID
  TEMPLATE_ID_CONTACT: 'template_1eofzek', // Replace with your contact template ID
  PUBLIC_KEY: 'tat--f_zU9Lt1JqNg', // Replace with your EmailJS public key
};

// Doctor's email address
export const DOCTOR_EMAIL = 'student29gopal@gmail.com';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send booking email
export const sendBookingEmail = async (bookingData: {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}) => {
  const templateParams = {
    to_email: DOCTOR_EMAIL,
    from_name: bookingData.name,
    name: bookingData.name,
    phone: bookingData.phone,
    service: bookingData.service,
    date: bookingData.date,
    time: bookingData.time,
  };

  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID_BOOKING,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};

// Send contact email
export const sendContactEmail = async (contactData: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) => {
  const templateParams = {
    to_email: DOCTOR_EMAIL,
    from_name: contactData.name,
    name: contactData.name,
    phone: contactData.phone,
    email: contactData.email,
    message: contactData.message,
  };

  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID_CONTACT,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};
