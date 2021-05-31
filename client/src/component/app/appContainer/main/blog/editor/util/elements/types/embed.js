function createEmbed(link) {
    let embed = document.createElement('embed');
    embed.src = link;
    embed.style['height'] = '300px';
    embed.style['width'] = '300px';
    return embed;
}

export default createEmbed;