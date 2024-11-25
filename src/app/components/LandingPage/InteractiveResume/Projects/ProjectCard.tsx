'use client';

import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
  loomUrl?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, image, loomUrl }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Project Image */}
      <CardMedia
        component="img"
        height="140"
        image={image || '/images/default.png'}
        alt={name}
        sx={{
          objectFit: 'cover',
          borderRadius: '8px 8px 0 0',
        }}
      />

      {/* Project Content */}
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', marginBottom: 1 }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      {/* Project Actions */}
      {loomUrl && (
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            href={loomUrl}
            target="_blank"
            sx={{ textTransform: 'none' }}
          >
            View Loom Video
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
