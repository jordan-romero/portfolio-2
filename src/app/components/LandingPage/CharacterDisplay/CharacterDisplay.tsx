'use client';
import React from 'react';
import Image from 'next/image';
import {
  CharacterDisplayContainer,
  StyledVideo,
} from './characterDisplay.styled';

type CharacterDisplayProps = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export const CharacterDisplay = ({
  type,
  src,
  alt = 'Character display',
  width = 200,
  height = 200,
}: CharacterDisplayProps) => {
  return (
    <CharacterDisplayContainer>
      {type === 'image' ? (
        <Image src={src} alt={alt} width={width} height={height} />
      ) : (
        <StyledVideo
          width={width}
          height={height}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </StyledVideo>
      )}
    </CharacterDisplayContainer>
  );
};
