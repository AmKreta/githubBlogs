import React, { useCallback } from 'react';
import './header.styles.scss';

import Logo from './writing.svg';

//importing icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = ({ isAsideExpended, setIsAsideExpended }) => {

    const toggleMenu = useCallback(() => {
        setIsAsideExpended(prevState => !prevState);
    }, [setIsAsideExpended]);

    return (
        <header className='primary text appContainerHeader'>
            <div className="logo">
                <img className='logoImage' src={Logo} height='40' width='40' alt='logo'/>
                <h2 className="logotitle">
                    Github Blogs
                </h2>
            </div>
            {
                isAsideExpended
                    ? <AiOutlineClose size='25px' onClick={toggleMenu} />
                    : <GiHamburgerMenu size='25px' onClick={toggleMenu} />
            }
        </header>
    );
}

export default Header;