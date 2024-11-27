'use client';
import React from 'react';
import Image from 'next/image';
import { HeadShotContainer, DownloadButton } from './headshot.styled';
import DownloadIcon from '@mui/icons-material/Download';
import Link from 'next/link';

export const HeadShot = () => {
  return (
    <HeadShotContainer>
      <Image
        src='/images/headshot.png'
        alt='Jordan Romero'
        width={1}
        height={1}
        layout='responsive'
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
