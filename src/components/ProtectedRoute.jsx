import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isAuthenticated, user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Or any other loading indicator
    }

    // console.log('Authenticated:', isAuthenticated, 'User:', user); // Debug log

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (allowedRoles && (!user || !allowedRoles.includes(user.userType))) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
