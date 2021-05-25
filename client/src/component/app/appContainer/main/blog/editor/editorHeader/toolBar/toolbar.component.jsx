import React, { useCallback } from 'react';
import './toolbar.styles.scss';

const EditorHeaderToolbar = ({ activeToolBar, setActiveToolBar }) => {
    const clickHandler = useCallback((e) => {
        setActiveToolBar(e.target.innerText);
    }, [setActiveToolBar]);

    return (
        <div className="editorHeaderToolbar">
            <p onClick={clickHandler} className={`${activeToolBar === 'file' ? 'activeToolBar' : null}`}>file</p>
            <p onClick={clickHandler} className={`${activeToolBar === 'format' ? 'activeToolBar' : null}`}>format</p>
            <p onClick={clickHandler} className={`${activeToolBar === 'insert' ? 'activeToolBar' : null}`}>insert</p>
            <p onClick={clickHandler} className={`${activeToolBar === 'view' ? 'activeToolBar' : null}`}>view</p>
        </div>
    );
}

export default EditorHeaderToolbar;