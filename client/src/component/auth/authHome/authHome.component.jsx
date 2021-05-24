import React, { useRef, useCallback } from 'react';
import './authHome.styles.scss';

//importing custom components
import Header from './header/header.component';
import Main from './main/main.component';
import Footer from './footer/footer.component';

const AuthHome = ({ match,history }) => {
    const mainRef = useRef();
    const footerRef = useRef();

    const scrollToMain = useCallback(() => {
        mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [mainRef]);

    const scrollToFooter = useCallback(() => {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [footerRef]);

    return (
        <div className="authHome">
            <Header {...{ scrollToMain, scrollToFooter }} />
            <Main Ref={mainRef} scrollToFooter={scrollToFooter} match={match} history={history}/>
            <Footer Ref={footerRef} scrollToMain={scrollToMain} />
        </div>
    );
}

export default AuthHome;