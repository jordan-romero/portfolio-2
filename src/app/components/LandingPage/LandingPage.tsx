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
import RecentActivity from './RecentActivities/RecentActivity';
import BlogFeed from './BlogFeed/BlogFeed';
import { Box, Typography, Divider } from '@mui/material';
import { ActivityFeed } from './ActivityFeed/ActivityFeed';

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
      <ActivityFeed />
    </LandingPageWrapper>
  );
};
