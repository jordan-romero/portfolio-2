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
  maxWidth: '1600px',
  margin: '0 auto',
  padding: theme.spacing(4),
  gap: theme.spacing(4),
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${
      theme.palette.mode === 'light'
        ? '/lightModeBackgroundImg.png'
        : '/darkModeBackgroundImg.png'
    })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
    pointerEvents: 'none',
  },

  '& > *': {
    position: 'relative',
    zIndex: 2,
  },

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

// Box for Animated Header
export const HeaderContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  zIndex: 2,
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(2),
    alignItems: 'center',
  },

  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(20),
  },
}));

// Box for HeadShot
export const HeadShotContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  zIndex: 2,

  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(2),
  },
}));
