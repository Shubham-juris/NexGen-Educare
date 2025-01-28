import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Courses from './Components/Courses/WebTech/Courses';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Contact-Us/Contact';
import Login from './Components/Login&Signup/Login';
import AboutUs from './Components/About-Us/About';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/HeroSection';
import StudentDeshboard from './Components/Student/StudentDeshboard/StudentDeshboard';
import AdminLogin from './Components/Login&Signup/AdminLogin';
import Sidebar from './Components/Admin/Deshboard/Sidebar';
import Library from './Components/Admin/Library/Library';
import StudentData from './Components/Admin/Student-data/StudentData';
import TeacherData from './Components/Admin/Teacher-data/TeacherData';
import NoticePage from './Components/Admin/Notification/Notice';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const SidebarLayout = () => (
    <>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <Outlet />
      </div>
    </>
  );

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <HeroSection />
              <Footer />
            </>
          }
        />
        <Route
          path='/courses'
          element={
            <>
              <Navbar />
              <Courses />
              <Footer />
            </>
          }
        />
        <Route
          path='/contactus'
          element={
            <>
              <Navbar />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route
          path='/login'
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route
          path='/adminlogin'
          element={<AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />}
        />
        <Route
          path='/aboutus'
          element={
            <>
              <Navbar />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path='/adminlogin'
          element={
            isLoggedIn ? (
              <StudentDeshboard />
            ) : (
              <Navigate to='/adminlogin' replace />
            )
          }
        />
        <Route path='/sidebar/*' element={<SidebarLayout />}>
          <Route path='library' element={<Library />} />
          <Route path='studentdata' element={<StudentData />} />
          <Route path='teacherdata' element={<TeacherData />} />
          <Route path='notice' element={<NoticePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
