// client/src/components/Public/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      textAlign: 'center',
      p: 2,
      mt: 4,
      borderTop: '1px solid rgba(0,0,0,0.12)',
    }}
  >
    <Typography variant="body2" color="textSecondary">
      © {new Date().getFullYear()} My Blog. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
