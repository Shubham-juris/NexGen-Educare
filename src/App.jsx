import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/Hero';
import MainCards from './Components/Courses/MainCards';
import ContactUs from './Components/Contact-Us/Contact';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MainCards />
      <ContactUs />
    </>
  );
}

export default App;
