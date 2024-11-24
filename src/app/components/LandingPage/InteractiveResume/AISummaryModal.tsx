'use client';

import React from "react";
import { Modal, Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import { useTheme } from "@mui/material/styles";

type AiSummaryModalProps = {
  open: boolean;
  handleClose: () => void;
  job: {
    company: string;
    role: string;
    highLevelDescription: string;
    responsibilities: string[];
  };
};


export const AiSummaryModal: React.FC<AiSummaryModalProps> = ({
  open,
  handleClose,
  job,
}) => {
  const theme = useTheme(); 
  const [loading, setLoading] = React.useState(false);
  const [summary, setSummary] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (open) {
      const fetchSummary = async () => {
        setLoading(true);
        setSummary(null);
      
        try {
          const response = await axios.post("/api/ai-summary", {
            messages: [
              { role: "system", content: "You are an AI assistant." },
              {
                role: "user",
                content: `Summarize the following job experience for Jordan Romero (she/her) in the third person. Create a concise, impactful narrative highlighting key contributions and achievements:
      
                Company: ${job.company}
                Role: ${job.role}
                Description: ${job.highLevelDescription}
                Responsibilities:
                ${job.responsibilities.map((item, idx) => `- ${item}`).join("\n")}
      
                Focus on how Jordan's(she/her) expertise in modern web development and architecture made a impact with a focus on collaboration and analytical thinking.`,
              },
            ],
          });
      
          const summaryContent = response.data.choices?.[0]?.message?.content;
          if (summaryContent) {
            setSummary(summaryContent);
          } else {
            setSummary("No summary available.");
          }
        } catch (error) {
          console.error("Error fetching AI summary:", error);
          setSummary("Failed to fetch summary. Please try again.");
        } finally {
          setLoading(false);
        }
      };
      

      fetchSummary();
    }
  }, [open, job]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: 600 },
          bgcolor: theme.palette.mode === "dark" ? "grey.900" : "background.paper",
          color: theme.palette.mode === "dark" ? "grey.100" : "text.primary",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          AI Summary
        </Typography>
        {loading ? (
          <Box sx={{ textAlign: "center" }}>
            <CircularProgress />
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              Generating summary...
            </Typography>
          </Box>
        ) : (
          <Typography variant="body1">
            {summary || "No summary available."}
          </Typography>
        )}
      </Box>
    </Modal>
  );
};
