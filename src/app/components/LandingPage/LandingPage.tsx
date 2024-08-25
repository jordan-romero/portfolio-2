'use client';

import React from 'react';
import { Box } from '@mui/material';
import { AnimatedHeader } from '../AnimatedHeader';
import HeadShot from '../Headshot';
import { LandingPageContainer } from './landingpage.styled';

export const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Box sx={{ flex: 1, maxWidth: '50%', position: 'relative', zIndex: 2 }}>
        <AnimatedHeader />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <HeadShot />
      </Box>
    </LandingPageContainer>
  );
};
