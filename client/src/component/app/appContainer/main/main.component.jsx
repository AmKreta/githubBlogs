import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './main.styles.scss';

//importing custom components
import Blog from './blog/blog.component';
import Chat from './chat/chat.component';
import Feed from './feed/feed.component';
import Profile from './profile/profile.component';
import Search from './search/search.component';
import Setting from './setting/setting.component';

const Main = ({ match }) => {
    return (
        <main className='appMainContainer'>
            <Switch>
                <Route exact path={`${match.url}/`}>
                    <Redirect to={`${match.path}/feed`} />
                </Route>
                <Route path={`${match.url}/blog`} component={Blog} />
                <Route path={`${match.url}/chat`} component={Chat} />
                <Route path={`${match.url}/feed`} component={Feed} />
                <Route path={`${match.url}/profile`} component={Profile} />
                <Route path={`${match.url}/search`} component={Search} />
                <Route path={`${match.url}/setting`} component={Setting} />
            </Switch>
        </main>
    );
}

export default withRouter(Main);