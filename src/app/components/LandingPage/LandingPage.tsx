'use client';

import React from 'react';
import { AnimatedHeader } from './AnimatedHeader/AnimatedHeader';
import { HeadShot } from './Headshot/Headshot';
import {
  LandingPageWrapper,
  HeroSectionContainer,
  HeaderContainer,
  HeadShotContainer,
  InteractiveResumeContainer,
} from './landingPage.styled';
import {InteractiveResume} from './InteractiveResume/InteractiveResume';

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <HeroSectionContainer>
        <HeaderContainer>
          <AnimatedHeader />
        </HeaderContainer>
        <HeadShotContainer>
          <HeadShot />
        </HeadShotContainer>
      </HeroSectionContainer>
      <InteractiveResumeContainer>
        <InteractiveResume />
      </InteractiveResumeContainer>
    </LandingPageWrapper>
  );
};
