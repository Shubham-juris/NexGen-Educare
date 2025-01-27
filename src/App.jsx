import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Courses from './Components/Courses/WebTech/Courses';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Contact-Us/Contact';
import Login from './Components/Login&Signup/Login';
import AboutUs from './Components/About-Us/About';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/HeroSection';
import StudentDeshboard from './Components/Student/StudentDeshboard/StudentDeshboard';
import RegistrationForm from './assets/RegistrationForm/RegistrationForm';
import RegistrationData from './assets/RegistrationForm/ViewFrom';
// // import Rfrom from './assets/RegistrationForm/rfrom';
import Adminlogin from './Components/Login&Signup/Adminlogin';
import Sidebar from './Components/Admin/Deshboard/Sidebar';
import WebTechCoursesCards from './Components/Courses/WebTech/WebDevelp';
import AccountsCoursesCards from './Components/Courses/AccountsCourses/AccountsCourses';
import MonographCoursesCards from './Components/Courses/MonographCourses/MonographCourses';
import LanguagesCoursesCards from './Components/Courses/LanguagesCourses/LanguagesCourses';
import HospitalistCoursesCards from './Components/Courses/HospitalistCourses/HospitalistCourses';
import CompetitiveCoachingCards from './Components/Courses/CompetitiveCoaching/CompetitiveCoaching';
import CoachingClassesCards from './Components/Courses/CoachingClasses/CoachingClasses';
import CookingClassesCards from './Components/Courses/CookingClasses/CookingClasses';

function App() {
  // Track login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {/* Conditionally render Navbar or Sidebar */}
      {isLoggedIn ? <StudentDeshboard /> : <Navbar />}

      <Routes>
        {/* Define Routes for different paths */}
        <Route
          path='/'
          element={
            <>
              <HeroSection />
              <Footer />
            </>
          }
        />
        <Route
          path='/Courses'
          element={
            <>
              <Courses />
              <Footer />
            </>
          }
        />
        <Route
          path='/contactus'
          element={
            <>
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route
          path='/login'
          element={
            <>
              <Login onLogin={() => setIsLoggedIn(true)} />{' '}
            </>
          }
        />
        <Route path='/Adminlogin' element={<Adminlogin />} />
        <Route
          path='/aboutUs'
          element={
            <>
              <AboutUs />
              <Footer />
            </>
          }
        />

        {/* Courses routes */}
        <Route path='/WebTechCoursesCards' element={<WebTechCoursesCards />} />
        <Route
          path='/AccountsCoursesCards'
          element={<AccountsCoursesCards />}
        />
        <Route
          path='/MonographCoursesCards'
          element={<MonographCoursesCards />}
        />
        <Route
          path='/LanguagesCoursesCards'
          element={<LanguagesCoursesCards />}
        />
        <Route
          path='/HospitalistCoursesCards'
          element={<HospitalistCoursesCards />}
        />
        <Route
          path='/CompetitiveCoachingCards'
          element={<CompetitiveCoachingCards />}
        />
        <Route
          path='/CoachingClassesCards'
          element={<CoachingClassesCards />}
        />
        <Route path='/CookingClassesCards' element={<CookingClassesCards />} />
        {/* <Route path='/FeeDetails' element={<FeeDetails />} />
        <Route path='/StudentAttendanceView' element={<StudentAttendanceView />} /> */}

        {/* Protected Route for Student Dashboard */}
        <Route
          path='/Sdashboard'
          element={
            isLoggedIn ? <StudentDeshboard /> : <Navigate to='/login' replace />
          }
        />
        <Route path='/Sidebar' element={<Sidebar />} />
      </Routes>

      <RegistrationForm />
      <RegistrationData/>
      {/* <Rfrom/> */}
      <Footer />
    </Router>
  );
}

export default App;
