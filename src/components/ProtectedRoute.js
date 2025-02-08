import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    // Redirect to the login page if the user is not logged in
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;