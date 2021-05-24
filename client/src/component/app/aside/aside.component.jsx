import React, { useState, useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './aside.styles.scss';

//importing icons
import { AiFillSetting } from 'react-icons/ai';
import { SiFeedly } from 'react-icons/si';
import { BsFillChatQuoteFill, BsFillPersonFill } from 'react-icons/bs';
import { FaSearch, FaBlog } from 'react-icons/fa';

//importing custom component
import NavItem from './navItem/navItem.component';

const Aside = ({ match, history, isAsideExpended }) => {

    const [activeLink, setActiveLink] = useState('');

    const goTo = useCallback((page) => {
        history.push(`${match.url}/${page}`);
        setActiveLink(page);
    }, [history, match.url]);

    useEffect(() => {
        setActiveLink('feed');
    }, [setActiveLink]);

    return (
        <aside className={`${isAsideExpended ? 'expended' : null}`} style={{ '--elevation': '20px' }}>
            <nav className='primary contained '>
                <NavItem title='feed' icon={SiFeedly} goTo={goTo} isActive={activeLink === 'feed'} />
                <NavItem title='profile' icon={BsFillPersonFill} goTo={goTo} isActive={activeLink === 'profile'} />
                <NavItem title='setting' icon={AiFillSetting} goTo={goTo} isActive={activeLink === 'setting'} />
                <NavItem title='blog' icon={FaBlog} goTo={goTo} isActive={activeLink === 'blog'} />
                <NavItem title='chat' icon={BsFillChatQuoteFill} goTo={goTo} isActive={activeLink === 'chat'} />
                <NavItem title='search' icon={FaSearch} goTo={goTo} isActive={activeLink === 'search'} />
            </nav>
        </aside>
    );
}

export default withRouter(Aside);