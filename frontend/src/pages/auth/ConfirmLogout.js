import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ConfirmLogout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleConfirm = () => {
    logout();
    navigate('/');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Are you sure you want to log out?
        </Typography>
        <Button variant="contained" color="primary" onClick={handleConfirm} sx={{ mr: 2 }}>
          Yes, Log Out
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </Container>
  );
};

export default ConfirmLogout;