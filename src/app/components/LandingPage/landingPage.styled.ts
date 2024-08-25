'use client';

import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const LandingPageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: theme.spacing(4),
  gap: theme.spacing(4),
  overflow: 'hidden', // To ensure the overlay doesn't extend beyond the container

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("/landingPageBgImg.png")', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
    pointerEvents: 'none', // Allows clicking through the overlay
  },

  '& > *': {
    position: 'relative',
    zIndex: 2, // Ensures content is above the overlay
  },

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
