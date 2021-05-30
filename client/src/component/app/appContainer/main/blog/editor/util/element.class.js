import { v4 as uuidv4 } from 'uuid';
import { SET_ACTIVE_ELEMENT } from '../editor.component';


const createElement = (type) => {
    //creating element and adding some text
    let element = document.createElement('div');
    element.style['position'] = 'relative';
    element.contentEditable = 'true';
    element.style.width = '400px';
    element.innerText = 'some text';

    let id = uuidv4();
    element.id = `el-${id}`;

    document.querySelector('.activeDynamicElement')?.classList.remove('activeDynamicElement');
    element.classList.add('dynamicallyAddedElement');
    element.classList.add('activeDynamicElement');

    document.querySelector('.editorMain').appendChild(element);

    SET_ACTIVE_ELEMENT(element.id);

    return element;
}


//add function to select resize 
function Element(type) {
    let element = createElement(type);

    element.addEventListener('click', function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        document.querySelector('.activeDynamicElement')?.classList.remove('activeDynamicElement');
        element.classList.add('activeDynamicElement');
        SET_ACTIVE_ELEMENT(e.target.id);
    });

    /*element.addEventListener('blur', function (e) {
        element.classList.remove('activeDynamicElement');
    });*/

    element.addEventListener('mouseover', function (e) {
        //element.style['outline'] = 'black solid 2px';
        element.onpaste = e => {
            e.preventDefault();
            var text = (e.originalEvent || e).clipboardData.getData('text/plain');
            // insert text manually
            document.execCommand("insertHTML", false, text);
        }
    });

    element.addEventListener('mouseout', function (e) {
        //element.style['outline'] = 'none';
        element.onpaste = null;
    });

    element.addEventListener('mousedown', function (e) {
        let x = e.clientX;
        let y = e.clientY;
        let key;
        document.onkeydown = (event) => {
            key = event.key;
        }
        e.target.onmousemove = (event) => {
            let dx = event.clientX;
            let dy = event.clientY;
            switch (key) {
                case 'Control':
                    //scale
                    if (dx !== x && dy !== y) {
                        document.querySelector('body').style['cursor'] = 'nw-resize';
                    }
                    else if (dx === x) {
                        document.querySelector('body').style['cursor'] = 'n-resize';
                    }
                    else if (dy === y) {
                        document.querySelector('body').style['cursor'] = 'e-resize';
                    }

                    e.target.style['height'] = `${e.target.offsetHeight + (dy - y)}px`;
                    e.target.style['width'] = `${e.target.offsetWidth + (dx - x)}px`;
                    break;
                case 'Alt':
                    break;
                default:
                    console.log('no actions set for ' + key);
            }
            x = dx;
            y = dy;
        }
    });

    element.addEventListener('mouseup', function (e) {
        document.onkeydown = null;
        e.target.onmousemove = null;
        document.querySelector('body').style['cursor'] = 'default';
    });

    //to indicate content is editable, dont remove might cauze editor to misbehave
    element.focus();

}

export default Element;