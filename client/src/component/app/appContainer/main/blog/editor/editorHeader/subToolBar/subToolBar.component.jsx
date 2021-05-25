import React from 'react';
import './subToolBar.styles.scss';

//importing subToolBar
import Format from './format/format.component';
import Insert from './insert/insert.component';
import View from './view/view.component';
import File from './file/file.component';

const EditorHeaderSubToolbar = ({ activeToolBar }) => {
    switch (activeToolBar) {
        case 'file':
            return <File />
        case 'format':
            return <Format />
        case 'insert':
            return <Insert />
        case 'view':
            return <View />
        default:
            console.log('invalid toolbar selected !');
            return <File />
    }
}

export default EditorHeaderSubToolbar;