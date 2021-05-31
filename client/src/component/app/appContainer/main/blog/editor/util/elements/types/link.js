function createLink() {
    let link = document.createElement('a');
    link.innerText = 'link';
    link.style['text-decoration'] = 'underline';
    link.style['color'] = 'blue';
    return link;
}

export default createLink;