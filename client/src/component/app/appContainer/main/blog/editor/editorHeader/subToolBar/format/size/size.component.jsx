import React, { useCallback, useContext, useMemo, useState, useEffect } from 'react';
import { BiFontSize } from 'react-icons/bi';

//importing context
import ActiveElementContext from '../../../../activeElementContext/activeElement.context';


const FontSize = () => {
    const sizes = useMemo(() => Array.from({ length: 60 }, (_, i) => i + 1), []);

    const activeElement = useContext(ActiveElementContext);

    const [fontSize, setFontSize] = useState();

    const changeHandler = useCallback((e) => {
        activeElement && (activeElement.style['font-size'] = `${e.target.value}px`);
        setFontSize(e.target.value);
    }, [activeElement, setFontSize]);

    useEffect(() => {
        setFontSize(activeElement?.style['font-size'].replace('px', ''));
    }, [activeElement, setFontSize]);

    return (
        <div>
            <BiFontSize />
            <p>size</p>
            <select onChange={changeHandler} value={fontSize}>
                {
                    sizes.map((item, index) => <option key={index}>{item}</option>)
                }
            </select>
        </div>
    );
}

export default FontSize;