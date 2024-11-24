'use client';

import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";

type JobExperienceProps = {
  company: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  projects: {
    name: string;
    description: string;
    loomUrl: string;
    image: string;
  }[];
};

export const JobExperience: React.FC<JobExperienceProps> = ({
  company,
  role,
  duration,
  description,
  responsibilities,
  projects,
}) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h6">{company}</Typography>
      <Typography variant="subtitle1">{role}</Typography>
      <Typography variant="subtitle2">{duration}</Typography>
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>

      {/* Responsibilities */}
      <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: 2 }}>
        Responsibilities:
      </Typography>
      <ul>
        {responsibilities?.map((item, idx) => (
          <li key={idx}>
            <Typography variant="body2">{item}</Typography>
          </li>
        ))}
      </ul>

      {/* Projects */}
      {projects?.length > 0 && (
        <>
          <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: 2 }}>
            Projects:
          </Typography>
          <Grid container spacing={2}>
            {projects?.map((project, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.name}
                  />
                  <CardContent>
                    <Typography variant="body1">{project.name}</Typography>
                    <Typography variant="body2">{project.description}</Typography>
                    {project.loomUrl && (
                      <Button
                        variant="contained"
                        color="primary"
                        href={project.loomUrl}
                        target="_blank"
                        sx={{ marginTop: 2 }}
                      >
                        View Loom
                      </Button>
    )}   
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};
