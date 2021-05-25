import React from 'react';
import './file.styles.scss';

//importing icons
import { AiFillFileAdd, AiFillFolderOpen, AiFillSave } from 'react-icons/ai';

const File = () => {
    return (
        <div className="primary text subToolbar file">
            <div>
                <AiFillFileAdd />
                <p>new</p>
            </div>
            <div>
                <AiFillFolderOpen />
                <p>open</p>
            </div>
            <div>
                <AiFillSave />
                <p>save</p>
            </div>
        </div>
    );
}

export default File;