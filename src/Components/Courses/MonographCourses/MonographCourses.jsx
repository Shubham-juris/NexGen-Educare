import React from 'react';
import Grid from '@mui/material/Grid2';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const cardsData = [
  { id: 1, title: 'Web Technologies', image: 'https://via.placeholder.com/300' },
  { id: 2, title: 'Accounts Courses', image: 'https://via.placeholder.com/300' },
  { id: 3, title: 'Monograph Courses', image: 'https://via.placeholder.com/300' },
  { id: 4, title: 'Languages Courses', image: 'https://via.placeholder.com/300' },
  { id: 5, title: 'Hospitalist Courses', image: 'https://via.placeholder.com/300' },
  { id: 6, title: 'Competitive Coaching', image: 'https://via.placeholder.com/300' },
  { id: 7, title: 'Coaching Classes', image: 'https://via.placeholder.com/300' },
  { id: 8, title: 'Cooking Classes', image: 'https://via.placeholder.com/300' },
];

const MonographCoursesCards = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {cardsData.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.id}>
          <Card
            sx={{
              width: 250,
              height: 320,
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
            }}
          >
            <CardMedia
              component="img"
              alt={card.title}
              sx={{ height: 200 }}
              image={card.image}
              title={card.title}
            />
            <CardContent sx={{ backgroundColor: '#f4f4f4' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                {card.title}
              </Typography>
              <Grid container spacing={1} justifyContent="center" sx={{ marginTop: 2 }}>
                <Grid item>
                  <Button variant="contained" size="small" color="primary">
                    Details
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" size="small" color="secondary">
                    Enroll
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MonographCoursesCards;
