import React, { use } from 'react';

import { Navigate } from 'react-router';
import { AuthContext } from './AuthContext';
import Loader from '../pages/Loader';

const PrivetRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    // console.log(user)

    if (loading) {
        return <div>
            <Loader></Loader>
        </div>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate to="/auth/login"></Navigate>
};

export default PrivetRoute;
