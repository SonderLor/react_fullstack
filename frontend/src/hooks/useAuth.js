import { useState, useEffect } from 'react';
import { register as registerApi, login as loginApi, logout as logoutApi, validateToken as validateTokenApi } from '../api/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = localStorage.getItem('accessToken');
      if (storedToken) {
        try {
          const userData = await validateTokenApi();
          setIsAuthenticated(true);
          setUser(userData);
        } catch (error) {
          console.error('Token validation failed:', error.message);
          logout();
        }
      }
    };

    checkToken();
  }, []);

  const register = async (userData) => {
    try {
      await registerApi(userData);
    } catch (error) {
      throw error;
    }
  };

  const login = async (userData) => {
    try {
      const response = await loginApi(userData);
      const user = {
        id: response.id,
        username: response.username,
        email: response.email,
        role: response.role,
      };
      setIsAuthenticated(true);
      setUser(user);
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    logoutApi();
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  };

  return { user, isAuthenticated, register, login, logout };
};
