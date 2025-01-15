import React, { useEffect } from 'react';
import { Box, Typography, Link } from '@mui/material';
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
              <Link href="tel:+919115177792" sx={{ textDecoration: 'none', color: 'inherit' }}>
                +91 91151 77792
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', mt:0.5, alignItems: 'center', gap: '1em', justifyContent: 'left' }}
            >
              <Email />
              <Link href="mailto:nexgeneducareacademy@gmail.com" sx={{ textDecoration: 'none', color: 'inherit' }}>
                nexgeneducareacademy@gmail.com
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', mt:0.5, alignItems: 'center', gap: '1em', justifyContent: 'left' }}
            >
              <LocationOn />
              SCO 4-5, Second Floor, New Sunny Enclave,<br /> Sector-125, Mohali, Punjab - 140301
            </Typography>
          </Grid>

          {/* Our Services Section */}
          <Grid item xs={12} sm={6} md={3} data-aos="fade-up">
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem', color: 'red' }}>
              Our Services
            </Typography>
            <Typography variant="body2">
              <Link href="#" sx={{ textDecoration: 'none', color: 'inherit' }}>
                Home
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" sx={{ textDecoration: 'none', color: 'inherit' }}>
                About Us
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" sx={{ textDecoration: 'none', color: 'inherit' }}>
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
              <Link href="#" sx={{ textDecoration: 'none', color: 'inherit' }}>
                Privacy Policy
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" sx={{ textDecoration: 'none', color: 'inherit' }}>
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
              <Link href="#" sx={{ color: 'inherit' }}>
                <Facebook />
              </Link>
              <Link href="#" sx={{ color: 'inherit' }}>
                <Instagram />
              </Link>
              <Link href="#" sx={{ color: 'inherit' }}>
                <Twitter />
              </Link>
              <Link href="#" sx={{ color: 'inherit' }}>
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
