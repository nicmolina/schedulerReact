import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from './Context/UserContext';
import Paths from './Utils/Path';
import Login from './Pages/Login/Login';
import Unauthorizated from './Pages/Interceptors/Unauthorized';
import Logout from './Pages/Logout/Logout';
import PrivateRoute from './Utils/PrivateRoute';

function RouteWithSubRoutes(route) {

    return (
        <PrivateRoute
            path={route.path}
            key={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/401' component={Unauthorizated} />
            <Route exact path='/logout' component={Logout} />
            {Paths.map((route, i) => (
                <RouteWithSubRoutes exact key={i} {...route} />
            ))}
        </Switch>
    </BrowserRouter>
)

export default Routes;