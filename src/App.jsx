import React from 'react';
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
import HospitalistCoursesCards from './Components/Courses/HospitalistCourses/HospitalistCourses'
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/HeroSection';
import Sidebar from './Components/Admin/Deshboard/Sidebar';
import StudentAttendance from './Components/Admin/StudentAttandence/StudentAttandence';
import TeacherAttandence from './Components/Admin/TeacherAttandence/TeacherAttandence';
import Library from './Components/Admin/Library/Library';
import AddCourse from './Components/Admin/Add-Courses/AddCourse';
import NoticePage from './Components/Admin/Notification/Notice';
import CreateNotice from './Components/Admin/Create-notice/CreateNotice';
import CourseRoutine from './Components/Admin/CourseRoutine/CourseRoutine';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          {/* Define Routes for different paths */}
          <Route path='/' element={<HeroSection />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/aboutUs' element={<AboutUs />} />

          {/* Courses route */}
          <Route
            path='/WebTechCoursesCards'
            element={<WebTechCoursesCards />}
          />
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
          <Route
            path='/CookingClassesCards'
            element={<CookingClassesCards />}
          />
          <Route
            path='/MonographCoursesCards'
            element={<MonographCoursesCards />}
          />



          <Route path='/Sidebar' element={<Sidebar />} />
          <Route path='/StudentAttendanceTable' element={<StudentAttendance />} />
          <Route path='/TeacherAttandence' element={<TeacherAttandence />} />
          <Route path='/Library' element={<Library/>} />
          <Route path='/Addcourse' element={<AddCourse/>} />
          <Route path='/Notice' element={<NoticePage/>} />
          <Route path='/CreateNotice' element={<CreateNotice/>} />

          <Route path='/CourseRoutine' element={<CourseRoutine/>} />



        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
