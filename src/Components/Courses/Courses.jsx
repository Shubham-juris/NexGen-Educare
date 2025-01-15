import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Web from '../../assets/Courses/WebTech/WebTechnologies.png';
import Account from '../../assets/Courses/AccountsCourses/Accounts.png';
import Monograph from '../../assets/Courses/MonographCourses/Monograph.png';
import Language from '../../assets/Courses/LanguagesCourses/Language.png';
import Hospitalist from '../../assets/Courses/HospitalistCourses/Hospitalist.png';
import Competitive from '../../assets/Courses/CompetitiveCoaching/Competitive.png';
import Coaching from '../../assets/Courses/CoachingClasses/Coaching.png';
import Cooking from '../../assets/Courses/CookingClasses/Cooking.png';
import Background from '../../assets/Courses/Background.png'; // Ensure this image path is correct
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import SignUpBanner from './Signin/Signin';

const Courses = () => {
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
            backgroundImage:` url(${Background})`,            
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat', 
            padding: '20px', 
            fontWeight: 'bold',
          }}
        >
          Courses
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        justifyContent='center' // Center the content on large screens
        alignItems='center' // Vertically align the content
      >
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Link to='/WebTechCoursesCards' style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { transform: 'scale(1.05)' },
                transition: 'transform 0.3s',
                width: '280px', // Fixed width
                height: 'auto', // You can set a fixed height if needed, or 'auto' for dynamic height based on content
              }}
            >
              <CardMedia
                component='img'
                alt='Card 1'
                height='200'
                image={Web}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant='h6' component='div'>
                  Web Technologies Courses
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Link to='/AccountsCoursesCards' style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { transform: 'scale(1.05)' },
                transition: 'transform 0.3s',
                width: '280px', // Fixed width
                height: 'auto', // Fixed height or 'auto' for dynamic content height
              }}
            >
              <CardMedia
                component='img'
                alt='Card 2'
                height='200'
                image={Account}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant='h6' component='div'>
                  Accounts Courses
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Link to='/MonographCoursesCards' style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { transform: 'scale(1.05)' },
                transition: 'transform 0.3s',
                width: '280px', // Fixed width
                height: 'auto',
              }}
            >
              <CardMedia
                component='img'
                alt='Card 3'
                height='200'
                image={Monograph}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant='h6' component='div'>
                  Monograph Courses
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Link to='/LanguagesCoursesCards' style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { transform: 'scale(1.05)' },
                transition: 'transform 0.3s',
                width: '280px',
                height: 'auto',
              }}
            >
              <CardMedia
                component='img'
                alt='Card 4'
                height='200'
                image={Language}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant='h6' component='div'>
                  Languages Courses
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* Card 5 */}
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Link to='/HospitalistCoursesCards' style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { transform: 'scale(1.05)' },
                transition: 'transform 0.3s',
                width: '280px',
                height: 'auto',
              }}
            >
              <CardMedia
                component='img'
                alt='Card 5'
                height='200'
                image={Hospitalist}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant='h6' component='div'>
                  Hospitalist Courses
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* Card 6 */}
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Link to='/CompetitiveCoachingCards' style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { transform: 'scale(1.05)' },
                transition: 'transform 0.3s',
                width: '280px',
                height: 'auto',
              }}
            >
              <CardMedia
                component='img'
                alt='Card 6'
                height='200'
                image={Competitive}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant='h6' component='div'>
                  Competitive Coaching
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* Card 7 */}
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Link to='/CoachingClassesCards' style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { transform: 'scale(1.05)' },
                transition: 'transform 0.3s',
                width: '280px',
                height: 'auto',
              }}
            >
              <CardMedia
                component='img'
                alt='Card 7'
                height='200'
                image={Coaching}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant='h6' component='div'>
                  Coaching Classes
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* Card 8 */}
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Link to='/CookingClassesCards' style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { transform: 'scale(1.05)' },
                transition: 'transform 0.3s',
                width: '280px',
                height: 'auto',
              }}
            >
              <CardMedia
                component='img'
                alt='Card 8'
                height='200'
                image={Cooking}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant='h6' component='div'>
                  Cooking Classes
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
      <SignUpBanner/>
    </Box>
  );
};

export default Courses;