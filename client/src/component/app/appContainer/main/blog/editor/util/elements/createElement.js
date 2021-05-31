import { v4 as uuidv4 } from 'uuid';

import createDiv from './types/div';
import createHeading from './types/heading';
import createTitle from './types/title';
import createSubTitle from './types/sub-title';
import createParagraph from './types/paragraph';
import createLink from './types/link';
import createImage from './types/image';
import createVideo from './types/video';
import createYoutubeVideo from './types/youtubeVideo';
import createEmbed from './types/embed';

function createElement(type, link) {
    let element = createDiv();
    let isContentEditable = true;
    switch (type) {
        case 'div':
            element = createDiv();
            break;
        case 'paragraph':
            element = createParagraph();
            break;
        case 'heading':
            element = createHeading();
            break;
        case 'title':
            element = createTitle();
            break;
        case 'subTitle':
            element = createSubTitle();
            break;
        case 'link':
            element = createLink();
            break;
        case 'image':
            element = createImage(link);
            break;
        case 'video':
            element = createVideo(link);
            isContentEditable = false;
            break;
        case 'youtubeVideo':
            element = createYoutubeVideo(link);
            isContentEditable = false;
            break;
        case 'embed':
            element = createEmbed(link);
            isContentEditable = false;
            break;
        default:
            console.log('invalid html element type, cant be created !');
            break;
    }

    element.style['position'] = 'relative';
    element.contentEditable = isContentEditable;
    element.style.width = 'Min(100%,400px)';

    let id = uuidv4();
    element.id = `el-${id}`;

    if (document.querySelector('.activeDynamicElement') !== null) {
        document.querySelector('.activeDynamicElement').appendChild(element);
    }
    else {
        document.querySelector('.editorMain').appendChild(element);
    }


    document.querySelector('.activeDynamicElement')?.classList.remove('activeDynamicElement');
    element.classList.add('dynamicallyAddedElement');
    element.classList.add('activeDynamicElement');


    return element;
}

export default createElement;