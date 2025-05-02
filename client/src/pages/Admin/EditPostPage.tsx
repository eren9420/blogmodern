// client/src/pages/Admin/EditPostPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import api from '../../services/api';
import Postform from '../../components/Admin/Postform';

interface PostData {
  title: string;
  content: string;
  author: string;
}

const EditPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<PostData | null>(null);

  useEffect(() => {
    if (id) {
      api.get<PostData>(`/posts/${id}`).then(res => {
        setInitialData(res.data);
      });
    }
  }, [id]);

  const handleUpdate = async (data: PostData) => {
    if (id) {
      await api.put(`/posts/${id}`, data);
      navigate('/admin');
    }
  };

  if (!initialData) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Edit Post
      </Typography>
      <Postform initialData={initialData} onSubmit={handleUpdate} />
    </Box>
  );
};

export default EditPostPage;
