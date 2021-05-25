import React from 'react';
import './editorAsideToolbar.styles.scss';

//importing custom components
import Layouts from './layouts/layouts.component';
import Modifire from './modifire/modifire.component';
import Pages from './pages/pages.component';

const EditorAsideSubToolbar = () => {
    return (
        <div className="editorAsideSubToolbar">
            <Layouts />
            <Modifire />
            <Pages />
        </div>
    );
}

export default EditorAsideSubToolbar;
