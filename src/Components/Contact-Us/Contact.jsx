import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Card,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from '../../assets/Contact-Us/Contact.jpg';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <Typography variant='h4' align='center' gutterBottom>
        Contact Us
      </Typography>

      {/* Top Section: Cards */}
      <Grid
        container
        spacing={3}
        sx={{
          marginTop: 2,
          justifyContent: 'center',
          '@media (max-width: 600px)': {
            textAlign: 'center',
          },
        }}
      >
        {/* Card 1: Office */}
        <Grid item xs={12} md={4} data-aos='fade-up'>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              padding: 2,
              width: '360px',
              margin: '0 auto',
            }}
          >
            <LocationOnIcon
              fontSize='large'
              sx={{ color: 'primary.main', marginBottom: 1 }}
            />
            <Typography variant='h6' align='center' sx={{ marginTop: 1 }}>
              OUR MAIN OFFICE
            </Typography>
            <Typography align='center'>
              SCO 4-5, Second Floor, New Sunny <br />
              Enclave, Sector-125, Mohali, Kharar
            </Typography>
            <Typography align='center'>Punjab - 140301</Typography>
          </Card>
        </Grid>

        {/* Card 2: Phone */}
        <Grid item xs={12} md={4} data-aos='fade-up'>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              padding: 2,
              width: '360px',
              margin: '0 auto',
            }}
          >
            <PhoneIcon
              fontSize='large'
              sx={{ color: 'primary.main', marginBottom: 1 }}
            />
            <Typography variant='h6' align='center' sx={{ marginTop: 1 }}>
              PHONE NUMBER
            </Typography>
            <Typography align='center'>+91 91151 77792</Typography>
          </Card>
        </Grid>

        {/* Card 3: Email */}
        <Grid item xs={12} md={4} data-aos='fade-up'>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              padding: 2,
              width: '360px',
              margin: '0 auto',
            }}
          >
            <EmailIcon
              fontSize='large'
              sx={{ color: 'primary.main', marginBottom: 1 }}
            />
            <Typography variant='h6' align='center' sx={{ marginTop: 1 }}>
              EMAIL
            </Typography>
            <Typography align='center'>
              nexgeneducareacademy@gmail.com
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Bottom Section: Paragraph, Image, and Form */}
      <Grid
        container
        spacing={4}
        sx={{ marginTop: 4, justifyContent: 'center', gap: 6 }}
      >
        {/* Left Side: Paragraph and Circular Image */}
        <Grid item xs={12} md={6} data-aos='fade-right'>
          <Box>
            <Typography
              variant='h5'
              gutterBottom
              sx={{
                textAlign: 'left',
                paddingLeft: 2,
              }}
            >
              Contact info
            </Typography>
            <Typography
              gutterBottom
              sx={{
                textAlign: 'justify',
                padding: '0 16px',
                lineHeight: 1.8,
                marginBottom: 4, // Gap between paragraph and image
              }}
            >
              Nexgen Educare Academy serves as a beacon of quality education,{' '}
              <br />
              shaping future leaders and problem-solvers. Our academy caters{' '}
              <br />
              to students of all age groups, offering a wide range of programs{' '}
              <br />
              designed to meet the evolving demands of the modern world.
            </Typography>
            <Box sx={{ textAlign: 'center', marginTop: 4 }}>
              <img
                src={Contact}
                alt='Contact'
                style={{
                  borderRadius: '50%',
                  width: '240px',
                  height: '240px',
                  border: '3px solid #ccc',
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Contact Form */}
        <Grid item xs={12} md={6} data-aos='fade-left'>
          <Typography
            variant='h5'
            gutterBottom
            sx={{
              textAlign: 'center',
              marginBottom: 2,
            }}
          >
            Get in touch
          </Typography>
          <Box
            component='form'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '450px',
              margin: '0 auto',
            }}
            noValidate
            autoComplete='off'
          >
            <TextField label='Name' fullWidth />
            <TextField label='Email' type='email' fullWidth />
            <TextField
              label='Courses'
              select
              fullWidth
              SelectProps={{
                MenuProps: {
                  sx: {
                    '& .MuiPaper-root': {
                      maxHeight: 150,
                    },
                  },
                },
              }}
            >
              <MenuItem value='Course 1'>Web Technologies Courses</MenuItem>
              <MenuItem value='Course 2'>Accounts Courses</MenuItem>
              <MenuItem value='Course 3'>Monograph Courses</MenuItem>
              <MenuItem value='Course 4'>Languages Courses</MenuItem>
              <MenuItem value='Course 5'>Hospitalist Courses</MenuItem>
              <MenuItem value='Course 6'>Competitive Courses</MenuItem>
              <MenuItem value='Course 7'>Coaching Courses</MenuItem>
              <MenuItem value='Course 8'>Cooking Courses</MenuItem>
            </TextField>
            <TextField label='Message' multiline rows={4} fullWidth />
            <Button variant='contained' type='submit' fullWidth>
              SUBMIT
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
