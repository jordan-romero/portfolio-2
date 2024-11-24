/* eslint-disable react/no-unescaped-entities */
'use client';

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import axios from "axios";
import Skills from "./Skills";
import { JobExperience } from "./JobExperience";
import { capitalizeFirstLetter } from "./utils";

type ResumeData = {
  name: string;
  title: string;
  skills: {
    topSkills: string[];
    frontend: string[];
    backend: string[];
    database: string[];
    other: string[];
  };
  experience: {
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
  }[];
};

export const InteractiveResume: React.FC = () => {
  const [resume, setResume] = React.useState<ResumeData | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ResumeData>("/resume.json");
        setResume(response.data);
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    };

    fetchData();
  }, []);

  if (!resume) return <Typography>Loading...</Typography>;

  const { topSkills, ...otherSkills } = resume.skills;

  // Filter out top skills from other categories
  const filteredSkills = Object.entries(otherSkills).reduce((acc, [category, skills]) => {
    acc[category] = skills.filter((skill) => !topSkills.includes(skill));
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        {resume.name}'s Interactive Resume
      </Typography>
      <Typography variant="h5" gutterBottom>
        {resume.title}
      </Typography>

      {/* Top Skills */}
      <Typography variant="h6" gutterBottom>
        Top Skills
      </Typography>
      <Skills skills={topSkills} />

      {/* Experience */}
      <Typography variant="h6" gutterBottom mt={4}>
        Experience
      </Typography>
      {resume.experience.map((job, idx) => (
        <JobExperience
          key={idx}
          company={job.company}
          role={job.role}
          duration={job.duration}
          description={job.description}
          responsibilities={job.responsibilities}
          projects={job.projects}
        />
      ))}
      {/* Full Skills List */}
      <Typography variant="h6" gutterBottom mt={4}>
        Full Skills List
      </Typography>
      <Grid container spacing={4}>
        {Object.entries(filteredSkills).map(([category, skills], idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} gutterBottom>
              {capitalizeFirstLetter(category)}:
            </Typography>
            <ul style={{ paddingLeft: 16, listStyleType: "disc" }}>
              {skills.map((skill, skillIdx) => (
                <li key={skillIdx}>
                  <Typography variant="body2">{skill}</Typography>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

