import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAgreedToTerms } from '../../features/registrationSlice';
import { useAuth } from '../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
    const { register } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const agreedToTerms = useSelector((state) => state.registration.agreedToTerms);
  
    const handleRegisterChange = (e) => {
      setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };
  
    const handleAgreedToTermsChange = (e) => {
      dispatch(setAgreedToTerms(e.target.checked));
    };
  
    const handleRegisterSubmit = async (e) => {
      e.preventDefault();
      try {
        await register(registerData);
        alert('Registration successful!');
        navigate('/login');
      } catch (error) {
        alert('Registration failed: ' + error.message);
      }
    };
  
    return (
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Register
          </Typography>
          <Box component="form" onSubmit={handleRegisterSubmit}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={registerData.username}
              onChange={handleRegisterChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={registerData.email}
              onChange={handleRegisterChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={registerData.password}
              onChange={handleRegisterChange}
              sx={{ mb: 2 }}
            />
            <FormControlLabel
              control={<Checkbox checked={agreedToTerms} onChange={handleAgreedToTermsChange} />}
              label="I agree to the terms and conditions"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={!agreedToTerms}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default Register;
