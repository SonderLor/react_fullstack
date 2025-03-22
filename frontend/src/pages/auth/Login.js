import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(loginData);
      navigate('/posts');
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleLoginChange}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
