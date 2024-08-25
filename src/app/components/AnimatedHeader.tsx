'use client';

import React, { useState, useEffect } from 'react';
import { Typography, Box, useTheme } from '@mui/material';

export const AnimatedHeader: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isComplete, setIsComplete] = useState(false);

  const theme = useTheme();

  const staticText = 'Hello. My name is';
  const name = 'Jordan Romero';
  const roleText = 'I am a';
  const role = '<Full Stack Developer />';
  const dynamicPrefix = 'I believe in';
  const dynamicWords = [
    'adaptability',
    'innovation',
    'transparency',
    'analytical thinking',
  ];
  const finalWord = 'collaboration';

  useEffect(() => {
    const handleTyping = () => {
      if (isComplete) return;

      if (loopNum === dynamicWords.length) {
        const fullText = `${dynamicPrefix} ${finalWord}`;
        if (text === fullText) {
          setIsComplete(true);
          return;
        }
        setText(fullText.substring(0, text.length + 1));
      } else {
        const current = loopNum % dynamicWords.length;
        const fullText = `${dynamicPrefix} ${dynamicWords[current]}`;

        if (!isDeleting && text === fullText) {
          setIsDeleting(true);
          setTypingSpeed(100);
        } else if (isDeleting && text === dynamicPrefix + ' ') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(150);
        }

        setText(
          isDeleting
            ? text.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)
        );
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, isComplete]);

  const renderDynamicText = () => {
    const parts = text.split(' ');
    const prefix = parts.slice(0, 3).join(' ');
    const dynamicWord = parts.slice(3).join(' ');

    return (
      <>
        {prefix}{' '}
        <span
          style={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}
        >
          {dynamicWord}
        </span>
      </>
    );
  };

  return (
    <Box sx={{ textAlign: 'left', width: '100%' }}>
      <Typography
        variant='h2'
        component='h1'
        sx={{
          mb: 2,
          color: theme.palette.text.secondary,
          fontWeight: 'normal',
        }}
      >
        {staticText}
      </Typography>
      <Typography
        variant='h1'
        component='p'
        sx={{
          fontWeight: 'bold',
          fontSize: '4rem',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 3,
        }}
      >
        {name}
      </Typography>
      <Typography
        variant='h3'
        component='p'
        color='text.primary'
        sx={{ mb: 3, fontWeight: 'normal' }}
      >
        {roleText} <span style={{ fontWeight: 'bold' }}>{role}</span>
      </Typography>
      <Box
        sx={{
          height: '3em',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant='h4'
          component='p'
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
          }}
        >
          {renderDynamicText()}
        </Typography>
        <Box
          sx={{
            width: '2px',
            height: '1em',
            bgcolor: theme.palette.secondary.main,
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
