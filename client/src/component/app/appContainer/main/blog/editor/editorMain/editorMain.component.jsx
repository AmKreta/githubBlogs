import React, { useCallback } from 'react';
import './editorMain.styles.scss';

const EditorMain = ({ setActiveElement }) => {

    const setEditorActive = useCallback((e) => {
        document.querySelector('.activeDynamicElement')?.classList?.remove('activeDynamicElement');
        setActiveElement(e.target.id);
    }, [setActiveElement]);

    return (
        <div className="editorMain" id='contentEditableContainer' onClick={setEditorActive} />
    );
}

export default EditorMain;