'use client';
import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

interface CharacterDisplayProps {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

const CharacterDisplay: React.FC<CharacterDisplayProps> = ({
  type,
  src,
  alt = 'Character display',
  width = 200,
  height = 200,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
      }}
    >
      {type === 'image' ? (
        <Image src={src} alt={alt} width={width} height={height} />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}
    </Box>
  );
};

export default CharacterDisplay;
