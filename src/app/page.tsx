import React from 'react';
import { Box, Container } from '@mui/material';
import { LandingPage } from './components/LandingPage/LandingPage';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
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
      <Container maxWidth='xl'>
        <LandingPage />
        <SpeedInsights />
        <Analytics />
      </Container>
    </Box>
  );
};


export default Home;
