'use client';

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import axios from "axios";
import { JobExperience } from "./JobExperience";
import { SkillsSidebar } from "./SkillsSidebar";
import { CallingCard } from "./CallingCard";

type ResumeData = {
  name: string;
  title: string;
  skills: {
    topSkills: { name: string; level: number }[];
    frontend: string[];
    backend: string[];
    database: string[];
    other: string[];
  };
  experience: {
    company: string;
    role: string;
    duration: string;
    highLevelDescription: string;
    detailedDescription: string;
    responsibilities: string[];
    projects: {
      name: string;
      description: string;
      loomUrl: string;
      image: string;
    }[];
  }[];
};

export const InteractiveResume: React.FC = () => {
  const [resume, setResume] = React.useState<ResumeData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ResumeData>("/resume.json");
        setResume(response.data);
      } catch (err) {
        console.error("Error fetching resume data:", err);
        setError("Failed to load resume data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  const { topSkills, ...otherSkills } = resume!.skills;

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column: CallingCard and Experience */}
        <Grid item xs={12} md={8}>
          {/* Calling Card */}
          <Box sx={{ marginBottom: 4 }}>
            <CallingCard />
          </Box>

          {/* Experience Section */}
          <Typography variant="h5" fontWeight='bold' gutterBottom>
            Experience
          </Typography>
          {resume!.experience.map((job, idx) => (
            <JobExperience
              key={idx}
              company={job.company}
              role={job.role}
              duration={job.duration}
              highLevelDescription={job.highLevelDescription}
              detailedDescription={job.detailedDescription}
              responsibilities={job.responsibilities}
              projects={job.projects}
            />
          ))}
        </Grid>

        {/* Right Column: Skills Sidebar */}
        <Grid item xs={12} md={4}>
          <SkillsSidebar skills={topSkills} />
        </Grid>
      </Grid>
    </Box>
  );
};
