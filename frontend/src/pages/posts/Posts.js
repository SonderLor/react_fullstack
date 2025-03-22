import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAllPosts, deletePost } from '../../api/posts';
import { useAuth } from '../../hooks/useAuth';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAllPosts();
        setPosts(posts);
      } catch (error) {
        alert('Failed to fetch posts: ' + error.message);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      alert('Failed to delete post: ' + error.message);
    }
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Posts
        </Typography>
        {user && (
          <Button component={Link} to="/create-post" variant="contained" sx={{ mb: 2 }}>
            Create New Post
          </Button>
        )}
        <List>
          {posts.map((post) => (
            <ListItem key={post.id}>
              <ListItemText primary={post.title} secondary={post.content} />
              {user && (user.id === post.userId || user.role === "admin") && (
                <>
                  <Button component={Link} to={`/edit-post/${post.id}`} variant="outlined" sx={{ mr: 2 }}>
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(post.id)} variant="outlined" color="error">
                    Delete
                  </Button>
                </>
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Posts;