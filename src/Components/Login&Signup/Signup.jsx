import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }

      const data = await response.json();
      toast.success(
        `Signup successful! Your Enrollment ID: ${data.enrollmentId}`
      );

      // Clear form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth='sm'
      sx={{
        marginTop: 4,
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#fff',
        textAlign: 'center',
      }}
      data-aos='fade-up'
    >
      <Typography variant='h4' gutterBottom>
        Signup
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label='Email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label='Phone Number'
          name='phone'
          type='tel'
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label='Password'
          name='password'
          type='password'
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </Button>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default Signup;
