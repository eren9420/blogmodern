// client/src/pages/Admin/NewPostPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import api from '../../services/api';
import Postform from '../../components/Admin/Postform';

const NewPostPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCreate = async (data: {
    title: string;
    content: string;
    author: string;
  }) => {
    await api.post('/posts', data);
    navigate('/admin');
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Create New Post
      </Typography>
      <Postform onSubmit={handleCreate} />
    </Box>
  );
};

export default NewPostPage;
