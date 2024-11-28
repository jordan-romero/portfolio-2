import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import BlogFeed from '../BlogFeed/BlogFeed';
import RecentActivity from '../RecentActivities/RecentActivity';

export const ActivityFeed = () => {
  const theme = useTheme(); 

  return (
<<<<<<< Updated upstream
    <Box sx={{ mt: 4 }}>
      {/* Main Title */}
=======
    <Box sx={{ mt: 4, px: 2 }}> 
>>>>>>> Stashed changes
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 'bold',
          mb: 2,
<<<<<<< Updated upstream
          color: theme.palette.text.secondary, 
=======
          color: theme.palette.text.secondary,
          textAlign: 'center',
          wordWrap: 'break-word', 
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, 
>>>>>>> Stashed changes
        }}
      >
        From Repos to Reflections 🌈
      </Typography>

      {/* Content Sections */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
<<<<<<< Updated upstream
        justifyContent="space-between"
        gap={4}
        sx={{ px: 2 }}
      >
        {/* GitHub Recent Activity Section */}
        <Box sx={{ flex: 1 }}>
=======
        justifyContent="center"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        gap={4}
        sx={{ px: 2 }}
      >
        <Box
          sx={{
            flex: 1,
            maxWidth: '1200px',
            textAlign: 'center',
          }}
        >
>>>>>>> Stashed changes
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
<<<<<<< Updated upstream
              color: theme.palette.text.secondary, 
=======
              color: theme.palette.text.tertiary,
              fontSize: { xs: '1.25rem', md: '1.5rem' }, 
>>>>>>> Stashed changes
            }}
          >
            GitHub Adventures 🛠️
          </Typography>
          <RecentActivity />
        </Box>
<<<<<<< Updated upstream

        {/* Blog Feed Section */}
        <Box sx={{ flex: 1 }}>
=======
        <Box
          sx={{
            flex: 1,
            maxWidth: '1200px',
            textAlign: 'center',
          }}
        >
>>>>>>> Stashed changes
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
<<<<<<< Updated upstream
              color: theme.palette.text.secondary, 
=======
              color: theme.palette.text.tertiary,
              fontSize: { xs: '1.25rem', md: '1.5rem' }, 
>>>>>>> Stashed changes
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
