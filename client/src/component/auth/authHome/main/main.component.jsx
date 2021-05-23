import React from 'react';
import { Link } from 'react-router-dom';
import './main.styles.scss';

//importing reusable components
import Button from '../../../../reusableComponents/button/button.component';

//importing icons
import { RiLoginBoxFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';

const Main = ({ match, Ref, scrollToFooter }) => {
    return (
        <main className="authHomeMain" id='authMain' ref={Ref}>
            <div className="carousel">

            </div>
            <div className="buttonGroup">
                <Link to={`${match.url}/login`}>
                    <Button label='Login' frontIcon={RiLoginBoxFill} style={{ width: '250px' }} />
                </Link>
                <Link to={`${match.url}/signup`} >
                    <Button label='Sign Up' frontIcon={RiLoginBoxFill} style={{ width: '250px' }} className='secondary contained box-shadow' />
                </Link>
                <Button label='Continue as guest' frontIcon={FaUserAlt} style={{ width: '250px' }} className='tertiary contained box-shadow' />
            </div>
        </main>
    );
}

export default Main;