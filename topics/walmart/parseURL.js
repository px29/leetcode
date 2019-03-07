function parseURL (url) {
    const result = {};
    const u = url.split('?');
    if (u[1]) {
        const t = u[1].split('#');
        if (t[1]) {
            result['fragment'] = t[1];
        }
        const params = t[0].split('&');
        const paramObj = {};
        for (const p of params) {
            const pSlited = p.split('=');
            paramObj[pSlited[0]] = pSlited[1];
        }
        result['params'] = paramObj;
    }
    if (u[0]) {
        const t = u[0].split("\/\/");
        result['protocal'] = t[0].substring(0, t[0].length - 1); // :
        if (t[1]) {
            const p = t[1].split('\/');
            result['host'] = p[0];
            result['path'] = p.slice(1);
        }
    }
    return result;
}

module.exports = parseURL;