import React, { useContext, useCallback, useState, useEffect } from 'react';
import { AiFillFormatPainter } from 'react-icons/ai';

//importing context
import ActiveElementContext from '../../../../activeElementContext/activeElement.context';

//importing util
import rgbToHex from '../../../../util/rgbToHex';

const BackgroundColor = () => {

    const activeElement = useContext(ActiveElementContext);

    const [backgroundColor, setBackgroundColor] = useState('#fff');

    useEffect(() => {
        setBackgroundColor(activeElement?.style['background-color'] ? rgbToHex(activeElement.style['background-color']) : '#ffffff');
    }, [setBackgroundColor, activeElement]);

    const changeHandler = useCallback((e) => {
        activeElement && (activeElement.style['background-color'] = e.target.value);
        setBackgroundColor(e.target.value);
    }, [activeElement, setBackgroundColor]);

    return (
        <div>
            <AiFillFormatPainter />
            <p>background</p>
            <input type='color' style={{ width: '20px' }} value={backgroundColor} onChange={changeHandler} />
        </div>
    );
}

export default BackgroundColor;