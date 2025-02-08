import React, { useContext } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import '../App.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    login('dummy-token'); // Store a dummy token in localStorage
    navigate('/dashboard');
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div className="container">
      <h1>Energy Manager</h1>
      <GoogleOAuthProvider clientId="987408573929-h369na3duh70tbmgullh8ccbu6dptna7.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          redirect_uri="http://localhost:3000"
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;