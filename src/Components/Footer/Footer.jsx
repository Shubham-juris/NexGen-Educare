import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0',
        
        
        width: '100%',
        padding: '20px 0',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          sx={{
            '@media (max-width: 600px)': {
              justifyContent: 'center',
            },
          }}
        >
          {/* Contact Us Section */}
          <Grid item xs={12} sm={6} md={3} data-aos="fade-up">
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem', color: 'red' }}>
              Contact Us
            </Typography>
            <Typography
  variant="body2"
  sx={{ display: 'flex', alignItems: 'center', gap: '1em', justifyContent: 'left' }}
>
  <Phone />
  <Link
    to="tel:+919115177792"
    style={{ textDecoration: 'none', color: 'black' }} // Inline styling for black color and no text decoration
  >
    +91 9056729370
  </Link>
</Typography>
<Typography
  variant="body2"
  sx={{ display: 'flex', mt: 0.5, alignItems: 'center', gap: '1em', justifyContent: 'left' }}
>
  <Email />
  <Link
    to="mailto:nexgeneducareacademy@gmail.com"
    style={{ textDecoration: 'none', color: 'black' }} // Inline styling for black color and no text decoration
  >
    nexgeneducareacademy@gmail.com
  </Link>
</Typography>

<Typography
  variant="body2"
  sx={{ display: 'flex', mt: 0.5, alignItems: 'center', gap: '1em', justifyContent: 'left' }}
>
  <LocationOn />
  <Link
    to="https://www.google.com/maps/place/SCO+4-5,+New+Sunny+Enclave,+Sector+125,+Mohali,+Punjab+140301"
    target="_blank" // Opens in a new tab
    style={{ textDecoration: 'none', color: 'black' }} // Styling to remove underline and set color
  >
    SCO 4-5, Second Floor, New Sunny Enclave,
    <br />
    Sector-125, Mohali, Punjab - 140301
  </Link>
</Typography>

          </Grid>

          {/* Our Services Section */}
          <Grid item xs={12} sm={6} md={3} data-aos="fade-up">
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem', color: 'red' }}>
              Our Services
            </Typography>
            <Typography variant="body2">
    <Link
      to="/"
      style={{ textDecoration: 'none', color: 'black' }} // Style applied here
    >
      Home
    </Link>
  </Typography>
  <Typography variant="body2">
    <Link
      to="/AboutUs"
      style={{ textDecoration: 'none', color: 'black' }} // Style applied here
    >
      About Us
    </Link>
  </Typography>
  <Typography variant="body2">
    <Link
      to="/Courses"
      style={{ textDecoration: 'none', color: 'black' }} // Style applied here
    >
      Courses
    </Link>
  </Typography>
          </Grid>

          {/* Support Section */}
          <Grid item xs={12} sm={6} md={3} data-aos="fade-up">
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem', color: 'red' }}>
              Support
            </Typography>
            <Typography variant="body2">
  <Link
    to="#"
    style={{ textDecoration: 'none', color: 'black' }} // Style applied here
  >
    Privacy Policy
  </Link>
</Typography>
<Typography variant="body2">
  <Link
    to="#"
    style={{ textDecoration: 'none', color: 'black' }} // Style applied here
  >
    Terms & Conditions
  </Link>
</Typography>

          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={6} md={3} data-aos="fade-up">
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px', color: 'red' }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'left', gap: '10px' }}>
            <Link 
  to="https://www.facebook.com/" 
  style={{ color: '#1877F2' }} 
  target="_blank" 
  rel="noopener noreferrer" // Prevents potential security risks
>
  <Facebook />
</Link>
<Link 
  to="https://www.instagram.com/" 
  style={{ color: '#E4405F' }} 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Instagram />
</Link>
<Link 
  to="https://x.com/?lang=en&mx=2" 
  style={{ color: '#1DA1F2' }} 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Twitter />
</Link>
<Link 
  to="https://in.linkedin.com/" 
  style={{ color: '#0077B5' }} 
  target="_blank" 
  rel="noopener noreferrer"
>
  <LinkedIn />
</Link>

</Box>

          </Grid>
        </Grid>

        {/* Footer Text */}
        <Typography
          variant="body2"
          sx={{
            marginTop: '20px',
            color: '#666',
            textAlign: 'center',
          }}
          data-aos="fade-up"
        >
          All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
