import React, { useState, useEffect } from 'react';
import './app.styles.scss';

import Aside from './aside/aside.component';
import AppContainer from './appContainer/appContainer.component';

const App = () => {

    useEffect(() => {
        //making app a flex container
        let app = document.querySelector('.App');
        app.setAttribute('style', 'display:flex;flex-flow:row nowrap;align-items:stretch;');
    }, []);

    const [isAsideExpended, setIsAsideExpended] = useState(false);
    return (
        <>
            <Aside {...{ isAsideExpended }} />
            <AppContainer {...{ isAsideExpended, setIsAsideExpended }} />
        </>
    );
}

export default App;