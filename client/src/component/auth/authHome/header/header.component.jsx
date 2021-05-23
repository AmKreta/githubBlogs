import React from 'react';
import './header.styles.scss';
import { motion } from 'framer-motion';

//importing assets
import Logo from './writing.svg';
import Background from './background.jpg';

//importing Button
import Button from '../../../../reusableComponents/button/button.component.jsx';

//importing icons
import { ImEnter } from 'react-icons/im';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Header = ({ scrollToMain, scrollToFooter }) => {
    return (
        <header className='authHomeHeader' style={{ backgroundImage: `url(${Background})` }}>
            <div className='primary text'>
                <FaGithub size='40px' />
                <h1>Github Blogs</h1>
            </div>
            <figure>
                <picture>
                    <motion.img
                        src={Logo}
                        alt='blog logo'
                        variants={animations.image}
                        animate='animate'
                    />
                </picture>
                <figcaption>
                    <Button
                        label="Login/Signup"
                        style={{ width: '200px' }}
                        onClick={scrollToMain}
                        frontIcon={ImEnter}
                    />
                    <Button
                        label="Developer's Info"
                        style={{ width: '200px' }}
                        onClick={scrollToFooter}
                        frontIcon={BsFillInfoCircleFill}
                        className='secondary contained box-shadow'
                    />
                </figcaption>
            </figure>
        </header>
    );
}

const animations = {
    image: {
        animate: {
            y: -20,
            transition: {
                type: 'spring',
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    }
};

export default Header;