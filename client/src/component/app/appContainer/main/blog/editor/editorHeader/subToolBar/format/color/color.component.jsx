import React, { useContext, useCallback, useState, useEffect } from 'react';
import { BiFontColor } from 'react-icons/bi';

//importing context
import ActiveElementContext from '../../../../activeElementContext/activeElement.context';

//importing utility
import rgbToHex from '../../../../util/rgbToHex';

const Color = () => {

    const activeElement = useContext(ActiveElementContext);

    const [fontColor, setFontColor] = useState('#000');

    useEffect(() => {
        setFontColor(activeElement ? rgbToHex(activeElement.style['color']) : '#000000');
    }, [activeElement, setFontColor]);

    const changeHandler = useCallback((e) => {
        activeElement && (activeElement.style['color'] = e.target.value);
        setFontColor(e.target.value);
    }, [activeElement, setFontColor]);

    return (
        <div>
            <BiFontColor />
            <p>color</p>
            <input type='color' style={{ width: '20px' }} value={fontColor} onChange={changeHandler} />
        </div>
    );
}

export default Color;

