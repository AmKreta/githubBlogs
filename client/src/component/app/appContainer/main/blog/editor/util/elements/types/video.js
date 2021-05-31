function createVideo(link) {
    let video = document.createElement('video');
    video.controls = true;
    video.autoplay = false;
    video.style['height'] = '300px';
    video.style['width'] = '300px';

    let source = document.createElement('source');
    source.src = link;

    let errMessage = document.createElement('p');
    errMessage.innerText = 'This format is not supported by your browser';

    video.appendChild(source);
    video.appendChild(errMessage);
    return video;
}

export default createVideo;