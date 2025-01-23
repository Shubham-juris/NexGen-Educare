import React, { useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Web from '../../assets/Courses/WebTech/WebTechnologies.png';
import Account from '../../assets/Courses/AccountsCourses/Accounts.png';
import Monograph from '../../assets/Courses/MonographCourses/Monograph.png';
import Language from '../../assets/Courses/LanguagesCourses/Language.png';
import Hospitalist from '../../assets/Courses/HospitalistCourses/Hospitalist.png';
import Competitive from '../../assets/Courses/CompetitiveCoaching/Competitive.png';
import Coaching from '../../assets/Courses/CoachingClasses/Coaching.png';
import Cooking from '../../assets/Courses/CookingClasses/Cooking.png';
import Background from '../../assets/Courses/Background.png';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import SignUpBanner from './Signin/Signin';

const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <Box>
      <Box>
        <Typography
          variant='h3'
          gutterBottom
          sx={{
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            color: red[500],
            backgroundImage: `url(${Background})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '20px',
            fontWeight: 'bold',
          }}
        >
          Courses
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent='center' alignItems='center'>
        {[
          {
            link: '/WebTechCoursesCards',
            image: Web,
            title: 'Web Tech Courses',
          },
          {
            link: '/AccountsCoursesCards',
            image: Account,
            title: 'Accounts Courses',
          },
          {
            link: '/MonographCoursesCards',
            image: Monograph,
            title: 'Comprehensive Courses',
          },
          {
            link: '/LanguagesCoursesCards',
            image: Language,
            title: 'Languages Courses',
          },
          {
            link: '/HospitalistCoursesCards',
            image: Hospitalist,
            title: 'Hospitalist Courses',
          },
          {
            link: '/CompetitiveCoachingCards',
            image: Competitive,
            title: 'Competitive Coaching',
          },
          {
            link: '/CoachingClassesCards',
            image: Coaching,
            title: 'Coaching Classes',
          },
          {
            link: '/CookingClassesCards',
            image: Cooking,
            title: 'Cooking Classes',
          },
        ].map((course, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2}
            key={index}
            data-aos='fade-up' // Add AOS animation type
            data-aos-delay={index * 100} // Add staggered delay
          >
            <Link to={course.link} style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  width: '280px',
                  height: 'auto',
                }}
              >
                <CardMedia
                  component='img'
                  alt={`Card ${index + 1}`}
                  height='200'
                  image={course.image}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant='h6' component='div'>
                    {course.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <SignUpBanner />
    </Box>
  );
};

export default Courses;
