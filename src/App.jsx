import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components from react-router-dom v6
import NavbarAndHero from './Components/Hero/NavbarAndHero';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Contact-Us/Contact';
import AboutUs from './Components/About-Us/About';  // Uncomment when needed

// Uncomment and import other components as needed
import Login from './Components/Login&Signup/Login';
import Signup from './Components/Login&Signup/Signup';

import AccountsCoursesCards from './Components/Courses/AccountsCourses/AccountsCourses'
import WebTechCoursesCards from './Components/Courses/WebTech/WebTech'
import CoachingClassesCards from './Components/Courses/CoachingClasses/CoachingClasses'
import CompetitiveCoachingCards from './Components/Courses/CompetitiveCoaching/CompetitiveCoaching'
import CookingClassesCards from './Components/Courses/CookingClasses/CookingClasses'
import LanguagesCoursesCards from './Components/Courses/LanguagesCourses/LanguagesCourses'
import MonographCoursesCards from './Components/Courses/MonographCourses/MonographCourses'
import HospitalistCoursesCards from './Components/Courses/HospitalistCourses/HospitalistCourses'


function App() {
  return (
    <Router>
      <NavbarAndHero />
      <Routes>
        {/* Define Routes for different paths */}
        <Route path='/Courses' element={<Courses />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* Uncomment and add routes for other components */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />

      <AccountsCoursesCards/>
      <WebTechCoursesCards/>
      <CoachingClassesCards/>
      <CompetitiveCoachingCards/>
      <CookingClassesCards/>
      <LanguagesCoursesCards/>
      <MonographCoursesCards/>
      <HospitalistCoursesCards/>

    </Router>
  );
}

export default App;
