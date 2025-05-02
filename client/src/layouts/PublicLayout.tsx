// client/src/layouts/PublicLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from '../components/Public/Header';
import Footer from '../components/Public/Footer';

const PublicLayout: React.FC = () => (
  // Flex column ile header-main-footer sıralaması, min yükseklik 100vh
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />

    {/*
      Ana içerik alanı.
      Container ile içeriği yatayda sınırlar (maxWidth="lg") ve ortalar.
      flexGrow: 1 ile dikeyde genişleyerek footer'ı aşağı iter.
      py: 4 ile üst/alt padding ekler.
    */}
    <Container
      component="main"
      maxWidth="lg" // İçeriğin maksimum genişliğini burada belirliyoruz (örneğin 'lg')
      sx={{
        flexGrow: 1, // Dikeyde mevcut alanı doldur
        py: 4,       // Üst ve alt padding (sayfa içeriği için)
      }}
    >
      {/* Sayfa bileşenleri (örn: HomePage) buraya render edilecek */}
      <Outlet />
    </Container>

    <Footer />
  </Box>
);

export default PublicLayout;