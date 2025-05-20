// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FaInstagram, FaTiktok, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>Have an idea? Let’s collaborate. Reach out to us anytime.</p>
      
      <div className="contact-info">
        <p>
          <FaPhoneAlt className="icon" /> 
          <a href="tel:+1234567890">+961 81 342 998</a>
        </p>

        <p>
          <FaInstagram className="icon" />
          <a href="https://www.instagram.com/blackboxproductions.lb?igsh=ZG91ejZrOXdmZnhh" target="_blank" rel="noopener noreferrer">
            blackboxproductions
          </a>
        </p>

        <p>
          <FaTiktok className="icon" />
          <a href="https://www.tiktok.com/@blackboxproductions.lb?_t=ZS-8wVq4IRszgX&_r=1" target="_blank" rel="noopener noreferrer">
            BlackBox - Productions
          </a>
        </p>

        <p>
          <FaMapMarkerAlt className="icon" />
          <a href="https://www.google.com/maps/place/Your+Location" target="_blank" rel="noopener noreferrer">
            Find us on Google Maps
          </a>
        </p>

        <p className="address">
          123 Creative Street, Design City, CA 90210
        </p>
      </div>
    </section>
  );
};

export default Contact;
