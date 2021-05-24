import React, { useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './component.styles.scss';

//importing custom components
import Auth from './auth/auth.component';
import App from './app/app.component.jsx';

//importing actions
import { updateUserInfo, updateTokens } from '../actions/actions';

const Component = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { userName } = useSelector(state => state.user);
    const { accessToken, refreshToken } = useSelector(state => state.token);

    useEffect(() => {
        //effect checks if user is logged in or had previously logged in
        //redirects to auth if no token found
        if (!(userName && accessToken && refreshToken)) {
            let user = JSON.parse(localStorage.getItem('user'));
            let tokens = JSON.parse(localStorage.getItem('token'));
            if (user && tokens) {
                dispatch(updateUserInfo(user));
                dispatch(updateTokens(tokens));
            }
            else {
                history.push('/auth');
            }
        }
    }, [userName, accessToken, refreshToken, dispatch, history]);

    return (
        <Switch>
            <Route exact path='/'>
                <Redirect to='/app/feed' />
            </Route>
            <Route path='/app' component={App} />
            <Route path='/auth' component={Auth} />
        </Switch>
    );
}

export default Component;