import React, { useCallback } from 'react';
import { IconContext } from 'react-icons';
import './navItem.styles.scss';

const NavItem = ({ icon, title, goTo, isActive }) => {

    const clickHandler = useCallback(() => {
        goTo(title);
    }, [goTo, title]);

    return (
        <div className={`navItem ${isActive ? 'warning text activeNavItem' : null}`} onClick={clickHandler} >
            <IconContext.Provider value={{ className: 'navItemIcon' }}>
                {icon()}
            </IconContext.Provider>
            <p>{title}</p>
        </div>
    );
}

export default React.memo(NavItem, (prevProps, nextProps) => {
    return prevProps.isActive === nextProps.isActive;
});