function parseURL (url) {
    const decodedURL = decodeURI(url);
    const params = decodedURL.split('#')[0].split('?')[1].split('&');
    const result = {};
    for (const p of params) {
        const splitedP = p.split('=');
        if (result.hasOwnProperty(splitedP[0])) {
            result[splitedP[0]].push(splitedP[1]);
        } else {
            result[splitedP[0]] = [splitedP[1]];
        }
    }
    return result;
}

function call() {
    const r = parseURL('http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor');
    console.log(r);
}

module.exports = call;