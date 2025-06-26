import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Loader from '../pages/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user, loading);
    const location = useLocation();

    if (loading) {
        return <Loader />;
    }

    if (user) {

        return children;
    }

    return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
