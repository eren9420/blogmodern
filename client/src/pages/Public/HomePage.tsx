// client/src/pages/Public/HomePage.tsx
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import api from '../../services/api';
import PostCard from '../../components/Public/PostCard';

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.get<Post[]>('/posts').then(res => setPosts(res.data));
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h3" gutterBottom>
        Blog Posts
      </Typography>
      {posts.map(post => (
        <PostCard
          key={post._id}
          id={post._id}
          title={post.title}
          author={post.author}
          snippet={post.content.slice(0, 100) + '...'}
        />
      ))}
    </Box>
  );
};

export default HomePage;
