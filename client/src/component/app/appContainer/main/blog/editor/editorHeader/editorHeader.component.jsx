import React, { useState } from 'react';
import './editorHeader.styles.scss';

//importing custom components
import Toolbar from './toolBar/toolbar.component';
import SubToolBar from './subToolBar/subToolBar.component';

const EditorHeader = () => {
    const [activeToolBar, setActiveToolBar] = useState('format');
    
    return (
        <div className="editorHeader">
            <Toolbar {...{ activeToolBar, setActiveToolBar }} />
            <SubToolBar {...{ activeToolBar }} />
        </div>
    );
}

export default EditorHeader;