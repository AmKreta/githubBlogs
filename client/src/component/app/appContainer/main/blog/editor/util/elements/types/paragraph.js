function createParagraph() {
    let paragraph = document.createElement('p');
    paragraph.innerText = 'Add some text';
    paragraph.style['font-size'] = '20px';
    return paragraph;
}

export default createParagraph;