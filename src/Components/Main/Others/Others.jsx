import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../Context/ContextAPI';
import { Navigate } from 'react-router-dom';

const Others = ({ children }) => {
  useEffect(() => {
    document.title = 'Web || Others Page';
  }, []);

  const { Users, loading } = useContext(ThemeContext);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (Users) {
    return children;
  }

  return <Navigate to="/"></Navigate>;
};

export default Others;
