import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero: React.FC = () => (
  <Box
    sx={{
      height: '60vh',
      backgroundImage: 'url(https://source.unsplash.com/random/1600x900?nature)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'common.white',
      textShadow: '0 2px 4px rgba(0,0,0,0.6)',
      mb: 4,
    }}
  >
    <Typography variant="h2" component="h1" gutterBottom>
      Welcome to My Blog
    </Typography>
    <Typography variant="h5" sx={{ mb: 2, maxWidth: '600px', textAlign: 'center' }}>
      Discover articles, stories, and insights from around the world.
    </Typography>
    <Button variant="contained" size="large" color="primary" sx={{ px: 4, py: 1.5 }}>
      Get Started
    </Button>
  </Box>
);

export default Hero;