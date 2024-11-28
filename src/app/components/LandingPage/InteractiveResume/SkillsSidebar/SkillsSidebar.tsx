'use client';

import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import Image from 'next/image'; 
import { ProgressBar, SkillsHeader, TechIcon } from "./skillsSidebar.styled";

type Skill = {
  name: string;
  level: number; // Level from 0 to 100
};

type SkillsSidebarProps = {
  skills: Skill[];
};

export const SkillsSidebar = ({ skills }: SkillsSidebarProps) => {
  return (
    <Box>
      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Top Skills
      </Typography>
      {skills.map((skill, idx) => (
        <Box key={idx} sx={{ marginBottom: 4 }}>
          <SkillsHeader>
            <Typography variant="body1">{skill.name}</Typography>
            <TechIcon
              src={`/images/${skill.name.toLowerCase().replace(/\s+/g, "_")}.png`}
              alt={skill.name}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = "/images/default.png";
              }}
            />
          </SkillsHeader>
          <ProgressBar
            variant="determinate"
            value={skill.level}
            aria-label={`${skill.name} proficiency is ${skill.level}%`}
            role="progressbar"
          />
        </Box>
      ))}
    </Box>
  );
};
