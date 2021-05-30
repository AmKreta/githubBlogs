import React from 'react';
import './layouts.styles.scss';

//importing utils
import element from '../../../util/element.class';

const Layouts = () => {
    return (
        <div className="primary text editorAsideSubToolbar layouts">
            <div onClick={(e)=>element('div')}>
                <p>div</p>
            </div>
            <div>
                <p>title</p>
            </div>
            <div>
                <p>sub-title</p>
            </div>
            <div>
                <p>paragraph</p>
            </div>
            <div>
                <p>link</p>
            </div>
            <div>
                <p>unordered-list</p>
            </div>
            <div>
                <p>ordered-list</p>
            </div>
            <div>
                <p>defination-list</p>
            </div>
            <div>
                <p>table</p>
            </div>
        </div>
    );
}

export default React.memo(Layouts);