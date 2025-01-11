import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarAndHero from './Components/Hero/NavbarAndHero';
import MainCards from './Components/Courses/MainCards';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Contact-Us/Contact';
// import AboutUs from './Components/AboutUs';

// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
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
    <>
     <NavbarAndHero/>
      <MainCards />
      <ContactUs/>
      <AccountsCoursesCards/>
      <WebTechCoursesCards/>
      <CoachingClassesCards/>
      <CompetitiveCoachingCards/>
      <CookingClassesCards/>
      <LanguagesCoursesCards/>
      <MonographCoursesCards/>
      <HospitalistCoursesCards/>
      <Footer/>
    </>
  );
}

export default App;
