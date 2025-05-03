import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingProps {
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ text = 'Loading...' }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      py: 10,
    }}
  >
    <CircularProgress size={60} thickness={4} />
    <Typography variant="subtitle1" sx={{ mt: 2 }}>
      {text}
    </Typography>
  </Box>
);

export default Loading;