import React from 'react';
import { Box, Container } from '@mui/material';
import { LandingPage } from './components/LandingPage/LandingPage';

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth='lg'>
        <LandingPage />
      </Container>
    </Box>
  );
};

export default Home;
