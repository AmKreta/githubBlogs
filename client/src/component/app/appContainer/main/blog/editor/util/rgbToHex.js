function intToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

function rgbToHex(color) {
    if (color) {
        color = color.replace('rgb(', '').replace(')', '').split(',');
        let r = color[0], g = color[1], b = color[2];
        r = intToHex(r);
        g = intToHex(g);
        b = intToHex(b);
        return `#${r}${g}${b}`;
    }
    else {
        return '#000000';
    }
}

export default rgbToHex;
