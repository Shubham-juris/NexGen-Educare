import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Courses from "./Components/Courses/WebTech/Courses";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/Contact-Us/Contact";
import Login from "./Components/Login&Signup/Login";
import AboutUs from "./Components/About-Us/About";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/Hero/HeroSection";
import StudentDeshboard from "./Components/Student/StudentDeshboard/StudentDeshboard";
import RegistrationForm from "./assets/RegistrationForm/RegistrationForm";
// import Rfrom from './assets/RegistrationForm/rfrom';
import Adminlogin from "./Components/Login&Signup/Adminlogin";
import Sidebar from "./Components/Admin/Deshboard/Sidebar";

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
          path="/"
          element={
            <>
              <HeroSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/Courses"
          element={
            <>
              <Courses />
              <Footer />
            </>
          }
        />
        <Route
          path="/contactus"
          element={
            <>
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login onLogin={() => setIsLoggedIn(true)} />{" "}
            </>
          }
        />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route
          path="/aboutUs"
          element={
            <>
              <AboutUs />
              <Footer />
            </>
          }
        />

        {/* Protected Route for Student Dashboard */}
        <Route
          path="/Sdashboard"
          element={
            isLoggedIn ? <StudentDeshboard /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/Sidebar" element={<Sidebar />} />
      </Routes>

      {/* <RegistrationForm /> */}
      {/* <Rfrom/> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
