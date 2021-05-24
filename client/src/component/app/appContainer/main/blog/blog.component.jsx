import React, { useState, useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './blog.styles.scss';

//importing custom components
import Steps from './steps/steps.component';
import Editor from './editor/editor.component';
import Preview from './preview/preview.component';
import Publish from './publish/publish.component';
import Seo from './seo/seo.component';

const Blog = ({ match, history }) => {
    const [currentStage, setCurrentStage] = useState(0);
    const [blogInnerHtml, setBlogInnerHtml] = useState('');
    const [seo, setSeo] = useState([]);

    const goTo = useCallback((page) => {
        //history.push(`${match.url}/${page}`);
        setCurrentStage(prevState => prevState <= 2 ? prevState + 1 : 0);
    }, []);

    return (
        <Switch>
            <Route exact path={`${match.url}/`}>
                <Steps {...{ currentStage, setCurrentStage, goTo }} />
            </Route>
            <Route path={`${match.url}/editor`}>
                <Editor {...{ blogInnerHtml, setBlogInnerHtml }} />
            </Route>
            <Route path={`${match.url}/preview`}>
                <Preview {...{ blogInnerHtml }} />
            </Route>
            <Route path={`${match.url}/seo`}>
                <Seo {...{ seo, setSeo }} />
            </Route>
            <Route path={`${match.url}/publish`} component={Publish} />
            <Redirect to='/404' />
        </Switch>
    );
}

export default Blog;