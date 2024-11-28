import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { LinkedIn, GitHub, Email, Phone } from "@mui/icons-material";
import React from "react";

export const CallingCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center", sm: "flex-start" },
        justifyContent: "space-between",
        padding: 4,
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {/* Left Side: Avatar and Text */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Avatar
          alt="Jordan Romero"
          src="/images/jordan.png"
          sx={{
            width: 120,
            height: 120,
            marginBottom: { xs: 2, sm: 0 },
            marginRight: { sm: 2 },
          }}
        />
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Jordan Romero
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Senior Full Stack Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: 1, maxWidth: 400, color: "text.secondary" }}
          >
            💻 Full-Stack Developer with 4 years of experience building scalable,
            maintainable web applications. Skilled in React, Node.js, and GraphQL,
            I thrive in fast-paced environments, creating impactful solutions that
            deliver real-world value.
          </Typography>
        </Box>
      </Box>

      {/* Right Side: Social Icons and Contact */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: 'column', md: "column" },
          alignItems: "center",
          marginTop: { xs: 3, sm: 0 },
        }}
      >
        {/* LinkedIn */}
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/jordan-t-romero/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "primary.main", marginBottom: 1 }}
          aria-label="LinkedIn"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        {/* GitHub */}
        <IconButton
          component="a"
          href="https://github.com/jordan-romero"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "text.primary", marginBottom: 1 }}
          aria-label="Github"
        >
          <GitHub fontSize="large" />
        </IconButton>
        {/* Email */}
        <IconButton
          component="a"
          href="mailto:jordan.t.romero@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "error.main", marginBottom: 1 }}
          aria-label="Email"
        >
          <Email fontSize="large" />
        </IconButton>
        {/* Phone */}
        <IconButton
          component="a"
          href="tel:5123480227"
          sx={{ color: "success.main" }}
          aria-label="Phone"
        >
          <Phone fontSize="large" />
        </IconButton>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", marginTop: 1 }}
        >
          512-348-0227
        </Typography>
      </Box>
    </Box>
  );
};
