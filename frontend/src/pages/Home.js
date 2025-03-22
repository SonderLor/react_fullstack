import React from 'react';
import {Container, Typography, Box} from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box sx={{my: 4}}>
        <Typography variant="h3" gutterBottom>
          Welcome to Flora Blog System
        </Typography>
        <Typography variant="body1">
          Flora is a modern blog platform where you can share your thoughts, ideas, and experiences.
          Join our community and start writing today!
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
