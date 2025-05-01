import React, { createContext, useState, useEffect, ReactNode } from 'react';
import api from '../services/api'; // Your API service

interface AuthContextType {
  token: string | null;
  user: { username: string; _id: string } | null; // Adjust user type as needed
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, userData: any) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('authToken'));
  const [user, setUser] = useState<any>(JSON.parse(localStorage.getItem('authUser') || 'null'));
  const [isLoading, setIsLoading] = useState<boolean>(true); // Check initial auth state

  useEffect(() => {
     // Optional: Verify token with backend on initial load if desired
     // For simplicity, we trust localStorage initially
      if (token) {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
          delete api.defaults.headers.common['Authorization'];
      }
      setIsLoading(false); // Finished checking initial state
  }, [token]);

  const login = (newToken: string, userData: any) => {
    localStorage.setItem('authToken', newToken);
    localStorage.setItem('authUser', JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
    api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    setToken(null);
    setUser(null);
    delete api.defaults.headers.common['Authorization'];
     // Optional: Redirect to home or login page via useNavigate() hook in component calling logout
  };

  const contextValue = {
    token,
    user,
    isAuthenticated: !!token, // Simple check based on token presence
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};