import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Box, Card, CardContent, Typography, Link, CircularProgress, CardMedia, useTheme } from "@mui/material";
import { fetcher } from "../fetcher";

type Blog = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  imageUrl?: string; // Optional image field
}

export const BlogFeed = () => {
  const theme = useTheme();

  const { data: blogs, error, isLoading } = useSWR<Blog[]>("/api/medium-blogs", fetcher, {
    refreshInterval: 8640000, 
    revalidateOnFocus: true, 
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error loading blogs. Please try again later.</Typography>;
  }

  return (
    <Box>
      {blogs?.map((blog: Blog) => (
        <Card key={blog.link} sx={{ marginBottom: 2 }}>
          {blog.imageUrl && (
            <CardMedia
              component="img"
              height="140"
              image={blog.imageUrl}
              alt={blog.title}
            />
          )}
          <CardContent>
            <Typography variant="h6" component="div" color={theme.palette.text.primary}>
              <Link
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.text.secondary,
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {blog.title}
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Published on: {new Date(blog.pubDate).toLocaleDateString()}
            </Typography>
            <Typography variant="body1">{blog.contentSnippet}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
