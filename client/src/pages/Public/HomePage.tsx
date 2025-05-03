import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import api from '../../services/api';
import PostCard from '../../components/Public/PostCard';
import Hero from '../../components/Public/Hero';
import Loading from '../../components/Public/Loading';

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  imageUrl?: string;
  date?: string;
  tags?: string[];
}

const samplePosts: Post[] = [
  {
    _id: '1',
    title: 'Exploring the Mountains',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'John Doe',
    imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    date: 'July 15, 2025',
    tags: ['Travel', 'Adventure'],
  },

  {
    _id: '2',
    title: 'Exploring the Mountains',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'John Doe',
    imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    date: 'July 15, 2025',
    tags: ['Travel', 'Adventure'],
  },
  // ... diğer örnek gönderiler
];



const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<Post[]>('/posts')
      .then((res) => {
        if (res.data.length) setPosts(res.data);
        else setPosts(samplePosts);
      })
      .catch((err) => {
        console.error(err);
        setPosts(samplePosts);
        setError('Unable to load posts, showing sample content.');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Hero />
      <Container maxWidth="lg">
        {loading ? (
          <Loading text="Loading posts..." />
        ) : (
          <>
            {error && (
              <Typography variant="h6" color="error" align="center" sx={{ mt: 4, mb: 2 }}>
                {error}
              </Typography>
            )}
            <Grid container spacing={4}>
              {posts.map((post) => (
                <Grid item key={post._id} xs={12} sm={6} md={4}>
                  <PostCard
                    id={post._id}
                    title={post.title}
                    author={post.author}
                    snippet={post.content.slice(0, 150) + '...'}
                    imageUrl={post.imageUrl}
                    date={post.date}
                    tags={post.tags}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </div>
  );
};

export default HomePage;