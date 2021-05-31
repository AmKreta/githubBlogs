function createYoutubeVideos(link) {
    let frag = document.createRange().createContextualFragment(link);
    let iframe = frag.querySelector('iframe');
    return iframe;
}

export default createYoutubeVideos;