import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load user data from localStorage
        const storedUser = localStorage.getItem('user');
        // console.log('Stored user:', storedUser); // Debug log
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        console.log("successfully log in");

    };

    const logout = async () => {
        try {
      // Send the logout request to the API, ensuring cookies are included
      const baseURL = import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, '');
      await axios.post(`${baseURL}/api/auth/logout`, {}, { withCredentials: true });
    
          // Clear user data from local storage and state
          setIsAuthenticated(false);
          setUser(null);
          localStorage.removeItem('user');
      
          console.log("successfully log out");
          
        } catch (error) {
          console.error('Logout failed:', error);
          // Handle any errors that occur during logout
        }
      };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
