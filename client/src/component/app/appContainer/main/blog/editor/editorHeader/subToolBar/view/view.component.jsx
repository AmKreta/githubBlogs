import React from 'react';
import './view.styles.scss'

//importing icons
import { BsGrid3X3 } from 'react-icons/bs';

const View = () => {
    return (
        <div className="primary text subToolbar view">
            <div>
                <BsGrid3X3 />
                <p>grid</p>
                <input type="checkbox" />
            </div>
        </div>
    );
}

export default View;