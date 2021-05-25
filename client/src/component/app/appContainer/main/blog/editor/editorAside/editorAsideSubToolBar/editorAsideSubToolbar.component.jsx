import React from 'react';
import './editorAsideSubToolbar.styles.scss';

//importing custom components
import Layouts from './layouts/layouts.component';
import Modifire from './modifire/modifire.component';
import Pages from './pages/pages.component';


const EditorAsideSubToolbar = ({ activeTool }) => {
    switch (activeTool) {
        case 'layouts':
            return <Layouts />
        case 'modifire':
            return <Modifire />
        case 'pages':
            return <Pages />
        default:
            console.log('invalid aside tolbar selected');
            return <Layouts />
    }
}

export default EditorAsideSubToolbar;