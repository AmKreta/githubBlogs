import React, { useState, useEffect } from 'react';
import './editor.styles.scss';

//importing custom components
import EditorHeader from './editorHeader/editorHeader.component';
import EditorMain from './editorMain/editorMain.component';
import EditorAside from './editorAside/editorAside.component';

//importing context
import ActiveElementContext from './activeElementContext/activeElement.context';

let SET_ACTIVE_ELEMENT;

const Editor = () => {
    const [activeElement, setActiveElement] = useState(null);
    const [selectedText, setSelectedText] = useState(null);

    useEffect(() => {
        SET_ACTIVE_ELEMENT = setActiveElement;
        //area where content is edited
        SET_ACTIVE_ELEMENT('contentEditableContainer');
    }, [setActiveElement]);

    return (
        <div className="editor" style={{ borderTopColor: null }}>
            <ActiveElementContext.Provider value={document.getElementById(activeElement)}>
                <EditorHeader />
                <EditorMain setActiveElement={setActiveElement} />
                <EditorAside />
            </ActiveElementContext.Provider>
        </div>
    );
}

export { SET_ACTIVE_ELEMENT };

export default Editor;