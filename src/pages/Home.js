import React from 'react';
import HeroSection from '../components/HeroSection';
import ScrollToTopButton from '../components/ScrollToTopButton';
import './Home.css';
import Contact from '../components/Contact';
function Home() {
  return (
    <div>
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about" className="scroll-section">
        <h2>About Us</h2>
        <p>BLACK BOX is a creative marketing agency focused on pushing boundaries and delivering results.</p>
      </section>

      <section id="services" className="scroll-section">
        <h2>Services</h2>
        <p>We offer branding, web design, content strategy, and digital marketing solutions.</p>
      </section>

      <section id="projects" className="scroll-section">
        <h2>Our Projects</h2>
        <p>Take a look at some of our recent work and success stories.</p>
      </section>

      <section id="contact" className="scroll-section">
        
        <Contact />
        
      </section>

      <ScrollToTopButton />
    </div>
  );
}

export default Home;
