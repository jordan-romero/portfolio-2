'use client';
import React from 'react';
import Image from 'next/image';
import { HeadShotContainer, DownloadButton } from './headshot.styled';
import DownloadIcon from '@mui/icons-material/Download';
import Link from 'next/link';

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
      <Link
        href='https://docs.google.com/document/d/1_aRGytxp0SVRVtSgKkfmUgbmXqN348sa3trcvu1cxE8/edit?usp=sharing'
        passHref
        target='_blank'
      >
        <DownloadButton
          variant='contained'
          startIcon={<DownloadIcon />}
          rel='noopener noreferrer'
        >
          Download CV
        </DownloadButton>
      </Link>
    </HeadShotContainer>
  );
};
