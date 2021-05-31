import createElement from './elements/createElement';
import { SET_ACTIVE_ELEMENT } from '../editor.component';

let Link = 'https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';

//add function to select resize 
function Element(type, link = Link) {

    let element = createElement(type, link);
    SET_ACTIVE_ELEMENT(element.id);

    element.addEventListener('click', function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        document.querySelector('.activeDynamicElement')?.classList.remove('activeDynamicElement');
        element.classList.add('activeDynamicElement');
        SET_ACTIVE_ELEMENT(e.target.id);
    });

    element.addEventListener('mouseover', function (e) {
        element.onpaste = e => {
            e.preventDefault();
            var text = (e.originalEvent || e).clipboardData.getData('text/plain');
            // insert text manually
            document.execCommand("insertHTML", false, text);
        }
    });

    element.addEventListener('mouseout', function (e) {
        element.onpaste = null;
    });

    element.addEventListener('mousedown', function (e) {
        e.preventDefault();
        //perform transform operations
        let x = e.clientX;
        let y = e.clientY;
        let key;
        document.onkeydown = (event) => {
            key = event.key;
        }
        e.target.onmousemove = (event) => {
            event.preventDefault();
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