// app/components/AnimatedHeader.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Typography, Box, useTheme } from '@mui/material';

export const AnimatedHeader: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const theme = useTheme();

  const staticText = 'Hi, my name is Jordan Romero';
  const dynamicText = 'Full Stack Engineer who is ';
  const dynamicWords = [
    'versatile',
    'thoughtful',
    'inclusive',
    'innovative',
    'collaborative',
  ];
  const finalWord = 'adaptable';

  useEffect(() => {
    const handleTyping = () => {
      const fullStaticText = `${staticText}. ${dynamicText}`;
      const current = loopNum % (dynamicWords.length + 1);
      const currentWord =
        current === dynamicWords.length ? finalWord : dynamicWords[current];

      if (!isDeleting && text === fullStaticText + currentWord) {
        if (current === dynamicWords.length) {
          return; // Stop at the final word
        }
        setIsDeleting(true);
        setTypingSpeed(100);
      } else if (isDeleting && text === fullStaticText) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }

      setText((prevText) => {
        if (isDeleting) {
          return prevText.substring(0, prevText.length - 1);
        } else if (prevText.length < fullStaticText.length) {
          return fullStaticText.substring(0, prevText.length + 1);
        } else {
          return (
            fullStaticText +
            currentWord.substring(
              0,
              prevText.length - fullStaticText.length + 1
            )
          );
        }
      });
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant='h2'
        component='h1'
        fontWeight='bold'
        color='primary.main'
        gutterBottom
      >
        {staticText}
      </Typography>
      <Box
        sx={{
          height: '3.5em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h4' component='p' color='text.primary'>
          {dynamicText}
          <span style={{ color: theme.palette.secondary.main }}>
            {text.slice(staticText.length + dynamicText.length + 1)}
          </span>
        </Typography>
        <Box
          sx={{
            width: '2px',
            height: '1em',
            bgcolor: 'secondary.main',
            ml: 1,
            animation: 'blink 0.7s infinite',
            '@keyframes blink': {
              '0%': { opacity: 0 },
              '50%': { opacity: 1 },
              '100%': { opacity: 0 },
            },
          }}
        />
      </Box>
    </Box>
  );
};
