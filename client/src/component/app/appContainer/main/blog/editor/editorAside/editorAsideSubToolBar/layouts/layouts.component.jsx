import React from 'react';
import './layouts.styles.scss';

//importing utils
import element from '../../../util/element.class';

class Layouts extends React.Component {
    createDiv = () => element('div');
    createHeading = () => element('heading');
    createTitle = () => element('title');
    createSubTitle = () => element('subTitle');
    createParagraph = () => element('paragraph');
    createLink = () => element('link');

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="primary text editorAsideSubToolbar layouts">
                <div onClick={this.createDiv}>
                    <p>div</p>
                </div>
                <div onClick={this.createHeading}>
                    <p>heading</p>
                </div>
                <div onClick={this.createTitle}>
                    <p>title</p>
                </div>
                <div onClick={this.createSubTitle}>
                    <p>sub-title</p>
                </div>
                <div onClick={this.createParagraph}>
                    <p>paragraph</p>
                </div>
                <div onClick={this.createLink}>
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
}

export default Layouts;