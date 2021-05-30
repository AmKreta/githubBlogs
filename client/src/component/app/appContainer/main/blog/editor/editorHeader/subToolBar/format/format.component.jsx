import React, { useContext, useState, useCallback, useEffect } from 'react';
import './format.styles.scss'

//importing icon
import { BiBold, BiItalic, BiUnderline, BiAlignRight, BiAlignLeft, BiAlignMiddle } from 'react-icons/bi';

//importing custom components
import Font from './font/font.component';
import Size from './size/size.component';
import Color from './color/color.component';
import BackgroundColor from './backgroundColor/backgroundColor.component';

//importing context
import ActiveElementContext from '../../../activeElementContext/activeElement.context';

const Format = () => {

    const activeElement = useContext(ActiveElementContext);

    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderlined, setIsUnderlined] = useState(false);
    const [alignment, setAlignment] = useState('center');

    const toggleBold = useCallback(() => {
        setIsBold(prevState => {
            if (prevState) {
                activeElement.style['font-weight'] = 'initial';
            }
            else {
                activeElement.style['font-weight'] = 'bold';
            }
            return !prevState;
        });
    }, [activeElement, setIsBold]);

    const toggleItalic = useCallback(() => {
        setIsItalic(prevState => {
            return !prevState;
        });
    }, [setIsItalic]);

    const toggleUnderline = useCallback(() => {
        setIsUnderlined(prevState => {
            if (prevState) {
                activeElement.style['text-decoration'] = 'initial';
            }
            else {
                activeElement.style['text-decoration'] = 'underline';
            }
            return !prevState;
        });
    }, [activeElement, setIsUnderlined]);

    const alignLeft = useCallback((e) => {
        activeElement && (activeElement.style['text-align'] = 'left');
        setAlignment('left');
    }, [activeElement, setAlignment]);

    const alignRight = useCallback((e) => {
        activeElement && (activeElement.style['text-align'] = 'right');
        setAlignment('right');
    }, [activeElement, setAlignment]);

    const alignCenter = useCallback((e) => {
        activeElement && (activeElement.style['text-align'] = 'center');
        setAlignment('center');
    }, [activeElement, setAlignment]);

    useEffect(() => {
        activeElement && (activeElement.style['font-weight'] === 'bold' ? setIsBold(true) : setIsBold(false));
        activeElement && (activeElement.style['text-decoration'] === 'underline' ? setIsUnderlined(true) : setIsUnderlined(false));
        activeElement && setAlignment(activeElement.style['text-align'] || 'center');
    }, [activeElement, setIsUnderlined, setIsItalic, setIsBold]);

    return (
        <div className="primary text subToolbar format">
            <Font />
            <Size />
            <Color />
            <BackgroundColor />
            <div>
                <div className={`${isBold ? 'primary contained centered' : null}`} onClick={toggleBold} title='bold'>
                    <BiBold />
                </div>
                <div className={`${isItalic ? 'primary contained centered' : null}`} onClick={toggleItalic} title='itlac'>
                    <BiItalic />
                </div>
                <div className={`${isUnderlined ? 'primary contained centered' : null}`} title='underline' onClick={toggleUnderline}>
                    <BiUnderline />
                </div>
            </div>
            <div>
                <div className={`${alignment === 'left' ? 'primary contained centered' : null}`}>
                    <BiAlignLeft title='align-left' onClick={alignLeft} />
                </div>
                <div className={`${alignment === 'center' ? 'primary contained centered' : null}`}>
                    <BiAlignMiddle title='align-center' onClick={alignCenter} />
                </div>
                <div className={`${alignment === 'right' ? 'primary contained centered' : null}`}>
                    <BiAlignRight title='align-right' onClick={alignRight} />
                </div>
            </div>
        </div>
    );
}



export default Format;