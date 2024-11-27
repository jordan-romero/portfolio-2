import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import BlogFeed from '../BlogFeed/BlogFeed';
import RecentActivity from '../RecentActivities/RecentActivity';

export const ActivityFeed = () => {
  const theme = useTheme(); 

  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          color: theme.palette.text.secondary, 
        }}
      >
        From Repos to Reflections 🌈
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        gap={4}
        sx={{ px: 2 }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: theme.palette.text.tertiary, 
            }}
          >
            GitHub Adventures 🛠️
          </Typography>
          <RecentActivity />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: theme.palette.text.tertiary, 
            }}
          >
            Blog Musings ✍️
          </Typography>
          <BlogFeed />
        </Box>
      </Box>
    </Box>
  );
};
