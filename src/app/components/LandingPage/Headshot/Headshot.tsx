'use client';
import React from 'react';
import Image from 'next/image';
import { HeadShotContainer, DownloadButton } from './headshot.styled';
import DownloadIcon from '@mui/icons-material/Download';

export const HeadShot: React.FC = () => {
  return (
    <HeadShotContainer>
      <Image
        src='/headshot.png'
        alt='Jordan Romero'
        layout='fill'
        objectFit='cover'
        priority
      />
      <DownloadButton
        component={'a' as React.ElementType}
        href='https://docs.google.com/document/d/1_aRGytxp0SVRVtSgKkfmUgbmXqN348sa3trcvu1cxE8/edit?usp=sharing'
        target='_blank'
        rel='noopener noreferrer'
        variant='contained'
        startIcon={<DownloadIcon />}
      >
        Download CV
      </DownloadButton>
    </HeadShotContainer>
  );
};
