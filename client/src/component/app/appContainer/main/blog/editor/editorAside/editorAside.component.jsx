import React from 'react';
import './editorAside.component.jsx';

//importing custom components
import EditorAsideToolbar from './editorAsideToolbar/editorAsideToolbar.component';

const EditorAside = () => {
    return (
        <div className="editorAside">
            <EditorAsideToolbar />
        </div>
    );
}

export default EditorAside;