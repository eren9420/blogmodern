// client/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CustomThemeProvider } from './contexts/ThemeContext'; // bizim oluşturduğumuz
import { AuthProvider } from './contexts/AuthContext';        // daha önce oluşturduğunuz
import './index.css';                                         // varsa global stiller

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Tema yönetimi + CssBaseline burada */}
      <CustomThemeProvider>
        {/* Kimlik doğrulama durumu (login/logout) burada */}
        <AuthProvider>
          <App />
        </AuthProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
