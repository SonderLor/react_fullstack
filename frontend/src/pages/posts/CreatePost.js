import React, {useState} from 'react';
import {Container, Box, Typography, TextField, Button} from '@mui/material';
import {createPost} from '../../api/posts';
import {useNavigate} from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({title, content});
      navigate('/posts');
    } catch (error) {
      alert('Failed to create post: ' + error.message);
    }
  };

  return (
    <Container>
      <Box sx={{my: 4}}>
        <Typography variant="h4" gutterBottom>
          Create New Post
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{mb: 2}}
          />
          <TextField
            fullWidth
            label="Content"
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{mb: 2}}
          />
          <Button type="submit" variant="contained">
            Create Post
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreatePost;
