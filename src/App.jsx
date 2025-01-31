import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Admin/Deshboard/Sidebar"; // Import Sidebar component
import Login from "./Components/Login&Signup/Login";
import StudentDeshboard from "./Components/Student/StudentDeshboard/StudentDeshboard";
import Adminlogin from "./Components/Login&Signup/Adminlogin";
import Library from "./Components/Admin/Library/Library";
import StudentData from "./Components/Admin/Student-data/StudentData";
import TeacherData from "./Components/Admin/Teacher-data/TeacherData";
import RegistrationForm from "./Components/Admin/Library/RegistrationForm/RegistrationForm";
import About from "./Components/About-Us/About";
import Courses from "./Components/Courses/WebTech/Courses";
import HeroSection from "./Components/Hero/HeroSection";
import ContactUs from './Components/Contact-Us/Contact'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><HeroSection/> <Footer /></>}/>
        <Route path="/Aboutus" element={<> <Navbar /><About/> <Footer /></>}/>
        <Route path="/Courses" element={<><Navbar/><Courses /> <Footer /></>}/>
        <Route path="/contactus" element={<><Navbar/><ContactUs  /> <Footer /></>}/>


        
        <Route
          path="/login"
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route path="/Adminlogin" element={<Adminlogin />} />

        {/* Protected Route for Student Dashboard */}
        <Route
          path="/Sdashboard"
          element={
            isLoggedIn ? <StudentDeshboard /> : <Navigate to="/login" replace />
          }
        />

        {/* Admin Sidebar with dynamic content */}
        <Route path="/Sidebar" element={<Sidebar />}>
          <Route path="StudentData" element={<StudentData />} />
          <Route path="TeacherData" element={<TeacherData />} />
          <Route path="Library" element={<Library />} />
          <Route path="RegistrationForm" element={<RegistrationForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
