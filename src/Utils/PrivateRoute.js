import React from 'react';
import { AuthContext } from '../Context/UserContext';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {

  const { isAuthenticated } = React.useContext(AuthContext);

  if(!isAuthenticated && !window.localStorage.getItem('BearerToken')) return <Redirect to="401" />;

  return <Route {...props} />;
};

export default ProtectedRoute;
