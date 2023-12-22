import React, { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  children?: ReactNode;
  path?: string;
  element?: React.ReactElement;
  isAuthenticated: boolean;
}

const isUser = localStorage.getItem('authToken');



const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
  const authenticated = isUser ?? isAuthenticated;
  return authenticated ? (
    <Outlet/>
  ) : (
    <Navigate to="/admin"/>
  );
};

export default PrivateRoute;











