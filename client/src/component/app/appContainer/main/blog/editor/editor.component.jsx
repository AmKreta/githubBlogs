import React, { useReducer, useMemo, useCallback } from 'react';
import './editor.styles.scss';

//importing custom components
import EditorHeader from './editorHeader/editorHeader.component';
import EditorMain from './editorMain/editorMain.component';
import EditorAside from './editorAside/editorAside.component';

const Editor = () => {
    const initialState = useMemo(() => ({
       
    }), []);

    const reducer = useCallback((state = initialState, action) => {

    }, []);

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="editor">
            <EditorHeader />
            <EditorMain />
            <EditorAside />
        </div>
    );
}

export default Editor;