import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase Item/Add Firebase ADK';

export const ThemeContext = createContext(null);

const ContextAPI = ({ children }) => {
  const [Users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const CreatedUser = (Name, Email, Password, CheckBox) => {
    setLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      Name,
      Email,
      Password,
      CheckBox
    );
  };

  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SingOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, User => {
      console.log('Your account created successfully', Users);
      setUsers(User);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const person = {
    CreatedUser,
    SignIn,
    Users,
    SingOutUser,
    loading,
  };

  return (
    <ThemeContext.Provider value={person}>{children}</ThemeContext.Provider>
  );
};

export default ContextAPI;
