// app/page.tsx

import React from 'react';
import { Box, Container } from '@mui/material';
import { AnimatedHeader } from './components/AnimatedHeader';
import CharacterDisplay from './components/CharacterDisplay';

const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth='lg'>
        <AnimatedHeader />
        <CharacterDisplay
          type='image'
          src='/sprite.png'
          alt='Pixel art character'
        />
        {/* Add more components or sections for your portfolio here */}
      </Container>
    </Box>
  );
};

export default Home;
