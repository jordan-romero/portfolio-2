'use client';

import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiSummaryModal } from "../AISummaryModal/AISummaryModal";
import { Projects } from "../Projects/Projects"


type JobExperienceProps = {
  company: string;
  role: string;
  duration: string;
  highLevelDescription: string;
  detailedDescription: string;
  responsibilities: string[];
  projects: {
    name: string;
    description: string;
    loomUrl?: string;
    image?: string;
  }[];
};

export const JobExperience = ({
  company,
  role,
  duration,
  highLevelDescription,
  detailedDescription,
  responsibilities,
  projects,
}: JobExperienceProps) => {
  // State to control the AI Summary Modal visibility
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Handlers for modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box sx={{ marginBottom: 3 }}>
      {/* Top-Level Summary */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box width="100%">
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" fontWeight="bold">
              {company}
            </Typography>
            <Button
              onClick={handleOpenModal}
              startIcon={"✨"}
              sx={(theme) => ({
                color: theme.palette.secondary.contrastText, // Ensure text is visible
                backgroundColor: theme.palette.secondary.main, // Use secondary color for background
                fontWeight: "500",
                borderRadius: "8px",
                paddingX: 2,
                paddingY: 0.5,
                textTransform: "none",
                fontSize: "0.875rem",
                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark, // Darker shade for hover
                  color: theme.palette.secondary.contrastText, // Maintain text visibility
                },
                "&:focus": {
                  outline: `2px solid ${theme.palette.primary.main}`, // Focus outline using primary color
                },
              })}
            >
              Summary
          </Button>
          </Box>
          <Typography variant="subtitle1">{role}</Typography>
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            {duration}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }} gutterBottom>
            {highLevelDescription}
          </Typography>
        </Box>
      </Box>

      {/* Accordion for More Details */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            More Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            {/* Detailed Description */}
            <Typography variant="body2" gutterBottom>
              {detailedDescription}
            </Typography>

            {/* Responsibilities */}
            {responsibilities.length > 0 && (
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Responsibilities:
                </Typography>
                <ul>
                  {responsibilities.map((item, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            )}

            {/* Projects */}
            {projects.length > 0 && (
              <Projects projects={projects} />
            )}
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* AI Summary Modal */}
      <AiSummaryModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        job={{
          company,
          role,
          highLevelDescription,
          responsibilities,
        }}
      />
    </Box>
  );
};
