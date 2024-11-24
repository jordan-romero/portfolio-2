'use client';

import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSkillCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.background.paper};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledSkillImage = styled(CardMedia)`
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
`;

type SkillsProps = {
  skills: string[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Grid container spacing={2}>
      {skills && skills.map((skill, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <StyledSkillCard>
            <StyledSkillImage
              image={`/images/${skill.toLowerCase().replace(/\s+/g, "_")}.png`}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = "/images/default.png";
              }}
            />
            <CardContent>
              <Typography variant="body1">{skill}</Typography>
            </CardContent>
          </StyledSkillCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Skills;
