'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Button, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const HeadShot: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '600px',
        height: '600px',
        marginLeft: '20px',
        marginBottom: '20px',
      }}
    >
      <Image
        src='/headshot.png'
        alt='Jordan Romero'
        layout='fill'
        objectFit='cover'
        priority
      />
      <Button
        variant='contained'
        startIcon={<DownloadIcon />}
        href='https://docs.google.com/document/d/1_aRGytxp0SVRVtSgKkfmUgbmXqN348sa3trcvu1cxE8/edit?usp=sharing'
        target='_blank'
        rel='noopener noreferrer'
        sx={{
          position: 'absolute',
          bottom: 70,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
          },
          fontWeight: 'bold',
          padding: '10px 20px',
          borderRadius: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        Download CV
      </Button>
    </Box>
  );
};

export default HeadShot;
