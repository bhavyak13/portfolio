import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xeek2sp', 'template_4eleqeq', form.current, 'a6PWejBFTSrMh82H_');
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail} ref={form}>
      <input type='text' name='name' placeholder='Your Name' required />
      <input type='email' name='email' placeholder='Your Email' required />
      <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
  )
}

export default ContactForm