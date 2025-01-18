import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  CssBaseline,
  Alert,
} from '@mui/material';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Load form data from local storage on component mount
  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('signupFormData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  // Save form data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('signupFormData', JSON.stringify(formData));
  }, [formData]);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://6f21-49-156-76-189.ngrok-free.app/',
        formData,
        {
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
        }
      );
      setSuccessMessage('Signup successful! Data saved to database.');
      setErrorMessage('');
      setFormData({ fname: '', lname: '', email: '', password: '' });
      localStorage.removeItem('signupFormData');
    } catch (error) {
      console.error('Error signing up:', error.message);
      if (error.response) {
        console.error('Server Response:', error.response.data);
        setErrorMessage(`Signup failed: ${error.response.data.message || 'Please try again.'}`);
      } else if (error.request) {
        console.error('No Response from Server:', error.request);
        setErrorMessage('Signup failed: No response from server.');
      } else {
        console.error('Request Error:', error.message);
        setErrorMessage('Signup failed: Request could not be made.');
      }
      setSuccessMessage('');
    }
  };
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            name="fname"
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={formData.fname}
            onChange={handleChange}
          />
          <TextField
            name="lname"
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={formData.lname}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Save and Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
