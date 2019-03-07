function parseURL (url) {
    const result = {};
    const param = url.split('?');
    const protocolAndHost = param[0].split('\/\/');
    result['protocol'] = protocolAndHost[0].substring(0, protocolAndHost[0].length - 1);
    const index = protocolAndHost[1].indexOf('\/');
    result['host'] =  protocolAndHost[1].substring(0, index);
    result['path'] =  protocolAndHost[1].substring(index + 1);

    const fragmentIndex = param[1].indexOf('#');
    result['fragment'] = param[1].substring(fragmentIndex + 1);
    const params = param[1].split('#')[0].split('&');
    const p = {};
    for (const r of params) {
        const rSplied = r.split('=');
        if (p.hasOwnProperty(rSplied[0])) {
            p[rSplied[0]].push(rSplied[1]);
        } else {
            p[rSplied[0]] = [rSplied[1]];
        }
    }
    result.params = p;
    return result;
}

module.exports = parseURL;