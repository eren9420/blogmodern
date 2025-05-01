import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Public/HomePage';
import PostDetailsPage from './pages/Public/PostDetailsPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/Admin/AdminDashboard';
import NewPostPage from './pages/Admin/NewPostPage';
import EditPostPage from './pages/Admin/EditPostPage';
import PublicLayout from './layouts/PublicLayout'; // Create this layout
import AdminLayout from './components/Admin/AdminLayout'; // Create this layout
import { useAuth } from './hooks/useAuth';
import { CircularProgress, Box } from '@mui/material';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh"><CircularProgress /></Box>; // Show loading indicator
    }

    return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};


function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="posts/:slug" element={<PostDetailsPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
         <Route index element={<AdminDashboard />} />
         <Route path="posts/new" element={<NewPostPage />} />
         <Route path="posts/edit/:id" element={<EditPostPage />} />
         {/* Add other admin routes here */}
      </Route>

      {/* Optional: Redirect root admin path if needed */}
       <Route path="/admin" element={<Navigate to="/admin" replace />} />


       {/* Catch-all or 404 Not Found Route */}
       <Route path="*" element={<Navigate to="/" />} /> {/* Or a dedicated 404 component */}


    </Routes>
  );
}

export default App;