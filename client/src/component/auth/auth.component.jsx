import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthHome from './authHome/authHome.component';
import Login from './login/login.component';
import Signup from './signup/signup.component';


const Auth = ({ match }) => {
    return (
        <Switch>
            <Route exact path={`${match.path}/`} component={AuthHome} />
            <Route path={`${match.path}/login`} component={Login} />
            <Route path={`${match.path}/signup`} component={Signup} />
        </Switch>
    );
}

export default Auth;