'use client';

import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import Image from 'next/image'; 

type Skill = {
  name: string;
  level: number; // Level from 0 to 100
};

type SkillsSidebarProps = {
  skills: Skill[];
};

export const SkillsSidebar: React.FC<SkillsSidebarProps> = ({ skills }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Top Skills
      </Typography>
      {skills.map((skill, idx) => (
        <Box key={idx} sx={{ marginBottom: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 1 }}>
            <Typography variant="body1">{skill.name}</Typography>
            <Image
              src={`/images/${skill.name.toLowerCase().replace(/\s+/g, "_")}.png`}
              alt={skill.name}
              width={24}
              height={24}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = "/images/default.png";
              }}
            />
          </Box>
          <LinearProgress
            variant="determinate"
            value={skill.level}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#3f51b5",
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};
