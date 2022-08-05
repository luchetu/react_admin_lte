import React from 'react';
import { Navigate } from 'react-router-dom';
const AuthenticatedRoute = ({ children }) => {
  const value = window.localStorage.getItem("user");

  if (value) {
    return children
  }
  console.log(value)
  return <Navigate to="/login" />;
  

};
export default AuthenticatedRoute;


