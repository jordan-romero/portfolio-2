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

export const JobExperience: React.FC<JobExperienceProps> = ({
  company,
  role,
  duration,
  highLevelDescription,
  detailedDescription,
  responsibilities,
  projects,
}) => {
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
          <Box width='100%'>
            <Box display='flex' justifyContent='space-between' >
              <Typography variant="h6" fontWeight='bold'>{company}</Typography>
              <Button
                variant="outlined"
                onClick={handleOpenModal}
                startIcon={"✨"}
                sx={{
                  color: "#4facfe",
                  borderColor: "#4facfe",
                  fontWeight: "500",
                  borderRadius: "8px",
                  paddingX: 2,
                  paddingY: 0.5,
                  textTransform: "none",
                  fontSize: "0.875rem",
                  "&:hover": {
                    backgroundColor: "#4facfe10",
                    borderColor: "#00f2fe",
                  },
                  "&:focus": {
                    outline: "2px solid #4facfe",
                  },
                }}
              >
              AI Summary
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
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Projects:
                </Typography>
                {projects.map((project, idx) => (
                  <Box key={idx} sx={{ marginBottom: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      {project.name}
                    </Typography>
                    <Typography variant="body2">{project.description}</Typography>
                    {project.loomUrl && (
                      <Button
                        variant="text"
                        href={project.loomUrl}
                        target="_blank"
                        sx={{ marginTop: 1 }}
                      >
                        View Loom Video
                      </Button>
                    )}
                  </Box>
                ))}
              </Box>
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
