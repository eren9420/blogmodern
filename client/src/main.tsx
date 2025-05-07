import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { CustomThemeProvider } from './contexts/ThemeContext'; // bizim oluşturduğumuz
import { AuthProvider } from './contexts/AuthContext';
import './styles/global.css'

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Özel tema sağlayıcımız */}
    <CustomThemeProvider>
      {/* Material UI reset */}
      <CssBaseline />
      <BrowserRouter>
        <AuthProvider>
          {/* Full-width, overflowX önleme */}
          <div style={{ width: '100vw', minHeight: '100vh', overflowX: 'hidden' }}>
            <App />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </CustomThemeProvider>
  </React.StrictMode>
);