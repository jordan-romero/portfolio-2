import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import BlogFeed from '../BlogFeed/BlogFeed';
import RecentActivity from '../RecentActivities/RecentActivity';

export const ActivityFeed = () => {
  const theme = useTheme(); 

  return (
    <Box sx={{ mt: 4 }}>
      {/* Main Title */}
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

      {/* Content Sections */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        gap={4}
        sx={{ px: 2 }}
      >
        {/* GitHub Recent Activity Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: theme.palette.text.secondary, 
            }}
          >
            GitHub Adventures 🛠️
          </Typography>
          <RecentActivity />
        </Box>

        {/* Blog Feed Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: theme.palette.text.secondary, 
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
