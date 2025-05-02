// client/src/layouts/PublicLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Public/Header';
import Footer from '../components/Public/Footer';

const PublicLayout: React.FC = () => (
  <>
    <Header />
    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default PublicLayout;
