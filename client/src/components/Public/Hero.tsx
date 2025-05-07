import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const Hero: React.FC = () => (
  <Box
    sx={{
      py: 12,
      textAlign: 'center',
      background: 'rgba(0,0,0,0.4)',
      backdropFilter: 'blur(4px)',
      borderRadius: 4,
      animation: 'fadeIn 1s ease-out',
    }}
  >
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
        Welcome to My Blog
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Discover articles, stories, and insights from around the world.
      </Typography>
      <Button variant="contained" size="large">
        Get Started
      </Button>
    </Container>
  </Box>
);

export default Hero;