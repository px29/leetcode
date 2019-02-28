function generateProps(props) {
    let result = '';
    Object.keys(props).forEach(key => {
        result += ` ${key}="${props[key]}"`;
    });
    return result;
}
function jsonToHtml(x) {
    if (!x || !x.tag) {
        return '';
    }
    const props = x.props ? generateProps(x.props) : '';
    const beginTag = `<${x.tag}${props}>`;
    const closeTag = `</${x.tag}>`;
    let sub = '';
    for (let i = 0; x.children && i < x.children.length; i++) {
        const temp = jsonToHtml(x.children[i]);
        sub += '\n' + temp;
    }
    return beginTag + sub + '\n' + closeTag;
}

function htmlToJson(html) {
    const array = html.split('\n');
    const start = array.unshift();
    const end = array.pop();
    const obj = {};
    obj.tag = start.trim();
    console.log(array);
}

module.exports = {
    jsonToHtml,
    htmlToJson,
};
