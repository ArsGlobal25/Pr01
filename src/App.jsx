import React from 'react';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Hero />
      <Courses />
      <Testimonials />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;
