import React from 'react';
import Grid from '@mui/material/Grid2';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import webtech from '../../assets/Courses/WebTech/WebTechnologies.png';
import accounts from '../../assets/Courses/AccountsCourses/accounts.png';
import monograph from '../../assets/Courses/MonographCourses/Managements.png';
import languages from '../../assets/Courses/LanguagesCourses/Language.png';
import hospitalist from '../../assets/Courses/HospitalistCourses/Hospitalist.png';
import competitive from '../../assets/Courses/CompetitiveCoaching/Competitive.png';
import coaching from '../../assets/Courses/CoachingClasses/Coaching.png';
import cooking from '../../assets/Courses/CookingClasses/cooking.png';

const cardsData = [
  { id: 1, title: 'Web Technologies', image: webtech },
  { id: 2, title: 'Accounts Courses', image: accounts },
  { id: 3, title: 'Monograph Courses', image: monograph },
  { id: 4, title: 'Languages Courses', image: languages },
  { id: 5, title: 'Hospitalist Courses', image: hospitalist },
  { id: 6, title: 'Competitive Coaching', image: competitive },
  { id: 7, title: 'Coaching Classes', image: coaching },
  { id: 8, title: 'Cooking Classes', image: cooking },
];

const MainCards = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {cardsData.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.id}>
          <Card
            sx={{
              width: 250, 
              height: 270,
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
            }}
          >
            <CardMedia
              component="img"
              alt={card.title}
              sx={{
                height: 200,
              }}
              image={card.image}
              title={card.title}
            />
            <CardContent sx={{ backgroundColor: '#f4f4f4', height: 150 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#333' }}
              >
                {card.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainCards;
