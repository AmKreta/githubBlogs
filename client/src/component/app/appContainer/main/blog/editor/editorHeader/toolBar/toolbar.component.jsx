import React, { useCallback } from 'react';
import './toolbar.styles.scss';

const EditorHeaderToolbar = ({ activeToolBar, setActiveToolBar }) => {
    const clickHandler = useCallback((e) => {
        setActiveToolBar(e.target.innerText.toLowerCase());
    }, [setActiveToolBar]);

    return (
        <div className="editorHeaderToolbar">
            <p onClick={clickHandler} className={`${activeToolBar === 'file' ? 'primary text activeToolBar' : null}`}>file</p>
            <p onClick={clickHandler} className={`${activeToolBar === 'format' ? 'primary text activeToolBar' : null}`}>format</p>
            <p onClick={clickHandler} className={`${activeToolBar === 'insert' ? 'primary text activeToolBar' : null}`}>insert</p>
            <p onClick={clickHandler} className={`${activeToolBar === 'view' ? 'primary text activeToolBar' : null}`}>view</p>
        </div>
    );
}

export default EditorHeaderToolbar;