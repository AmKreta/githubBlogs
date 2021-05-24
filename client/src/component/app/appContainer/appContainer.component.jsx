import React from 'react';
import './appContainer.styles.scss';


//importing custom components
import Header from './header/header.component';
import Main from './main/main.component';
import Footer from './footer/footer.component';

const AppContainer = ({ isAsideExpended, setIsAsideExpended }) => {
    return (
        <div className="appContainer">
            <Header {...{ isAsideExpended, setIsAsideExpended }} />
            <Main />
            <Footer />
        </div>
    );
}

export default AppContainer;