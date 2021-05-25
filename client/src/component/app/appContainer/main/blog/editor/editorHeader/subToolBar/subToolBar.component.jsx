import React from 'react';
import './subToolBar.styles.scss';

//importing subToolBar
import Format from './format/format.component';
import Insert from './insert/insert.component';
import View from './view/view.component';
import File from './file/file.component';

const EditorHeaderSubToolbar = () => {
    return (
        <div className="editorHeaderSubToolbar">
            <File />
            <Format />
            <Insert />
            <View />
        </div>
    );
}

export default EditorHeaderSubToolbar;