import { Box, LinearProgress } from '@mui/material';
import {styled } from '@mui/material/styles'

export const SkillsHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

export const TechIcon = styled("img")(({ theme }) => ({
  width: '24px',
  height: '24px',
  borderRadius: theme.spacing(4),
}));

export const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: '10px',
  borderRadius: theme.spacing(5),
  backgroundColor: "#e0e0e0",
    "& .MuiLinearProgress-bar": {
      backgroundImage: "linear-gradient(45deg, #ffb74d 0%, #a0f0d8 100%)",
    },
  }));
