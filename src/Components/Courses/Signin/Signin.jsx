import React from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

import boximage from '../../../assets/Courses/SignIn/Box.png';
import Ellipse from '../../../assets/Courses/SignIn/Ellipse.png';

const SignUpBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FF5A5A',
        borderRadius: '32px',
        padding: '30px 100px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {/* Left Side: Images */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <img
          src={boximage}
          alt="Laptop User"
          style={{
            width: '120px',
            height: '150px',
           
          }}
        />
        <img
          src={Ellipse}
          alt="Happy User"
          style={{
            marginLeft: '25px',
            width: '150px',
            height: '150px',
           
            
          }}
        />
      </Box>

      {/* Right Side: Text Section */}
      <Box sx={{ textAlign: 'left', maxWidth: '400px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
          Start for free
        </Typography>
        <Typography variant="body1" paragraph>
          If you've made it this far, you must be at least a little curious.
          Sign up and take the first step toward your goals.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: '#F90606',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#ffe5e5',
            },
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpBanner;
