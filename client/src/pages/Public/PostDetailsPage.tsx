// client/src/pages/Public/PostDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import api from '../../services/api';

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

const PostDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      api.get<Post>(`/posts/${id}`).then(res => setPost(res.data));
    }
  }, [id]);

  if (!post) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h3">{post.title}</Typography>
      <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 2 }}>
        by {post.author} on {new Date(post.createdAt).toLocaleDateString()}
      </Typography>
      <Typography variant="body1">{post.content}</Typography>
    </Box>
  );
};

export default PostDetailsPage;
