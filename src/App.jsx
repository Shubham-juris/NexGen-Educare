import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Contact-Us/Contact';
import Login from './Components/Login&Signup/Login';
import Signup from './Components/Login&Signup/Signup';
import AboutUs from './Components/About-Us/About';
import WebTechCoursesCards from './Components/Courses/WebTech/WebTech';
import AccountsCoursesCards from './Components/Courses/AccountsCourses/AccountsCourses';
import CoachingClassesCards from './Components/Courses/CoachingClasses/CoachingClasses';
import CompetitiveCoachingCards from './Components/Courses/CompetitiveCoaching/CompetitiveCoaching';
import CookingClassesCards from './Components/Courses/CookingClasses/CookingClasses';
import LanguagesCoursesCards from './Components/Courses/LanguagesCourses/LanguagesCourses';
import MonographCoursesCards from './Components/Courses/MonographCourses/MonographCourses';
import HospitalistCoursesCards from './Components/Courses/HospitalistCourses/HospitalistCourses';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/HeroSection';
import Sidebar from './Components/Admin/Deshboard/Sidebar';
import StudentDeshboard from './Components/Student/StudentDeshboard/StudentDeshboard';

import StudentAttendanceView from './Components/Student/Attendance/Attendance';
import FeeDetails from './Components/Student/Fee/Fee';

function App() {
  // Track login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />

      {/* Conditionally render Sidebar based on login state */}
      {isLoggedIn && <Sidebar />}

      <Routes>
        {/* Define Routes for different paths */}
        <Route path='/' element={<><HeroSection /><Footer /></>} />
        <Route path='/Courses' element={<><Courses /><Footer /></>} />
        <Route path='/contactus' element={<><ContactUs /><Footer /></>} />
        <Route path='/login' element={<><Login onLogin={() => setIsLoggedIn(true)} /></>} />
        <Route path='/signup' element={<><Signup /></>} />
        <Route path='/aboutUs' element={<><AboutUs /><Footer /></>} />

        {/* Courses routes */}
        <Route path='/WebTechCoursesCards' element={<WebTechCoursesCards />} />
        <Route path='/AccountsCoursesCards' element={<AccountsCoursesCards />} />
        <Route path='/MonographCoursesCards' element={<MonographCoursesCards />} />
        <Route path='/LanguagesCoursesCards' element={<LanguagesCoursesCards />} />
        <Route path='/HospitalistCoursesCards' element={<HospitalistCoursesCards />} />
        <Route path='/CompetitiveCoachingCards' element={<CompetitiveCoachingCards />} />
        <Route path='/CoachingClassesCards' element={<CoachingClassesCards />} />
        <Route path='/CookingClassesCards' element={<CookingClassesCards />} />
        <Route path='/FeeDetails' element={<FeeDetails />} />
        <Route path='/StudentAttendanceView' element={<StudentAttendanceView />} />
      </Routes>
      {/* <StudentDeshboard/> */}
    </Router>
   );
}

export default App;
