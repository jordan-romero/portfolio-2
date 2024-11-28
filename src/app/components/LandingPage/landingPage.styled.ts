'use client';

import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

// Top-Level Container for the entire page
export const LandingPageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  overflow: 'hidden',
}));

// Hero Section with background image
export const HeroSectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: theme.spacing(4),
  minHeight: '90vh', 
  backgroundImage: `url(${
    theme.palette.mode === 'light'
      ? '/images/lightModeBackgroundImg.png'
      : '/images/darkModeBackgroundImg.png'
  })`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 1,

  '& > *': {
    position: 'relative',
    zIndex: 2,
  },

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-end',
    paddingRight: theme.spacing(2),
  },

  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(20),
  },
}));

export const HeadShotContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(2),
  },
}));

// Resume Section in a distinct Paper container
export const InteractiveResumeContainer = styled(Paper)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(4),
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[3],

  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(6),
  },
}));
