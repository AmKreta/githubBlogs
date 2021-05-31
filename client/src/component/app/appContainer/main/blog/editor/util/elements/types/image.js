function createImage(link) {
    let img = document.createElement('img');
    img.src = link;
    img.style['height'] = '300px';
    img.style['width'] = '300px';
    return img;
}

export default createImage;