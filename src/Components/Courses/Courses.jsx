import React from 'react';
import Grid from '@mui/material/Grid2';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for routing

import webtech from '../../assets/Courses/WebTech/WebTechnologies.png';
import accounts from '../../assets/Courses/AccountsCourses/accounts.png';
import monograph from '../../assets/Courses/MonographCourses/Managements.png';
import languages from '../../assets/Courses/LanguagesCourses/Language.png';
import hospitalist from '../../assets/Courses/HospitalistCourses/Hospitalist.png';
import competitive from '../../assets/Courses/CompetitiveCoaching/Competitive.png';
import coaching from '../../assets/Courses/CoachingClasses/Coaching.png';
import cooking from '../../assets/Courses/CookingClasses/cooking.png';

const cardsData = [
  {
    id: 1,
    title: 'Web Technologies',
    image: webtech,
    path: '/WebTechCoursesCards',
  },
  {
    id: 2,
    title: 'Accounts Courses',
    image: accounts,
    path: '/AccountsCoursesCards',
  },
  {
    id: 3,
    title: 'Monograph Courses',
    image: monograph,
    path: '/MonographCoursesCards',
  },
  {
    id: 4,
    title: 'Languages Courses',
    image: languages,
    path: '/LanguagesCoursesCards',
  },
  {
    id: 5,
    title: 'Hospitalist Courses',
    image: hospitalist,
    path: '/HospitalistCoursesCards',
  },
  {
    id: 6,
    title: 'Competitive Coaching',
    image: competitive,
    path: '/CompetitiveCoachingCards',
  },
  {
    id: 7,
    title: 'Coaching Classes',
    image: coaching,
    path: '/CoachingClassesCards',
  },
  {
    id: 8,
    title: 'Cooking Classes',
    image: cooking,
    path: '/CookingClassesCards',
  },
];

const Courses = () => {
  return (
    <Grid container spacing={2} justifyContent='center'>
      {cardsData.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.id}>
          <Link to={card.path} style={{ textDecoration: 'none' }}>
            {/* Link wrapping each card */}
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 250,
                height: 'auto', // Allow height to adjust based on content
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                '&:hover': {
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <CardMedia
                component='img'
                alt={card.title}
                sx={{
                  height: 200, // Fixed height for image
                  objectFit: 'cover', // Ensures the image scales well
                }}
                image={card.image}
                title={card.title}
              />
              <CardContent sx={{ backgroundColor: '#f4f4f4', padding: '16px' }}>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: 'bold', color: '#333' }}
                >
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Courses;
