import React from 'react';
import './insert.styles.scss'

//importing icons
import { AiOutlineOrderedList, AiOutlineUnorderedList, AiOutlineTable } from 'react-icons/ai';
import { BsFillImageFill, BsFileEarmarkPlus, BsFillCameraVideoFill } from 'react-icons/bs';
import { ImEmbed2 } from 'react-icons/im';

const Insert = () => {
    return (
        <div className="primary text subToolbar insert">
            <div>
                <BsFillImageFill />
                <p>image</p>
            </div>
            <div>
                <BsFillCameraVideoFill />
                <p>video</p>
            </div>
            <div>
                <BsFileEarmarkPlus />
                <p>file</p>
            </div>
            <div>
                <ImEmbed2 />
                <p>embed</p>
            </div>
            <div>
                <AiOutlineOrderedList />
                <p>ordered-list</p>
            </div>
            <div>
                <AiOutlineUnorderedList />
                <p>unordered-list</p>
            </div>
            <div>
                <AiOutlineTable />
                <p>table</p>
            </div>
        </div>
    );
}

export default React.memo(Insert);