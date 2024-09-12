import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const user = localStorage.getItem('user');
    if (user) {
        const userData = JSON.parse(user);
        // Check if the route is for admin and the user is an admin
        if (window.location.pathname.startsWith('/admin') && userData.role !== 'admin') {
            // Redirect non-admin users trying to access admin routes
            return <Navigate to='/' />;
        }
        // Render children if user is logged in and has appropriate role
        return <Outlet />;
    }
    // Redirect to login if no user is found in localStorage
    return <Navigate to='/login' />;
}

export default ProtectedRoutes
