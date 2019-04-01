function mapDOM(element, json) {
    const treeObject = {};
    if (typeof element === "string") {
        if (window.DOMParser) {
              parser = new DOMParser();
              docNode = parser.parseFromString(element,"text/xml");
        } else { // Microsoft strikes again
              docNode = new ActiveXObject("Microsoft.XMLDOM");
              docNode.async = false;
              docNode.loadXML(element); 
        } 
        element = docNode.firstChild;
    }
    function treeHTML(element, object) {
        object['type'] = element.nodeName;
        const nodeList = element.childNodes;
        if (nodeList !== null) {
            if (nodeList.length) {
                object["content"] = [];
                for (let i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].nodeType === 3) {
                        object['content'].push(nodeList[i].nodeValue);
                    } else {
                        const
                    }
                }
            }
        }
    }
}