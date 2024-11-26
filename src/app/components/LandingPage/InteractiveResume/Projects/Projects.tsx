'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ProjectCard } from './ProjectCard';

type Project = {
  name: string;
  description: string;
  image?: string;
  loomUrl?: string;
};

type ProjectsProps = {
  projects: Project[];
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  if (projects.length === 0) return null;

  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Projects:
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={6} key={idx}>
            <ProjectCard
              name={project.name}
              description={project.description}
              image={project.image || '/images/default.png'}
              loomUrl={project.loomUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
