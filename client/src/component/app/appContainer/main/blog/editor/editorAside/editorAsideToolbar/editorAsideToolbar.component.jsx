import React, { useCallback } from 'react';
import './editorAsideToolbar.styles.scss';

const EditorAsideSubToolbar = ({ activeTool, setActiveTool }) => {
    const clickHandler = useCallback((e) => {
        setActiveTool(e.target.innerText.toLowerCase());
    }, [setActiveTool]);
    return (
        <div className="editorAsideToolbar">
            <div
                onClick={clickHandler}
                className={`${activeTool === 'layouts' ? 'primary text activeAsideTool' : null}`}
            >
                layouts
            </div>
            <div
                onClick={clickHandler}
                className={`${activeTool === 'modifire' ? 'primary text activeAsideTool' : null}`}
            >
                modifire
            </div>
            <div
                onClick={clickHandler}
                className={`${activeTool === 'pages' ? 'primary text activeAsideTool' : null}`}
            >
                pages
            </div>
        </div>
    );
}

export default EditorAsideSubToolbar;
