/**PrivateRoute file
 * set private routes with authentication
 * @const ProtectedRoute
 * set routes that will not be able to access without login
 * @param props
 * receives components that will be enable, with path and routes that were set on the path file
 */

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
