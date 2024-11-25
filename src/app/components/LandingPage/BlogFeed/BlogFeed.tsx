import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, Typography, Link, CircularProgress, CardMedia } from "@mui/material";

interface Blog {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  imageUrl?: string; // Optional image field
}

const BlogFeed: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/medium-blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      {blogs.map((blog) => (
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
            <Typography variant="h6" component="div">
              <Link href={blog.link} target="_blank" rel="noopener noreferrer">
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

export default BlogFeed;
