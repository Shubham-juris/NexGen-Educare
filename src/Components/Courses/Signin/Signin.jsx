import React from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import boxImage from '../../../assets/Courses/SignIn/Box.png';
import ellipseImage from '../../../assets/Courses/SignIn/Ellipse.png';

const SignUpBanner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#FF564F',
        borderRadius: '20px',
        padding: '40px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Images Section */}
        <Grid item xs={12} md={6} display="flex" justifyContent="space-around">
          <Box
            component="img"
            src={boxImage}
            alt="Box"
            sx={{
              ml:'25px',
              mr:'20px',
              width: '110px',
              height: '150px',
              objectFit: 'cover',
            }}
          />
          <Box
            component="img"
            src={ellipseImage}
            alt="Ellipse"
            sx={{
              width: '150px',
              height: '150px',
              ml:'20px',
              mr:'20px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            ml: {xs: 0, sm:0, md:'10rem'},
            width: '400px', 
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              marginBottom: '16px',
            }}
          >
            Start for free
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '24px' }}>
            If you've made it this far, you must be at least a little curious. Sign up and
            take the first step toward your goals.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#fff',
              color: '#FF564F',
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '50px',
              textTransform: 'none',
            }}
          >
            Sign up
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpBanner;
