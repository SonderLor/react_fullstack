import React, {useState, useEffect} from 'react';
import {Container, Box, Typography, TextField, Button} from '@mui/material';
import {useParams, useNavigate} from 'react-router-dom';
import {getPostById, updatePost} from '../../api/posts';

const EditPost = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getPostById(id);
        setTitle(post.title);
        setContent(post.content);
      } catch (error) {
        alert('Failed to fetch post: ' + error.message);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(id, {title, content});
      navigate('/posts');
    } catch (error) {
      alert('Failed to update post: ' + error.message);
    }
  };

  return (
    <Container>
      <Box sx={{my: 4}}>
        <Typography variant="h4" gutterBottom>
          Edit Post
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
            Update Post
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditPost;
