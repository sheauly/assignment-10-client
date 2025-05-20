import React, { use } from 'react';

import { Navigate } from 'react-router';
import { AuthContext } from './AuthContext';

const PrivetRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    // console.log(user)

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-xl text-primary"></span>
        </div>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate to="/auth/login"></Navigate>
};

export default PrivetRoute;
