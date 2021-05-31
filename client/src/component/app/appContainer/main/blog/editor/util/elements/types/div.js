function createDiv(){
    let div=document.createElement('div');
    div.innerText='Add some text';
    div.style['font-size']='20px';
    return div;
}

export default createDiv;