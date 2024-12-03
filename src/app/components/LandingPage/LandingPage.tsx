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
import { InteractiveResume } from './InteractiveResume/InteractiveResume';
import { ActivityFeed } from './ActivityFeed/ActivityFeed';
import { useFeatureFlag } from 'configcat-react';
import MainMenu from '../MainMenu/MainMenu';


export const LandingPage = () => {
  const { value: showMainMenuValue, loading: showMainMenuLoading  } = useFeatureFlag("showMainMenu", false);

  return (
    <LandingPageWrapper>
      {showMainMenuValue && <MainMenu />}
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
      <ActivityFeed />
    </LandingPageWrapper>
  );
};
