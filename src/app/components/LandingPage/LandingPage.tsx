'use client';

import React from 'react';
import { AnimatedHeader } from './AnimatedHeader/AnimatedHeader';
import { HeadShot } from './Headshot/Headshot';
import {
  LandingPageContainer,
  HeaderContainer,
  HeadShotContainer,
} from './landingPage.styled';

export const LandingPage = () => {
  return (
    <LandingPageContainer>
      <HeaderContainer>
        <AnimatedHeader />
      </HeaderContainer>
      <HeadShotContainer>
        <HeadShot />
      </HeadShotContainer>
    </LandingPageContainer>
  );
};
