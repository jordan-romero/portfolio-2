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
      {/* Hero Section */}
      <HeroSectionContainer>
        <HeaderContainer>
          <AnimatedHeader />
        </HeaderContainer>
        <HeadShotContainer>
          <HeadShot />
        </HeadShotContainer>
      </HeroSectionContainer>

      Interactive Resume Section
      <InteractiveResumeContainer>
        <InteractiveResume />
      </InteractiveResumeContainer>
    </LandingPageWrapper>
  );
};
