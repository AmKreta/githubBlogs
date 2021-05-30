import React, { useCallback, useContext, useMemo, useState, useEffect } from 'react';
import { BiFontFamily } from 'react-icons/bi';

//importing context
import ActiveElementContext from '../../../../activeElementContext/activeElement.context';

const Font = () => {

    const fonts = useMemo(getFonts, []);

    const activeElement = useContext(ActiveElementContext);

    const [fontFamily, setFontFamily] = useState();

    const changeHandler = useCallback((e) => {
        activeElement && (activeElement.style['fontFamily'] = e.target.value);
        setFontFamily(e.target.value);
    }, [activeElement, setFontFamily]);

    useEffect(() => {
        setFontFamily(activeElement?.style['fontFamily']);
    }, [activeElement, setFontFamily]);

    return (
        <div>
            <BiFontFamily />
            <p>font</p>
            <select onChange={changeHandler} value={fontFamily}>
                {fonts.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    );
}

const getFonts = () => {
    const fontCheck = new Set([
        // Windows 10
        'Arial', 'Arial Black', 'Bahnschrift', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Comic Sans MS', 'Consolas', 'Constantia', 'Corbel', 'Courier New', 'Ebrima', 'Franklin Gothic Medium', 'Gabriola', 'Gadugi', 'Georgia', 'HoloLens MDL2 Assets', 'Impact', 'Ink Free', 'Javanese Text', 'Leelawadee UI', 'Lucida Console', 'Lucida Sans Unicode', 'Malgun Gothic', 'Marlett', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU-ExtB', 'Mongolian Baiti', 'MS Gothic', 'MV Boli', 'Myanmar Text', 'Nirmala UI', 'Palatino Linotype', 'Segoe MDL2 Assets', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Historic', 'Segoe UI Emoji', 'Segoe UI Symbol', 'SimSun', 'Sitka', 'Sylfaen', 'Symbol', 'Tahoma', 'Times New Roman', 'Trebuchet MS', 'Verdana', 'Webdings', 'Wingdings', 'Yu Gothic',
        // macOS
        'American Typewriter', 'Andale Mono', 'Arial', 'Arial Black', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS', 'Avenir', 'Avenir Next', 'Avenir Next Condensed', 'Baskerville', 'Big Caslon', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bradley Hand', 'Brush Script MT', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charter', 'Cochin', 'Comic Sans MS', 'Copperplate', 'Courier', 'Courier New', 'Didot', 'DIN Alternate', 'DIN Condensed', 'Futura', 'Geneva', 'Georgia', 'Gill Sans', 'Helvetica', 'Helvetica Neue', 'Herculanum', 'Hoefler Text', 'Impact', 'Lucida Grande', 'Luminari', 'Marker Felt', 'Menlo', 'Microsoft Sans Serif', 'Monaco', 'Noteworthy', 'Optima', 'Palatino', 'Papyrus', 'Phosphate', 'Rockwell', 'Savoye LET', 'SignPainter', 'Skia', 'Snell Roundhand', 'Tahoma', 'Times', 'Times New Roman', 'Trattatello', 'Trebuchet MS', 'Verdana', 'Zapfino',
    ].sort());

    try {
        //await document.fonts.ready;
        const fontAvailable = [];

        for (const font of fontCheck.values()) {
            if (document.fonts.check(`12px "${font}"`)) {
                fontAvailable.push(font);
            }
        }
        return fontAvailable;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

export default Font;