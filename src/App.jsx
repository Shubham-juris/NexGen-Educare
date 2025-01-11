import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarAndHero from './Components/Hero/NavbarAndHero';
import MainCards from './Components/Courses/MainCards';
import Footer from './Components/Footer/Footer';
// import AboutUs from './Components/AboutUs';
// import ContactUs from './Components/ContactUs';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
      <NavbarAndHero />
      <Routes>
        <Route path='/' element={<MainCards />} />
        {/* <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />*/}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
