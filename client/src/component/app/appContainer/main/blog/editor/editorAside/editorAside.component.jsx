import React, { useState } from 'react';
import './editorAside.styles.scss';

//importing custom components
import EditorAsideToolbar from './editorAsideToolbar/editorAsideToolbar.component';
import EditorAsideSubToolbar from './editorAsideSubToolBar/editorAsideSubToolbar.component';

const EditorAside = () => {
    const [activeTool, setActiveTool] = useState('layouts');
    return (
        <div className="editorAside">
            <EditorAsideToolbar {...{ activeTool, setActiveTool }} />
            <EditorAsideSubToolbar {...{ activeTool }} />
        </div>
    );
}

export default EditorAside;