import React, { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import CommentIcon from "@mui/icons-material/Comment";
import Typography from "@mui/material/Typography";
import axios from "axios";

interface Activity {
  id: string;
  type: string;
  repo: string;
  created_at: string;
}

const CustomizedTimeline: React.FC = () => {
  const [activity, setActivity] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await axios.get("/api/recent-activity");
        setActivity(response.data);
      } catch (error) {
        console.error("Error fetching activity:", error);
      }
    };

    fetchActivity();
  }, []);

  const formatEventType = (type: string) => {
    return type
      .replace(/([A-Z])/g, " $1")
      .replace("Event", "")
      .trim();
  };

  const getIconForEventType = (type: string) => {
    const iconStyle = {
      color: "primary.dark", // Ensures the icons are dark
      fontSize: "1.5rem", // Adjust icon size
    };

    switch (type) {
      case "PushEvent":
        return <CodeIcon sx={iconStyle} />;
      case "PullRequestEvent":
        return <GitHubIcon sx={iconStyle} />;
      case "IssueCommentEvent":
        return <CommentIcon sx={iconStyle} />;
      default:
        return <GitHubIcon sx={iconStyle} />;
    }
  };

  // testin main vs prod

  return (
    <Timeline
      position="alternate"
      sx={{
        '& .MuiTimelineItem-root': {
          minHeight: '100px',
        },
        '& .MuiTimelineConnector-root': {
          background: "linear-gradient(to bottom, #c1cbff, #a0f0d8)", // Apply gradient to connectors
        },
      }}
    >
      {activity.map((event, index) => (
        <TimelineItem key={event.id}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align={index % 2 === 0 ? "right" : "left"}
            variant="body2"
            color="text.secondary"
          >
            {new Date(event.created_at).toLocaleDateString()}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{
                background: "linear-gradient(to bottom, #c1cbff, #a0f0d8)", // Gradient background for dot
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "2.5rem", // Adjust dot size
                height: "2.5rem",
              }}
            >
              {getIconForEventType(event.type)}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              py: "12px",
              px: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <Typography variant="h6" component="span">
              {formatEventType(event.type)}
            </Typography>
            <Typography>{event.repo}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default CustomizedTimeline;
