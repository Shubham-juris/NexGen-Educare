import React from 'react';
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

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
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
          justifyContent='space-between'
          sx={{
            '@media (max-width: 600px)': {
              justifyContent: 'center',
              textAlign: 'center',
            },
          }}
        >
          {/* Contact Us Section */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              '@media (max-width: 600px)': {
                textAlign: 'center',
              },
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                marginBottom: '20px',
                color: 'red', // Red heading color
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant='body2'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              <Phone /> +91 91151 77792
            </Typography>
            <Typography
              variant='body2'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              <Email /> nexgeneducareacademy@gmail.com
            </Typography>
            <Typography
              variant='body2'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              <LocationOn /> SCO 4-5, Second Floor, New Sunny <br />
              Enclave, Sector-125, Mohali, <br />
              Kharar Punjab - 140301
            </Typography>
          </Grid>

          {/* Our Services Section */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              '@media (max-width: 600px)': {
                textAlign: 'center',
              },
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                marginBottom: '20px',
                color: 'red', // Red heading color
              }}
            >
              Our Services
            </Typography>
            <Typography variant='body2'>
              <Link href='#' sx={{ textDecoration: 'none', color: 'inherit' }}>
                Home
              </Link>
            </Typography>
            <Typography variant='body2'>
              <Link href='#' sx={{ textDecoration: 'none', color: 'inherit' }}>
                About Us
              </Link>
            </Typography>
            <Typography variant='body2'>
              <Link href='#' sx={{ textDecoration: 'none', color: 'inherit' }}>
                Courses
              </Link>
            </Typography>
          </Grid>

          {/* Support Section */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              '@media (max-width: 600px)': {
                textAlign: 'center',
              },
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                marginBottom: '20px',
                color: 'red', // Red heading color
              }}
            >
              Support
            </Typography>
            <Typography variant='body2'>
              <Link href='#' sx={{ textDecoration: 'none', color: 'inherit' }}>
                Privacy Policy
              </Link>
            </Typography>
            <Typography variant='body2'>
              <Link href='#' sx={{ textDecoration: 'none', color: 'inherit' }}>
                Terms & Conditions
              </Link>
            </Typography>
          </Grid>

          {/* Follow Us Section */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              '@media (max-width: 600px)': {
                textAlign: 'center',
              },
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                marginBottom: '20px',
                color: 'red', // Red heading color
              }}
            >
              Follow Us
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              <Link href='#' sx={{ color: 'inherit' }}>
                <Facebook />
              </Link>
              <Link href='#' sx={{ color: 'inherit' }}>
                <Instagram />
              </Link>
              <Link href='#' sx={{ color: 'inherit' }}>
                <Twitter />
              </Link>
              <Link href='#' sx={{ color: 'inherit' }}>
                <LinkedIn />
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Text */}
        <Typography
          variant='body2'
          sx={{
            marginTop: '20px',
            color: '#666',
            textAlign: 'center',
          }}
        >
          All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
