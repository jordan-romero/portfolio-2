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
import { AiSummaryModal } from "./AISummaryModal";

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
          <Box>
            <Typography variant="h6">{company}</Typography>
            <Typography variant="subtitle1">{role}</Typography>
            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
              {duration}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              {highLevelDescription}
            </Typography>
          </Box>

          <Button
            variant="contained"
            onClick={handleOpenModal}
            startIcon={"✨"}
            sx={{
              background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
              color: "white",
              fontWeight: "bold",
              borderRadius: "50px",
              paddingX: 3,
              paddingY: 1,
              textTransform: "none",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                background: "linear-gradient(90deg, #00f2fe 0%, #4facfe 100%)",
                boxShadow: "0 6px 14px rgba(0, 0, 0, 0.25)",
              },
              "&:focus": {
                outline: "2px solid #4facfe",
              },
            }}
          >
            AI Summary 
        </Button>
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
