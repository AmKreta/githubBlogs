import React from 'react';
import './button.styles.scss';
import { IconContext } from 'react-icons';

const Button = ({ label, onClick, frontIcon, backIcon, className = 'primary contained box-shadow', iconProps, ...props }) => {
    return (
        <button onClick={onClick} className={`button ${className}`} {...props}>
            {
                frontIcon && (
                    <IconContext.Provider value={{ className: 'buttonIcon front' }}>
                        {frontIcon(iconProps)}
                    </IconContext.Provider>
                )
            }
            <span>
                {label}
            </span>
            {
                backIcon && (
                    <IconContext.Provider value={{ className: 'buttonIcon back' }}>
                        {backIcon(iconProps)}
                    </IconContext.Provider>
                )
            }
        </button>
    );
}

export default React.memo(Button);