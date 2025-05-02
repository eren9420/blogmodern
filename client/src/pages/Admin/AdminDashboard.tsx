// client/src/pages/Admin/AdminDashboard.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import PostListAdmin from '../../components/Admin/PostListAdmin';

const AdminDashboard: React.FC = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h4" gutterBottom>
      Admin Dashboard
    </Typography>
    <PostListAdmin />
  </Box>
);

export default AdminDashboard;
