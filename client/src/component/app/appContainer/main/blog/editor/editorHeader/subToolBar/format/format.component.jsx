import React from 'react';
import './format.styles.scss'

//importing icon
import { BiFontFamily, BiFontSize, BiFontColor, BiBold, BiItalic, BiUnderline, BiAlignRight, BiAlignLeft, BiAlignMiddle } from 'react-icons/bi';
import { AiFillFormatPainter } from 'react-icons/ai';

const Format = () => {
    return (
        <div className="primary text subToolbar format">
            <div>
                <BiFontFamily />
                <p>font</p>
            </div>
            <div>
                <BiFontSize />
                <p>size</p>
            </div>
            <div>
                <BiFontColor />
                <p>color</p>
                <p style={{ height: '15px', width: '15px', backgroundColor: 'black', border:'1px solid black' }} />
            </div>
            <div>
                <AiFillFormatPainter />
                <p>background</p>
                <p style={{ height: '15px', width: '15px', backgroundColor: 'white', border:'1px solid black'}} />
            </div>
            <div>
                <BiBold title='bold' />
                <BiItalic title='itlac' />
                <BiUnderline title='underline' />
            </div>
            <div>
                <BiAlignLeft title='align-left' />
                <BiAlignMiddle title='align-middle' />
                <BiAlignRight title='align-right' />
            </div>
        </div>
    );
}

export default Format;