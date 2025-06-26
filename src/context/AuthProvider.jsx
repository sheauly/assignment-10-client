import React, { useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';

import { auth } from '../component/firebase/firebase.config';
import { AuthContext } from './AuthContext';
import axios from 'axios';
const api = axios.create({
    baseURL: 'https://your-server-url.com/api',
});

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (updatedData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData).then(() => {
            setUser({ ...user, ...updatedData });
        });
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                try {
                    const idToken = await currentUser.getIdToken(); 

                   
                    await api.post("/login", { idToken });

                    setUser(currentUser);
                } catch (error) {
                    console.error("Login token exchange error:", error);
                }
            } else {
                setUser(null);

            }
            // console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) {
          setLoading(false)
      }
    }, [user])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        googleSignIn,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
