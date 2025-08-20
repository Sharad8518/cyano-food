import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is already logged in on app start
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      apiService.setToken(token);
      checkAuthStatus();
    } else {
      setLoading(false);
    }
  }, []);

  // Check authentication status
  const checkAuthStatus = async () => {
    try {
      const response = await apiService.auth.getProfile();
      setUser(response.data.user);
      setError(null);
    } catch (error) {
      console.error('Auth check failed:', error);
      apiService.removeToken();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Sign up
  const signup = async (userData) => {
    try {
      setError(null);
      const response = await apiService.auth.signup(userData);
      
      if (response.success) {
        const { user, token } = response.data;
        apiService.setToken(token);
        setUser(user);
        return { success: true, user };
      }
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Sign in
  const signin = async (credentials) => {
    try {
      setError(null);
      const response = await apiService.auth.signin(credentials);
      
      if (response.success) {
        const { user, token } = response.data;
        apiService.setToken(token);
        setUser(user);
        return { success: true, user };
      }
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Sign out
  const signout = () => {
    apiService.removeToken();
    setUser(null);
    setError(null);
  };

  // Update profile
  const updateProfile = async (profileData) => {
    try {
      setError(null);
      const response = await apiService.auth.updateProfile(profileData);
      
      if (response.success) {
        setUser(response.data.user);
        return { success: true, user: response.data.user };
      }
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Change password
  const changePassword = async (passwordData) => {
    try {
      setError(null);
      const response = await apiService.auth.changePassword(passwordData);
      
      if (response.success) {
        return { success: true };
      }
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Check if user is admin
  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!user;
  };

  const value = {
    user,
    loading,
    error,
    signup,
    signin,
    signout,
    updateProfile,
    changePassword,
    isAdmin,
    isAuthenticated,
    checkAuthStatus,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
